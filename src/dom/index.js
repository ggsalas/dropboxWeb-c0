var i = 1;
export default class Dom {
  orderListFrom({items, root, mapper} = {}) {
    root.innerHTML += `${items.map(mapper).join('')}`; 

    if (i % 2 == 0)
      root.innerHTML += `<div class="clearfix visible-xs-block"></div>` 
    if (i % 4 == 0)
      root.innerHTML += `<div class="clearfix visible-sm-block"></div>`
    if (i % 6 == 0){
      root.innerHTML += `<div class="clearfix visible-md-block"></div>`
      root.innerHTML += `<div class="clearfix visible-lg-block"></div>`
    } 
    i++;
  }
}
