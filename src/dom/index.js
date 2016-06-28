export default class Dom {
  orderListFrom({items, root, mapper} = {}) {
    root.innerHTML = `<ol>${items.map(mapper).join('')}</ol>`
  }
}
