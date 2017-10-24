export default class TodosController {
  constructor() {
    this.name = 'Change me!!!'
  }

  changeName() {
    this.name = 'I have been changed!!!'
  }

  randomName() {
    this.name = this._randomName.getName()
  }
}

TodosController.$inject = []
