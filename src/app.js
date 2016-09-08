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

function appStart(){
    if (LOGIN_INPUT.value == APP_PASSWORD){
    ACCESS_TOKEN == '' ? '' : new Browser({access_token: ACCESS_TOKEN, root: ROOT_NODE, basePath: BASE_PATH}).render({path: BASE_PATH})
    CALENDAR_ID == '' ? '' : new Calendar(CALENDAR_ID, new View(ROOT_ID)).render()
    config.displayDisqus == 1 ? new Disqus(ROOT_DISQUS) : ''
    
    CONTAINER_TITLE .style.top = 'inherit'
    CONTAINER_TITLE .style.bottom = '15vh'
  }
}

// if the app not has password is an open site
if (APP_PASSWORD == ''){
  appStart() 
  document.getElementById('form-signin').innerHTML = '' //needs improovment
}else{
  document.getElementById('navbar').style.display =  'none' //needs improovment
  $('#loginPass').click(() => { 
    appStart()
    document.getElementById('form-signin').innerHTML = '' //needs improovment
    document.getElementById('navbar').style.display =  'block' //needs improovment
  });
}
