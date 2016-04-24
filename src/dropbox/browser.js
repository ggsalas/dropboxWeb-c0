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

  render({path}) {
    const pathReturn = path.split('/')
    pathReturn.pop()
    this._client
      .entriesFor({path})
      .then(entries => {
        entries = [{name: 'Back', path_lower: pathReturn.join('/'), '.tag': 'folder'}].concat(entries)
        new Dom().orderListFrom({
          items: entries,
          root: this._root,
          mapper: (entry) => `
            <li data-${entry['.tag']} data-path="${entry.path_lower}">${entry.name}</li>
          `
        })
      })
  }

}

