import {checkBrowswerNotifications} from './../common/BrowserNotifications.js'
import {randomSuggestion} from './../common/BrowserNotifications.js'
import {prettyDate} from './../common/BrowserNotifications.js'

export const TimerController = [
	'$scope',
	'$interval',
	'$filter',
	'PomodoroService',
	'pomodoroList',
	function($scope, $interval, $filter, PomodoroService, pomodoroList) {
		var timer = null
		$scope.time = 0
		$scope.running = false
		$scope.finished = false
		// Set from cfg
		$scope.maxTime = 3
		$scope.list = pomodoroList

		console.log($scope.list)

		let sendNotification = () => {
			if(checkBrowswerNotifications()) {
				const options = {
					body: `You worked for ${prettyDate($scope.time)}!\n ${randomSuggestion()}`,
					icon: 'img/pomodoro.png'
				}
				new Notification("Time for a break!", options);
			}
		}

		let handleResponse = (response) => {
			// response from the server
			console.log(response)
		}

		let handleError = (result) => {
			// handle errors
			console.log(result)
		}

		/**
		 * Updates the timer at each tick
		 * If the time is up, send out browser notif and save to server
		 */
		let updateTimer = () => {
			$scope.time++;
			if ($scope.time >= $scope.maxTime) {
				sendNotification()
				$scope.toggleTimer()
				PomodoroService.savePomodoro({'params': '1'}).then(handleResponse, handleError)
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
}]
