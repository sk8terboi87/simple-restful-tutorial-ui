(function() {
  "use strict";

  (function(app) {
    var Controller;
    Controller = function($scope, $resource, BlogsModel, $routeParams) {
      console.log($routeParams);
      BlogsModel.initialize($scope);
      $scope.save = function() {
        return BlogsModel.send('add', $scope.blog);
      };
      return $scope.list = function() {
        return BlogsModel.retrieve('list');
      };
    };
    return app.controller('BlogsController', Controller);
  })(restfulTut);

}).call(this);
