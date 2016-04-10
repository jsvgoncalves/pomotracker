export const routes = ['$stateProvider', ($stateProvider) => {
    $stateProvider.state('profile', {
        url: '/profile',
        templateUrl: 'views/User/profile.tpl.html',
        controller : 'UserController',
    })
}]
