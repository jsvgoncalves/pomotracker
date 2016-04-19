export const routes = ['$stateProvider', ($stateProvider) => {
    $stateProvider.state('profile', {
        url: '/:userId/profile',
        templateUrl: 'views/User/profile.tpl.html',
        controller : 'UserController',
        resolve: {
        	pomodoroList: ['PomodoroService', '$stateParams', (PomodoroService, $stateParams) => {
        		let userId = $stateParams.userId
        		let success = (pomodoroList) => { return pomodoroList.data }
        		let error = (response) => { return console.log(response) }

        		return PomodoroService.getPomodoros(userId).then(success, error)
        	}]
        }
    })
}]
