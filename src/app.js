import Browser from './dropbox/browser'
require('imports?$=jquery!jquery')
import 'bootstrap'
import 'bootstrap/less/bootstrap.less'
import './variables.less'
import Calendar from './calendar/calendar'
import View from './calendar/view'
import Disqus from './disqus/disqus'
import {config} from './config'
import appInfo from './app/appInfo'

/**
 * Start AppInfo
 */
appInfo(config)

/**
 * Dropbox Browser
 */
const ACCESS_TOKEN = config.dropboxAccessToken
const BASE_PATH = config.dropboxFolder
const ROOT_NODE = document.getElementById('root')

/**
 * Google Calendar Slider
 */
const CALENDAR_ID =  config.googleCalendarId
const ROOT_ID = 'section-calendar-root'

/**
 * Disqus Chat
 */
const ROOT_DISQUS = 'section-chat-root';

/**
 * Password
 */
const LOGIN_INPUT = document.getElementById('inputPassword')
const APP_PASSWORD = config.appPass
const CONTAINER_TITLE = document.getElementById('front-title-container')
const NAVBAR = document.getElementById('navbar')
const FORM_SIGNIN = document.getElementById('form-signin')
const IMAGE_BLUR = document.getElementById('image-blur')
const HELP_BLOCK_PASSWORD = document.getElementById('helpBlockPassword')
const INPUT_PASSWORD_GROUP = document.getElementById('inputPasswordGroup')

// If the app not has password is an open site (no need login)
if (APP_PASSWORD == ''){
  appStart() 
  FORM_SIGNIN.innerHTML = '' 
}else{
  // If the app not have a password must display login form and hide navbar
  NAVBAR.style.display =  'none' 
  FORM_SIGNIN.addEventListener('submit',(e) => { 
    appStart()
    e.preventDefault()
  });
}

function appStart(){
  if (LOGIN_INPUT.value == APP_PASSWORD){
    ACCESS_TOKEN == '' ? '' : new Browser({access_token: ACCESS_TOKEN, root: ROOT_NODE, basePath: BASE_PATH}).render({path: BASE_PATH})
    CALENDAR_ID == '' ? '' : new Calendar(CALENDAR_ID, new View(ROOT_ID)).render()
    config.displayDisqus == 1 ? new Disqus(ROOT_DISQUS) : ''
    
    // Styles without access form
    FORM_SIGNIN.innerHTML = '' 
    NAVBAR.style.display =  'block' 
    CONTAINER_TITLE.style.top = 'inherit'
    CONTAINER_TITLE.style.bottom = '15vh'
    CONTAINER_TITLE.style.position = 'absolute'
    IMAGE_BLUR.style.animationDuration = '3s'
    IMAGE_BLUR.style.animationName = 'dissipate'
    NAVBAR.style.animationName = 'appear'
    NAVBAR.style.animationDuration = '3s'
    setTimeout(() => {IMAGE_BLUR.style.display = 'none'},3000)
  }else{
    HELP_BLOCK_PASSWORD.innerText = 'Contraseña incorrecta'
    INPUT_PASSWORD_GROUP.setAttribute('class', 'has-error')
  }
}

// Form clear
LOGIN_INPUT.addEventListener('focus', () => {
  HELP_BLOCK_PASSWORD.innerText = ''
  INPUT_PASSWORD_GROUP.removeAttribute('class', 'has-error')
});



