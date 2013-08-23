(function() {
  "use strict";

  (function(app) {
    var Controller;
    Controller = function($scope, $routeParams, BlogsModel) {
      BlogsModel.initialize($scope);
      $scope.list = function() {
        return $scope.blogs = BlogsModel.retrieve();
      };
      $scope.remove = function(id) {
        return BlogsModel.remove(id, $scope);
      };
      return $scope.list();
    };
    return app.controller('BlogsControllerList', Controller);
  })(restfulTut);

}).call(this);
