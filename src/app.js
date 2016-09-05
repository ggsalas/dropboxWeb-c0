import Browser from './dropbox/browser'
require('imports?$=jquery!jquery')
import 'bootstrap'
import 'bootstrap/less/bootstrap.less'
import './variables.less'
import Calendar from './calendar/calendar'
import View from './calendar/view'
import Disqus from './disqus/disqus'

/**
 * Dropbox Browser
 */
// Paste access token of dropbox account and the folder (base path)
const ACCESS_TOKEN = 'prnzgrtU38AAAAAAAAAAE-SiM917HjJloZISMGiouOPIkzaHhzShfUz92YhwGx8N'
const BASE_PATH = '/icb';

const ROOT_NODE = document.getElementById('root')
const browser = new Browser({access_token: ACCESS_TOKEN, root: ROOT_NODE, basePath: BASE_PATH})
browser.render({path: BASE_PATH})

/**
 * Google Calendar Slider
 */
// Paste calendar id
const CALENDAR_ID =  'd8miajfcbt84e4on66bpcnj1r8@group.calendar.google.com'
const ROOT_ID = 'section-calendar-root'

// comment this line to remove the calendar
new Calendar(CALENDAR_ID, new View(ROOT_ID)).render();

/**
 * Disqus Chat
 */
const ROOT_DISQUS = 'section-chat-root';

// comment this line to remove the chat
new Disqus(ROOT_DISQUS);
