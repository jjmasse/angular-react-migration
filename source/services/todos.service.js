import angular from 'angular'

class TodosService {
  constructor() {
    this.todos = []
  }

  addTodo(todo = '') {
    if(todo) {
      this.todos.concat(todo)
    }
  }

  removeTodo(todoID) {
    this.todos = this.todos.filter(todo => todo.ID != todoID)
  }
}

export default angular.module('services.todos', [])
  .service('todos', TodosService)
  .name
