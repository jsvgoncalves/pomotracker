export default class UserController {

	constructor($scope, pomodoroList) {
		//!TODO: Replace with service
		$scope.user = {
			'name' : 'Joao',
			'email': 'jsvgoncalves@gmail.com'
		};

		$scope.sessions = pomodoroList
	}
}
UserController.$inject = ['$scope', 'pomodoroList']
