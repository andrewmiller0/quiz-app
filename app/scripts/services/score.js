'use strict';

/**
 * @ngdoc service
 * @name quizApp.score
 * @description
 * # score
 * Factory in the quizApp.
 */
angular.module('quizApp')
  .factory('serverQuizData', function ($http) {
    // Service logic
    // ...

    var factory = {};

    // Public API here

    factory.getValue = function(){
      return $http.get('http://localhost:3000/questions');
    }

    return factory;

  });
