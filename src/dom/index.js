export default class Dom {
  orderListFrom({items, index, root, mapper, i} = {}) {
    root.innerHTML += `${items.map(mapper).join('')}${index}`; 

    if (index % 2 == 0)
      root.innerHTML += `<div class="clearfix visible-xs-block"></div>` 
    if (index % 4 == 0)
      root.innerHTML += `<div class="clearfix visible-sm-block"></div>`
    if (index % 6 == 0){
      root.innerHTML += `<div class="clearfix visible-md-block"></div>`
      root.innerHTML += `<div class="clearfix visible-lg-block"></div>`
    } 
  }
}
