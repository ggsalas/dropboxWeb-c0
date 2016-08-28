export default class Calendar {
  static get URL_TEMPLATE(){ return 'https://www.googleapis.com/calendar/v3/calendars/%ID%/events?maxResults=%MAX%&timeMin=%DATE%&key=AIzaSyAMj1Y8UDpwEmSFmTLm5XPXqpaW2KSyAkg';}

  constructor(calendar_id, view){
    this._calendar_id = calendar_id;
    this._view = view;
    let dateToday = new Date();
    this._today = dateToday.toJSON();
    this.maxEvents = 10;
  }
  
  render(){
    const url = Calendar.URL_TEMPLATE.replace('%ID%', this._calendar_id).replace('%DATE%', this._today).replace('%MAX%', this.maxEvents)

    fetch (url) 
    .then(resp => resp.json())
    .then(data => {
      data.items.reverse().forEach(this._view.event.bind(this._view))
    })
  }
}

