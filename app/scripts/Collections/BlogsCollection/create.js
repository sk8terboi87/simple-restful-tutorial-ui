(function() {
  "use strict";

  (function(app) {
    var Controller;
    Controller = function($scope, resourceFactory, BlogsModel) {
      BlogsModel.initialize($scope);
      return $scope.save = function() {
        var blogResource;
        blogResource = resourceFactory.create('blogs', $scope.blog);
        return blogResource.$then(function(result) {
          return $scope.alert.message = result.data.message;
        });
      };
    };
    return app.controller('BlogsControllerCreate', Controller);
  })(restfulTut);

}).call(this);
