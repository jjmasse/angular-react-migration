// NOTE: we may forgoe needing to provide this syntax if we implement
// ng-annote into the webpack process
routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider']

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/')
}
