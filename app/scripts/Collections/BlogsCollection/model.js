(function() {
  "use strict";

  this.restfulTut.service('BlogsModel', function($resource, resourceUrl) {
    var createFn, initializeFn, queryFn, removeFn, retrieveFn;
    initializeFn = function(scope) {
      scope.alertMessage = [];
      scope.blogs = {};
      return scope.blog = {};
    };
    createFn = function(data, scope) {
      var request;
      request = $resource(resourceUrl + 'blogs', {}, {
        create: {
          method: "PUT"
        }
      });
      return scope.alertMessage = request.create(data);
    };
    retrieveFn = function() {
      var request;
      request = $resource(resourceUrl + 'blogs');
      return request.get();
    };
    queryFn = function(scope, id) {
      var request, response;
      request = $resource(resourceUrl + 'blogs' + "/:entryId", {}, {
        query: {
          method: "GET",
          params: {
            entryId: id,
            isArray: true
          }
        }
      });
      response = request.query(id);
      return response.$then(function(result) {
        return scope.blog = result.data.data;
      });
    };
    removeFn = function(id, scope) {
      var request, response;
      request = $resource(resourceUrl + 'blogs/remove/' + id);
      response = request["delete"]();
      return response.$then(function(result) {
        if (result.data.status === "success") {
          return scope.list();
        }
      });
    };
    return {
      initialize: initializeFn,
      create: createFn,
      retrieve: retrieveFn,
      query: queryFn,
      remove: removeFn
    };
  });

}).call(this);
