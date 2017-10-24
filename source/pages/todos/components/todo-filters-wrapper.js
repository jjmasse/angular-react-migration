import angular from 'angular'

// using JSX requires having React in scope
import React from 'react'
import ReactDOM from 'react-dom'
import TodoFilters from '../components-react/TodoFilters'

function todoFiltersWrapper() {
  return {
    restrict: 'E',
    scope: {
      title: '='
    },
    renderReact(element, props) {
      ReactDOM.render(<TodoFilters title={props.title} />, element)
    },
    link(scope, element, attrs) {
      const props = {
        title: scope.title
      }

      this.renderReact(element[0], props)
    }
  }
}

export default angular.module('todos.directives.todoFiltersWrapper', [])
  .directive('todoFiltersWrapper', todoFiltersWrapper)
  .name
