"use strict"
@restfulTut.service('BlogsModel', ($resource, resourceUrl) ->
    initializeFn = (scope) ->
        scope.alertMessage = []
        scope.blogs = {}
        scope.blog = {}

    createFn = (data, scope) ->
        request = $resource resourceUrl + 'blogs', {},
          create:
            method: "PUT"

        scope.alertMessage = request.create(data);

    retrieveFn = () ->
        request = $resource(resourceUrl + 'blogs')
        request.get()

    queryFn = (scope, id) ->
        request = $resource resourceUrl + 'blogs'+"/:entryId", {},
          query:
            method: "GET"
            params:
              entryId: id
              isArray: true

        response = request.query(id)
        response.$then((result) ->
            scope.blog = result.data.data
        )

    removeFn = (id, scope) ->
        request = $resource(resourceUrl + 'blogs/remove/' + id)
        response = request.delete()
        response.$then((result) ->
            if (result.data.status is "success")
                scope.list()
        )

    initialize: initializeFn
    create: createFn
    retrieve: retrieveFn
    query: queryFn
    remove: removeFn
)