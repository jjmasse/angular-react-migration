export default class TodosController {
  constructor(randomNames) {
    this._randomName = randomNames
    this.name = 'Change me!!!'
  }

  changeName() {
    this.name = 'I have been changed!!!'
  }

  randomName() {
    this.name = this._randomName.getName()
  }
}

TodosController.$inject = ['randomNames']
