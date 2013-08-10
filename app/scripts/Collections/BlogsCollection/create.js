(function() {
  "use strict";

  (function(app) {
    var Controller;
    Controller = function($scope, $resource, BlogsModel) {
      BlogsModel.initialize($scope);
      return $scope.save = function() {
        return BlogsModel.send('add', $scope.blog);
      };
    };
    return app.controller('BlogsController', Controller);
  })(restfulTut);

}).call(this);
