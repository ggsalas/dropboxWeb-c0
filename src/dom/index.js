export default class Dom {
  orderListFrom({items, root, mapper} = {}) {
    root.innerHTML = `<div class="container"><div class="row">${items.map(mapper).join('')}</div></div>`
  }
}
