(function() {
  "use strict";

  (function(app) {
    var Controller;
    Controller = function($scope, $routeParams, BlogsModel, resourceFactory) {
      BlogsModel.initialize($scope);
      $scope.list = function() {
        var request;
        request = resourceFactory.get('blogs');
        return request.$then(function(result) {
          return $scope.blogs = result.data;
        });
      };
      $scope.remove = function(id) {
        var request;
        request = resourceFactory.remove('blogs/remove', id);
        return request.$then(function(result) {
          $scope.alert.message = result.data.message;
          if (result.data.status === "success") {
            return $scope.list();
          }
        });
      };
      return $scope.list();
    };
    return app.controller('BlogsControllerList', Controller);
  })(restfulTut);

}).call(this);
