describe('UserController', function(){

  it('should have "session" model with 2 sessions', function() {
    var scope = {},
        Controller = new UserController(scope);

    expect(scope.sessions.length).toBe(2);
  });

});
