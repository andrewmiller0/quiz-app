'use strict';

describe('Service: Quiz', function () {

  // load the service's module
  beforeEach(module('quizApp'));

  // instantiate service
  var Quiz;
  beforeEach(inject(function (_Quiz_) {
    Quiz = _Quiz_;
  }));

  it('should do something', function () {
    expect(!!Quiz).toBe(true);
  });

});
