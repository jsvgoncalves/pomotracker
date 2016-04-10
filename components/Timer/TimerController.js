export const TimerController = [
	'$scope', 
	'$interval',
	'PomodoroService',
	'pomodoroList',
	function($scope, $interval, PomodoroService, pomodoroList) {
		var timer = null
		$scope.time = 0
		$scope.running = false
		$scope.finished = false
		// Set from cfg
		$scope.maxTime = 3
		// $scope.list = pomodoroList

		let handleResponse = (response) => {
					// response from the server
					console.log(response)
				}

		let handleError = (result) => {
					// handle errors
					console.log('err')
				}
		let updateTimer = () => {
			$scope.time++;
			if ($scope.time >= $scope.maxTime) {
				// $scope.finished = true
				$scope.time = 0
				$scope.toggleTimer()
				PomodoroService.savePomodoro({'params': '1'}).then(handleResponse, handleError)

			}
		}


		$scope.toggleTimer = () => {
			// If the timer is running, stop it
			if ($scope.running) {
				$scope.running = false
				$interval.cancel(timer)
			// Else, start it
			} else {
				// If max, reset
				// if ($scope.finished) {
				// 	$scope.finished = false
				// }
				$scope.running = true
				timer = $interval(updateTimer, 1000)
			}
	}
}]

