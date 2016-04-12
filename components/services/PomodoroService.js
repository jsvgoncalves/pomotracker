const URL = 'http://localhost'
export default class PomodoroService {
    constructor($http) {
        this.$http = $http
    }

    /**
     * Fetch a list of pomodoros for the given user
     *
     * @param  {int} userId
     * @return {Promise}
     */
    getPomodoros(userId) {
        return this.$http.get(`${URL}/api/pomodoros.php?user_id=${userId}`)
    }

    /**
     * Saves in storage a pomodoro
     *
     * @param  {Object} params
     * @return {Promise}
     */
    savePomodoro(params) {
        return this.$http.post(`${URL}/`, params)
    }
}
PomodoroService.$inject = ['$http']
