'use strict';

describe('Controller: AddRecCtrl', function () {

  // load the controller's module
  beforeEach(module('wineBurglarApp'));

  var AddRecCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    AddRecCtrl = $controller('AddRecCtrl', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
