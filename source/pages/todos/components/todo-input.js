import angular from 'angular'
import todoInputTemplate from './todo-input.html'

function todoInput() {
  return {
    restrict: 'E',
    scope: {},
    template: todoInputTemplate
  }
}

export default angular.module('todos.directives.todoInput', [])
  .directive('todoInput', todoInput)
  .name
