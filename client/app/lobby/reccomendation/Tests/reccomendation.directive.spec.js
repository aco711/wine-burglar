'use strict';

describe('Directive: reccomendation', function () {

  // load the directive's module and view
  beforeEach(module('wineBurglarApp'));
  beforeEach(module('app/reccomendation/reccomendation.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<reccomendation></reccomendation>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the reccomendation directive');
  }));
});
