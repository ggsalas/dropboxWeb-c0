export default class Dom {
  orderListFrom({items, index, root, mapper} = {}) {
    root.innerHTML += `${items.map(mapper).join('')}`; 

    var xs, sm, md, lg;
    (index % 2 == 0) ? (xs = "visible-xs-block ") : (xs = "");
    (index % 4 == 0) ? (sm = "visible-sm-block ") : (sm = "");
    (index % 6 == 0) ? (md = "visible-md-block ") : (md = "");
    (index % 6 == 0) ? (lg = "visible-lg-block ") : (lg = "");

    (index % 2 == 0) ? (root.innerHTML += `<div class="clearfix ${xs}${sm}${md}${lg}"></div>`) : ("");
  }
}
