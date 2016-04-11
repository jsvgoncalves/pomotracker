export const routes = [
    '$urlRouterProvider',
    '$locationProvider',
    ($urlRouterProvider,  $locationProvider) => {
        $urlRouterProvider.otherwise('/timer/1500')
        $locationProvider.html5Mode(true)
}]
