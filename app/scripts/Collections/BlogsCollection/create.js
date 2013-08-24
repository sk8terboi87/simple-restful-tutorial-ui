(function() {
  "use strict";

  (function(app) {
    var Controller;
    Controller = function($scope, resourceFactory, BlogsModel) {
      BlogsModel.initialize($scope);
      return $scope.save = function() {
        var request;
        request = resourceFactory.create('blogs', $scope.blog);
        return request.$then(function(result) {
          return $scope.alert.message = result.data.message;
        });
      };
    };
    return app.controller('BlogsControllerCreate', Controller);
  })(restfulTut);

}).call(this);
