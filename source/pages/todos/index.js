/**
  index
  wires together the dependencies of the page
  we export just the name of the module since that is all that
  is required for angular's built in DI to set us up

  we do not HAVE to import angular and uirouter, we do this
  to help us better understand where the dependencies are coming from

  a nice side effect of importing here is increasing portability of this code
*/

import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './todos.routes'
import TodosController from './todos.controller'
import greeting from '../../common/greeting/greeting.directive'
import todoInput from './components/todo-input';
import todoFiltersWrapper from './components/todo-filters-wrapper';

export default angular.module('app.todos', [uirouter, todoInput, todoFiltersWrapper])
  .config(routing)
  .controller('TodosController', TodosController)
  .name
