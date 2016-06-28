import Browser from './dropbox/browser'
require('imports?$=jquery!jquery')
import 'bootstrap'
import 'bootstrap/less/bootstrap.less'
import './variables.less'

const ACCESS_TOKEN = 'prnzgrtU38AAAAAAAAAAE-SiM917HjJloZISMGiouOPIkzaHhzShfUz92YhwGx8N'
const ROOT_NODE = document.getElementById('root')

const browser = new Browser({access_token: ACCESS_TOKEN, root: ROOT_NODE})

browser.render({path: '/icb'})
