'use strict';

/**
 * @ngdoc service
 * @name quizApp.provider
 * @description
 * # provider
 * Provider in the quizApp.
 */
angular.module('quizApp')
  .provider('score', function () {

    // Private variables
    var score = 0;

    // Private constructor
    function scoreKeeper() {
      this.getScore = function () {
        return score;
      };
      this.addScore = function(amount) {
        score += amount;
      };
    }

    // Method for instantiating
    this.$get = function () {
      return new scoreKeeper();
    };
  });
