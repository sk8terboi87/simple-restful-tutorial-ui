(function() {
  "use strict";

  (function(app) {
    var Controller;
    Controller = function($scope, $resource, BlogsModel) {
      BlogsModel.initialize($scope);
      return $scope.save = function() {
        return BlogsModel.create($scope.blog, $scope);
      };
    };
    return app.controller('BlogsControllerCreate', Controller);
  })(restfulTut);

}).call(this);
