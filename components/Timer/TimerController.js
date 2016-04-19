import {checkBrowswerNotifications} from './../common/BrowserNotifications.js'
import {randomSuggestion} from './../common/BrowserNotifications.js'
import {prettyDate} from './../common/BrowserNotifications.js'


class TimerController {

	constructor($scope, $interval, $filter, $stateParams, PomodoroService /*pomodoroList*/) {
		// The $interval
		var timer = null
		// Elapsed time
		$scope.time = 0
		// Flags
		$scope.running = false
		$scope.finished = false
		// Set from configs loaded from API
		$scope.maxTime = $stateParams.time
		// $scope.list = pomodoroList

		/**
		 * Updates the timer at each tick
		 * If the time is up, send out browser notif and save to server
		 */
		let updateTimer = () => {
			$scope.time++;
			if ($scope.time >= $scope.maxTime) {
				this.sendNotification($scope)
				$scope.toggleTimer()
				PomodoroService.savePomodoro({'params': '1'})
							   .then(this.handleResponse, this.handleError)
			}
		}

		/**
		 * Toggles the timer on and off
		 * Resets the time if the timer is off and at maxTime
		 */
		$scope.toggleTimer = () => {
			// If the timer is running, stop it
			if ($scope.running) {
				$scope.running = false
				$interval.cancel(timer)
			// Else, start it
			} else {
				// If max, reset
				if ($scope.time >= $scope.maxTime) {
					$scope.time = 0
				}
				$scope.running = true
				timer = $interval(updateTimer, 1000)
			}
		}
	}

	/**
	 * Save Pomodoro Successful
	 */
	handleResponse (response){
		// response from the server
		console.log(response)
	}

	/**
	 * Save Pomodoro failed
	 */
	handleError (result){
		console.log(result)
	}

	/**
	 * Sends a browser notification with the Pomodoro results
	 */
	sendNotification(scope) {
		if(checkBrowswerNotifications()) {
			const options = {
				body: `You worked for ${prettyDate(scope.time)}!\n ${randomSuggestion()}`,
				icon: 'img/pomodoro.png'
			}
			new Notification("Time for a break!", options);
		}
	}
}

export { TimerController }
