import angular from 'angular'

// using JSX requires having React in scope
import React from 'react'
import ReactDOM from 'react-dom'
import TodoFilters from '../components-react/TodoFilters'

function todoFiltersWrapper() {
  return {
    restrict: 'E',
    scope: {},
    renderReact(element) {
      ReactDOM.render(<TodoFilters />, element)
    },
    link(scope, element, attrs) {
      this.renderReact(element[0])
    }
  }
}

export default angular.module('todos.directives.todoFiltersWrapper', [])
  .directive('todoFiltersWrapper', todoFiltersWrapper)
  .name
