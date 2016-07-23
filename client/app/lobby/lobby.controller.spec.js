'use strict';

describe('Component: LobbyComponent', function () {

  // load the controller's module
  beforeEach(module('wineBurglarApp'));

  var LobbyComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    LobbyComponent = $componentController('lobby', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
