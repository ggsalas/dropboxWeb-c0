import Client from './client'
import Dom from '../dom'
import {Delegate} from 'dom-delegate'

export default class Browser {
  constructor ({access_token, root} = {}) {
    this._client = new Client({access_token})
    this._root = root
    new Delegate(document.body).on('click', '[data-folder]', this.onClickFolder.bind(this))
    new Delegate(document.body).on('click', '[data-file]', this.onClickFile.bind(this))
  }

  onClickFolder (evt) {
    this.render({path:evt.target.dataset.path})
  }

  onClickFile (evt) {
    this._client.downloadFor({path:evt.target.dataset.path})
  }

  render({path}) { // render({path: '/doc'})
    const pathReturn = path.split('/')
    pathReturn.pop()
    this._client
      .entriesFor({path})
      .then(entries => {
        entries = [{name: 'Back', path_lower: pathReturn.join('/'), '.tag': 'folder'}].concat(entries)
        entries.chunk(1).forEach(cells => {
          new Dom().orderListFrom({
            items: cells,
            root: this._root,
            mapper: (entry) => `
              <div class="col-xs-6 col-sm-3 col-md-2" data-${entry['.tag']} data-path="${entry.path_lower}">
                <img class="img-responsive" src="http://lorempixel.com/400/400/?` + Math.random() + ` " width="400" height="400" />
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


