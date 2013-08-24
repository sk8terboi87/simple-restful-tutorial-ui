(function() {

  this.restfulTut.factory("resourceFactory", function($resource, resourceUrl) {
    return {
      create: function(action, data) {
        var request;
        request = $resource(resourceUrl + action, {}, {
          create: {
            method: "PUT"
          }
        });
        return request.create(data);
      },
      query: function(action, id) {
        var request;
        request = $resource(resourceUrl + action + '/' + id);
        return request.query();
      },
      get: function(action) {
        var request;
        request = $resource(resourceUrl + action);
        return request.get();
      },
      update: function(action, data) {
        var request;
        request = $resource(resourceUrl + action);
        return request.save(data);
      },
      remove: function(action, id) {
        var request;
        request = $resource(resourceUrl + action + '/' + id);
        return request["delete"]();
      }
    };
  });

}).call(this);
