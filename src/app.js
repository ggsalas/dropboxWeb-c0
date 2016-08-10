import Browser from './dropbox/browser'
require('imports?$=jquery!jquery')
import 'bootstrap'
import 'bootstrap/less/bootstrap.less'
import './variables.less'

// Dropbox Browser
const ACCESS_TOKEN = 'prnzgrtU38AAAAAAAAAAE-SiM917HjJloZISMGiouOPIkzaHhzShfUz92YhwGx8N'
const ROOT_NODE = document.getElementById('root')

const browser = new Browser({access_token: ACCESS_TOKEN, root: ROOT_NODE})

browser.render({path: '/icb'})

// Calendar Slider

const CALENDAR_URL =  'https://calendar.google.com/calendar/ical/d8miajfcbt84e4on66bpcnj1r8%40group.calendar.google.com/public/basic.ics'
const GET_URL = 'https://www.googleapis.com/calendar/v3/calendars/d8miajfcbt84e4on66bpcnj1r8%40group.calendar.google.com/events?maxResults=20&key=AIzaSyBDP5gGAWSQVHFRh7YDWpIWkCLzxOVPafU'
const CALENDAR_NODE = document.getElementById('section-calendar')

fetch (GET_URL)
.then(data => console.log(data))


