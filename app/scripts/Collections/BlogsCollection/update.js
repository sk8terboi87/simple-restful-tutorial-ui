(function() {
  "use strict";

  (function(app) {
    var Controller;
    Controller = function($scope, $routeParams, BlogsModel, resourceFactory) {
      BlogsModel.initialize($scope);
      $scope.fetchBlog = function(id) {
        var request;
        request = resourceFactory.query('blogs', id);
        return request.$then(function(result) {
          return $scope.blog = result.data.data;
        });
      };
      $scope.update = function() {
        var request;
        request = resourceFactory.update('blogs', $scope.blog);
        return request.$then(function(result) {
          return $scope.alert.message = result.data.message;
        });
      };
      return $scope.fetchBlog($routeParams.id);
    };
    return app.controller('BlogsControllerUpdate', Controller);
  })(restfulTut);

}).call(this);
