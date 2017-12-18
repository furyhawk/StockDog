'use strict';

describe('Directive: stkSignColor', function () {

  // load the directive's module
  beforeEach(module('stockDogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stk-sign-color></stk-sign-color>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stkSignColor directive');
  }));
});
