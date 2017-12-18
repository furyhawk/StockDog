'use strict';

describe('Controller: WatchlistCtrl', function () {

  // load the controller's module
  beforeEach(module('stockDogApp'));

  var WatchlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WatchlistCtrl = $controller('WatchlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WatchlistCtrl.awesomeThings.length).toBe(3);
  });
});
