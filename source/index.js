import angular from 'angular'
import uirouter from 'angular-ui-router'
import routing from './config'
import home from './pages/todos';

const MOUNTING_NODE = 'todo-application'

angular.module('app', [uirouter, home])
  .config(routing)
