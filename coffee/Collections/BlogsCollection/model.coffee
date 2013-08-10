"use strict"
@restfulTut.service('BlogsModel', ($resource) ->
    apiCall = 'http://192.168.0.2/rest-api/app/index.php/'
    apiRoutes = {
        'add': 'blogs/add'
        'remove': 'blogs/remove'
        'update': 'blogs/update'
        'list': 'blogs/list'
    }
    initializeFn = (scope) ->
        console.log 'constructor'
        scope.blog = {}

    sendFn = (route, data) ->
        request = $resource(apiCall + apiRoutes[route])
        request.save(data)

    retrieveFn = (route) ->
        request = $resource(apiCall + apiRoutes[route])
        request.get()

    initialize: initializeFn
    send: sendFn
    retrieve: retrieveFn
)