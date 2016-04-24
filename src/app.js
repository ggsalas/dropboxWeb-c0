import Browser from './dropbox/browser'

const ACCESS_TOKEN = 'JavJ9PXXF9AAAAAAAAAANxVl8bfZOzTXUuxo3eyXoVKY14lXMl63HS0dpPVDyLzC'
const ROOT_NODE = document.getElementById('root')

const browser = new Browser({access_token: ACCESS_TOKEN, root: ROOT_NODE})

browser.render({path: ''})
