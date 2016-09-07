export default function appInfo(config){ 
    const title = document.getElementById('appTitle')
    const shortTitle = document.getElementById('appShortTitle')
    const footerLinks = document.getElementById('footer-links')
    
    title.innerHTML = config.appDescription == '' ? config.appTitle : `${config.appTitle}<small>${config.appDescription}</small>`
    shortTitle.innerHTML = config.appShortTitle
   
    footerLinks.innerHTML += config.appEmail == '' ? '' :  `<a href="mailto:${config.appEmail}" class="btn btn-default btn-footer"><i class="fa fa-envelope"></i></a>`
    footerLinks.innerHTML += config.appFacebookUrl == '' ? '' :  `<a href="${config.appFacebookUrl}" class="btn btn-default btn-footer"><i class="fa fa-facebook"></i></a>`
    footerLinks.innerHTML += config.appTwitterUrl == '' ? '' :  `<a href="${config.appTwitterUrl}" class="btn btn-default btn-footer"><i class="fa fa-twitter"></i></a>`
    footerLinks.innerHTML += config.appYoutubeUrl == '' ? '' :  `<a href="${config.appYoutubeUrl}" class="btn btn-default btn-footer"><i class="fa fa-youtube"></i></a>`
    footerLinks.innerHTML += config.appLinkedinUrl == '' ? '' :  `<a href="${config.appLinkedinUrl}" class="btn btn-default btn-footer"><i class="fa fa-linkedin"></i></a>`
    footerLinks.innerHTML += config.appInstagramUrl == '' ? '' :  `<a href="${config.appInstagramUrl}" class="btn btn-default btn-footer"><i class="fa fa-instagram"></i></a>`
}
