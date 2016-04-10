const URL = 'http://localhost'
export const PomodoroService = ['$http', ($http) => {
	return {
		getPomodoros (userId) {
			return $http.get(`${URL}/${userId}`)
		},

		savePomodoro (params) {
			return $http.post(`${URL}/`, params)
		}
	}
}]
