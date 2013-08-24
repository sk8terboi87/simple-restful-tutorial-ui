"use strict"

@restfulTut.service('BlogsModel', (resourceUrl, resourceFactory) ->

    initializeFn = (scope) ->
        scope.alert = []
        scope.blogs = {}
        scope.blog = {}


    initialize: initializeFn
)