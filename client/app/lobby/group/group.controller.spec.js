'use strict';

describe('Controller: GroupCtrl', function () {

  // load the controller's module
  beforeEach(module('wineBurglarApp'));

  var GroupCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    GroupCtrl = $controller('GroupCtrl', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
