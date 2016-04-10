import 'angular-ui-router'

import {routes} from './routes.js'
import {TimerController} from './TimerController.js'

const TimerComponent = angular.module('pomodoro.timer', ['ui.router'])

TimerComponent.config(routes)
TimerComponent.controller('TimerController', TimerController)
