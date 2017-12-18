'use strict';

describe('Directive: stkStockRow', function () {

  // load the directive's module
  beforeEach(module('stockDogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stk-stock-row></stk-stock-row>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stkStockRow directive');
  }));
});
