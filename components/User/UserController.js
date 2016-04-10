export const UserController = ['$scope', function($scope) {
    // Input from server
    $scope.user = {
        'name' : 'Joao',
        'email': 'jsvgoncalves@gmail.com'}

    // Input from server
    $scope.sessions = [
        {'start': '10-04-2016 20:00',
         'finish': '10-04-2016 20:00'},
         {'start': '10-04-2016 21:00',
          'finish': '10-04-2016 22:00'}
    ];

}]
