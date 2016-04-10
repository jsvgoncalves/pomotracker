import 'angular'

import {routes} from './routes.js'

import './User/index.js'
import './Timer/index.js'

import {toMinutes} from './common/filters/ToMinutes.js'


import {services} from './services/index.js'

var app = angular.module('pomodoro', [
    'pomodoro.timer',
    'pomodoro.user',
    'pomodoro.services',
])
app.config(routes)
app.filter('toMinutes', toMinutes)
