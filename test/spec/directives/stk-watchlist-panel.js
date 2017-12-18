'use strict';

describe('Directive: stkWatchlistPanel', function () {

  // load the directive's module
  beforeEach(module('stockDogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stk-watchlist-panel></stk-watchlist-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stkWatchlistPanel directive');
  }));
});
