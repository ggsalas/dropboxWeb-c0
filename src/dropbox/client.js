import download from 'downloadjs'

const BASE_ENTRIES = {
  "recursive": false,
  "include_media_info": false,
  "include_deleted": false
}

      console.log('hola');

export default class DropBox {
  constructor ({access_token} = {}) {
    this._acces_token = access_token
  }

  entriesFor ({path} = {}) {
    return fetch('https://api.dropboxapi.com/2/files/list_folder',{
      method: 'POST',
      body: JSON.stringify(Object.assign({}, BASE_ENTRIES, {path})),
      headers: {
        'Authorization':'Bearer ' + this._acces_token,
        "Content-Type":"application/json"
      }
    })  
    .then(document.getElementById("section-explorer-root").style.height = '1500px') // to get inmobile scroll on clear
    .then(root.innerHTML = '') //clear 
    .then(document.getElementById("section-explorer-root").style.height = 'auto')
    .then(resp => resp.json())
    .then(data => data.entries)
  }

  downloadFor ({path} = {}) {
    fetch('https://content.dropboxapi.com/2/files/download', {
      method: 'POST',
      headers: {
        'Authorization':'Bearer ' + this._acces_token,
        'Content-Type': '',
        'Dropbox-API-Arg': JSON.stringify({path})
      }
    }).then(function(resp) {
      return resp.blob();
    }).then(function(blob) {
      download(blob, path.split('/').pop())
    });
  }
}
