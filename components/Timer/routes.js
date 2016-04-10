export const routes = ['$stateProvider', ($stateProvider) => {
    $stateProvider.state('timer', {
        url: '/', 
        //'/timer/:userId',
        templateUrl: 'views/Timer/timer.tpl.html',
        controller : 'TimerController',
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
