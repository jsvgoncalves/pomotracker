export const routes = ['$stateProvider', ($stateProvider) => {
	$stateProvider.state('timer', {
		url: '/timer/:time',
		templateUrl: 'views/Timer/timer.tpl.html',
		controller : 'TimerController',
		resolve: {
			pomodoroList: ['PomodoroService', '$stateParams', (PomodoroService, $stateParams) => {
				let time = $stateParams.time
				let success = (pomodoroList) => { return pomodoroList.data }
				let error = (response) => { return console.log(response) }

				return PomodoroService.getPomodoros('user-id').then(success, error)
			}]
		}
	})
}]
