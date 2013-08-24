(function() {
  "use strict";

  this.restfulTut.service('BlogsModel', function(resourceUrl, resourceFactory) {
    var initializeFn;
    initializeFn = function(scope) {
      scope.alert = [];
      scope.blogs = {};
      return scope.blog = {};
    };
    return {
      initialize: initializeFn
    };
  });

}).call(this);
