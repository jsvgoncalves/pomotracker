import PomodoroService from './PomodoroService'
import 'angular-ui-router'

export const services = angular.module('pomodoro.services', [])
services.service('PomodoroService', PomodoroService)
