import Client from './client'
import Dom from '../dom'
import {Delegate} from 'dom-delegate'

export default class Browser {
  constructor ({access_token, root, basePath} = {}) {
    this._client = new Client({access_token})
    this._root = root
    this._basePath = basePath
    new Delegate(document.body).on('click', '[data-folder]', this.onClickFolder.bind(this))
    new Delegate(document.body).on('click', '[data-file]', this.onClickFile.bind(this))
  }

  onClickFolder (evt) {
    this.render({path:evt.target.dataset.path});
  }

  onClickFile (evt) {
    this._client.downloadFor({path:evt.target.dataset.id, name:evt.target.dataset.name })
  }

  render({path, basePath}) { // render({path: '/doc'})
    const pathReturn = path.split('/')
    pathReturn.pop()
    console.log('estás en: ' + path );
    this._client
      .entriesFor({path})
      .then(entries => {
        entries = path == this._basePath ? entries : [{name: 'Atrás', path_lower: pathReturn.join('/'), '.tag': 'folder', back: 'back'}].concat(entries)
        entries.chunk(1).forEach((cells, index) => {
          new Dom().orderListFrom({
            items: cells,
            index: index,
            root: this._root,
            mapper: (entry) => `
              <div class="col-xs-6 col-sm-3 col-md-2 list-item list-item-${entry['.tag']} ${entry.back}" data-${entry['.tag']} data-path="${entry.path_lower}" data-id="${entry.id}" data-name="${entry.name}">
                <i data-path="${entry.path_lower}" data-id="${entry.id}" data-name="${entry.name}" class="list-item-icon fa ${(entry['.tag'] == 'file') ? ('fa-cloud-download') : (entry.back == 'back') ? ('fa-chevron-circle-left'): ('fa-folder')} " aria-hidden="true"></i>
                ${entry.name}
              </div>
            `
          })
        })
      })
  }

}

/** 
 * to split "chunk" the array to use on bootstrap rows
 */
Array.range = function(n) {
  // Array.range(5) --> [0,1,2,3,4]
  return Array.apply(null,Array(n)).map((x,i) => i)
};

Object.defineProperty(Array.prototype, 'chunk', {
  value: function(n) {

    // ACTUAL CODE FOR CHUNKING ARRAY:
    return Array.range(Math.ceil(this.length/n)).map((x,i) => this.slice(i*n,i*n+n));

  }
});


