class UserController {

	constructor($scope) {
		//!TODO: Replace with service
		$scope.user = {
			'name' : 'Joao',
			'email': 'jsvgoncalves@gmail.com'
		};
		//!TODO: Replace with service
		$scope.sessions = [
			{
				'start': '10-04-2016 20:00',
				'finish': '10-04-2016 20:00'
			},
			{
				'start': '10-04-2016 21:00',
				'finish': '10-04-2016 22:00'
			}
		];
	}
}

export { UserController }
