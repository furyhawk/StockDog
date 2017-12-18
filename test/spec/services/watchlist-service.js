'use strict';

describe('Service: WatchlistService', function () {

  // load the service's module
  beforeEach(module('stockDogApp'));

  // instantiate service
  var WatchlistService;
  beforeEach(inject(function (_WatchlistService_) {
    WatchlistService = _WatchlistService_;
  }));

  it('should do something', function () {
    expect(!!WatchlistService).toBe(true);
  });

});
