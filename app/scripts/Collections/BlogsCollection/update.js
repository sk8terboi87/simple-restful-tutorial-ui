(function() {
  "use strict";

  (function(app) {
    var Controller;
    Controller = function($scope, $routeParams, BlogsModel) {
      BlogsModel.initialize($scope);
      BlogsModel.query($scope, $routeParams.id);
      return $scope.update = function() {
        return BlogsModel.update($scope.blog, $scope);
      };
    };
    return app.controller('BlogsControllerUpdate', Controller);
  })(restfulTut);

}).call(this);
