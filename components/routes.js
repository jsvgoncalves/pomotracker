export const routes = [
    '$urlRouterProvider',
    '$locationProvider',
    ($urlRouterProvider,  $locationProvider) => {
        $urlRouterProvider.otherwise('/404')
        $locationProvider.html5Mode(true)
}]
