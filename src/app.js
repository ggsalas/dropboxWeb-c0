import Browser from './dropbox/browser'
require('imports?$=jquery!jquery')
import 'bootstrap'
import 'bootstrap/less/bootstrap.less'
import './variables.less'
import Calendar from './calendar/calendar'
import View from './calendar/view'
import Disqus from './disqus/disqus'
import {config} from './config'

/**
 * Dropbox Browser
 */
const ACCESS_TOKEN = config.dropboxAccessToken
const BASE_PATH = config.dropboxFolder
const ROOT_NODE = document.getElementById('root')
const browser = new Browser({access_token: ACCESS_TOKEN, root: ROOT_NODE, basePath: BASE_PATH})

browser.render({path: BASE_PATH})

/**
 * Google Calendar Slider
 */
const CALENDAR_ID =  config.googleCalendarId
const ROOT_ID = 'section-calendar-root'

CALENDAR_ID == '' ? '' : new Calendar(CALENDAR_ID, new View(ROOT_ID)).render();

/**
 * Disqus Chat
 */
const ROOT_DISQUS = 'section-chat-root';

config.displayDisqus == 'yes' ? new Disqus(ROOT_DISQUS) : '';
