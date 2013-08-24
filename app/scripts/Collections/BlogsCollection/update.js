(function() {
  "use strict";

  (function(app) {
    var Controller;
    Controller = function($scope, $routeParams, BlogsModel, resourceFactory) {
      BlogsModel.initialize($scope);
      $scope.fetchBlog = function(id) {
        var blogResource;
        blogResource = resourceFactory.query('blogs', id);
        return blogResource.$then(function(result) {
          return $scope.blog = result.data.data;
        });
      };
      $scope.update = function() {
        var blogResource;
        blogResource = resourceFactory.update('blogs', $scope.blog);
        return blogResource.$then(function(result) {
          return $scope.alert.message = result.data.message;
        });
      };
      return $scope.fetchBlog($routeParams.id);
    };
    return app.controller('BlogsControllerUpdate', Controller);
  })(restfulTut);

}).call(this);
