<?php

$pomodoros = [
    ['user_id' => 1, 'name' => 'Session 1', 'start' => '10-04-2016 20:00', 'finish' => '10-04-2016 20:00'],
    ['user_id' => 1, 'name' => 'Session 2', 'start' => '10-04-2016 20:00', 'finish' => '10-04-2016 20:00'],
    ['user_id' => 2, 'name' => 'Session 3', 'start' => '10-04-2016 20:00', 'finish' => '10-04-2016 20:00'],
    ['user_id' => 3, 'name' => 'Session 4', 'start' => '10-04-2016 20:00', 'finish' => '10-04-2016 20:00']
];

$userId = (int) $_GET['user_id'];

echo json_encode(
    array_filter($pomodoros, function($pomodoro) use ($userId) {
        return $pomodoro['user_id'] === $userId;
    }
));
