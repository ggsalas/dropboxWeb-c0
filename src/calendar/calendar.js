function start(foo){
  let date = new Date(foo);
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let monthName = '';

  month == 0 ? monthName = 'enero' :
  month == 1 ? monthName ='febrero' :
  month == 2 ? monthName ='marzo' :
  month == 3 ? monthName ='abril' :
  month == 4 ? monthName ='mayo' :
  month == 5 ? monthName ='junio' :
  month == 6 ? monthName ='julio' :
  month == 7 ? monthName ='agosto' :
  month == 8 ? monthName ='septiembre' :
  month == 9 ? monthName ='octubre' :
  month == 10 ? monthName ='noviembre' :
  month == 11 ? monthName ='diciembre' : '';
                
  return day +  ' de ' + monthName + ' - ' + hour + ':' + min;
}               

const CALENDAR_INDICATORS_NODE = document.getElementById('carousel-indicators-node')
const CALENDAR_INNER_NODE = document.getElementById('carousel-inner-node')

export default class Calendar {
  render(CALENDAR_ID){
    const url = 'https://www.googleapis.com/calendar/v3/calendars/'+CALENDAR_ID+'/events?key=AIzaSyAMj1Y8UDpwEmSFmTLm5XPXqpaW2KSyAkg';

    fetch (url) 
    .then(resp => resp.json())
    .then(data => {
      let max = data.items.length - 1;
      for(var i = max; i >= 0; i--){
        CALENDAR_INDICATORS_NODE.innerHTML += `<li data-target="#carousel-example-generic" data-slide-to="0" class="${i == max ? 'active' : ''}"></li>`;
        CALENDAR_INNER_NODE.innerHTML += `<div class="item ${i == max ? 'active' : ''}">
            <div class="calendar-item text-center">
              <h3><span class="label label-default calendar-date">${start(data.items[i].start.dateTime)}</span>${data.items[i].summary}</h3>
              <p>${data.items[i].description}</p>
            </div>
          </div>`;
      }
    })
  }
}
