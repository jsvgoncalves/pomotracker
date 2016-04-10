import 'angular'
import {routes} from './routes.js'
import './Timer/index.js'
import './User/index.js'

var app = angular.module('pomodoro',
    ['pomodoro.timer',
     'pomodoro.user'
    ])
app.config(routes)
