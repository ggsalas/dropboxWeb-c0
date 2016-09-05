export default function appInfo(config){ 
    const title = document.getElementById('appTitle')
    const description = document.getElementById('appDescription')
    const shortTitle = document.getElementById('appShortTitle')
    
    title.innerHTML = config.appDescription == '' ? config.appTitle : `${config.appTitle}<small>${config.appDescription}</small>`
    shortTitle.innerHTML = config.appShortTitle
}
