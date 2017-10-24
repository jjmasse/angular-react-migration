import angular from 'angular'

class RandomNames {
  constructor() {
    this.names = ['Joe', 'John', 'Mark', 'Sally', 'Mary']
  }

  getName() {
    const totalNames = this.names.length
    const randomIndex = Math.floor(Math.random() * totalNames)
    return this.names[randomIndex]
  }
}

export default angular.module('services.random-names', [])
  .service('randomNames', RandomNames)
  .name
