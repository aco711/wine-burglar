'use strict';

describe('Controller: ReccomendationCtrl', function () {

  // load the controller's module
  beforeEach(module('wineBurglarApp'));

  var ReccomendationCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    ReccomendationCtrl = $controller('ReccomendationCtrl', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
