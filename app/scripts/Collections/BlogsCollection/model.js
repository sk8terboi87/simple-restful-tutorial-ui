(function() {
  "use strict";

  this.restfulTut.service('BlogsModel', function($resource) {
    var apiCall, apiRoutes, initializeFn, retrieveFn, sendFn;
    apiCall = 'http://192.168.0.2/rest-api/app/index.php/';
    apiRoutes = {
      'add': 'blogs/add',
      'remove': 'blogs/remove',
      'update': 'blogs/update',
      'list': 'blogs/list'
    };
    initializeFn = function(scope) {
      console.log('constructor');
      return scope.blog = {};
    };
    sendFn = function(route, data) {
      var request;
      request = $resource(apiCall + apiRoutes[route]);
      return request.save(data);
    };
    retrieveFn = function(route) {
      var request;
      request = $resource(apiCall + apiRoutes[route]);
      return request.get();
    };
    return {
      initialize: initializeFn,
      send: sendFn,
      retrieve: retrieveFn
    };
  });

}).call(this);
