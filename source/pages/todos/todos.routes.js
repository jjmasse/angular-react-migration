import todosTemplate from './todos.html'

routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  $stateProvider
    .state('todos', {
      url: '/',
      template: todosTemplate,
      controller: 'TodosController',
      controllerAs: 'todos'
    })
}
