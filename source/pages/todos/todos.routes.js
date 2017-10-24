routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  $stateProvider
    .state('todos', {
      url: '/',
      template: require('./todos.html'),
      controller: 'TodosController',
      controllerAs: 'todos'
    })
}
