export default class View {
  static bootstrap(id){
    const root = document.getElementById(id);
    root.innerHTML =  `
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="false" >
        <!-- Indicators -->
        <ol class="carousel-indicators" id="carousel-indicators-node">
        </ol>

      <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox" id="carousel-inner-node">
        </div>

        <!-- Controls --> 
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      `   
  }

  constructor(root_id){
    View.bootstrap(root_id);
    this._indicators = document.getElementById('carousel-indicators-node');
    this._inner = document.getElementById('carousel-inner-node');
  }

  event(item, i){
    this._indicators.innerHTML += `<li data-target="#carousel-example-generic" data-slide-to="0" class="${i == 0 ? 'active' : ''}"></li>`;
    this._inner.innerHTML += `<div class="item ${i == 0 ? 'active' : ''}">
        <div class="calendar-item text-center">
          <h3><span class="label label-default calendar-date">${this._start(item.start.dateTime)}</span>${item.summary}</h3>
          <p>${item.description}</p>
        </div>
      </div>`;        
  }

  _start(foo){
    let date = new Date(foo);
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let monthName = '';
    let months = [
      'enero', 'febrero', 'marzo', 'abril',
      'mayo', 'junio', 'julio', 'agosto',
      'septiembre', 'octubre', 'noviembre', 'diciembre'
    ]
                  
    return day +  ' de ' + months[month] + ' - ' + hour + ':' + min;
  }
}

