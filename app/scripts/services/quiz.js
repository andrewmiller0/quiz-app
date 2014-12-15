'use strict';

/**
 * @ngdoc service
 * @name quizApp.Quiz
 * @description
 * # Quiz
 * Factory in the quizApp.
 */
angular.module('quizApp')
  .factory('Quiz', function ($resource) {
    return $resource('http://localhost:3000/questions');
  });
