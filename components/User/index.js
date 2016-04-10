import 'angular-ui-router'

import {routes} from './routes.js'
import {UserController} from './UserController.js'

const UserComponent = angular.module('pomodoro.user', ['ui.router'])

UserComponent.config(routes)
UserComponent.controller('UserController', UserController)
