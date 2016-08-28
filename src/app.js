import Browser from './dropbox/browser'
require('imports?$=jquery!jquery')
import 'bootstrap'
import 'bootstrap/less/bootstrap.less'
import './variables.less'
import Calendar from './calendar/calendar'
import View from './calendar/view'

// Dropbox Browser
const ACCESS_TOKEN = 'prnzgrtU38AAAAAAAAAAE-SiM917HjJloZISMGiouOPIkzaHhzShfUz92YhwGx8N'
const ROOT_NODE = document.getElementById('root')
const BASE_PATH = '/icb';

const browser = new Browser({access_token: ACCESS_TOKEN, root: ROOT_NODE, basePath: BASE_PATH})
browser.render({path: BASE_PATH})

// Google Calendar Slider
const CALENDAR_ID =  'd8miajfcbt84e4on66bpcnj1r8@group.calendar.google.com'
const ROOT_ID = 'section-calendar-root'
new Calendar(CALENDAR_ID, new View(ROOT_ID)).render();
