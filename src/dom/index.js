export default class Dom {
  structure({root}){
    root.innerHTML = `
      <div class="container">
        <H2 class="text-center section-title">Documentos de cátedra</h2>
        <div id="rootElements" class="row"></div>
      </div>
    `;
  }
  clear(){
    this._rootElements.style.height = '1500px'
    this._rootElements.innerHTML = ''
  }
  resize(){
    this._rootElements.style.height = 'auto' // at this time is not working
  }
  constructor (){
    this._rootElements = document.getElementById("rootElements")    
  }

  orderListFrom({items, index, mapper} = {}) {
    this._rootElements.innerHTML += `${items.map(mapper).join('')}${cuts(index)}`; 
  }

}

function  cuts(index){
    // columns clear on responsive layouts
    let xs = '';
    let sm = '';
    let md = '';
    let lg = '';
    let display = '';
    ((index + 1) % 2 == 0) ? (xs = "visible-xs-block ") : (xs = "");
    ((index + 1) % 4 == 0) ? (sm = "visible-sm-block ") : (sm = "");
    ((index + 1) % 6 == 0) ? (md = "visible-md-block ") : (md = "");
    ((index + 1) % 6 == 0) ? (lg = "visible-lg-block ") : (lg = "");
    ((index + 1) % 2 == 0) ? (display = `<div class="clearfix ${xs}${sm}${md}${lg}"></div>`) : ("");

    return display;
  }
