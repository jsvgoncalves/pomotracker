export const routes = ['$stateProvider', ($stateProvider) => {
    $stateProvider.state('timer', {
        url: '/timer',
        templateUrl: 'views/Timer/timer.tpl.html',
        controller : 'TimerController',
    })
}]
