
@restfulTut.factory("resourceFactory", ($resource, resourceUrl) ->
    create: (action, data) ->
        request = $resource resourceUrl + action, {},
            create:
                method: "PUT"
        request.create(data)

    query: (action, id) ->
        request = $resource(resourceUrl + action + '/' + id)
        request.query()

    get: (action) ->
        request = $resource(resourceUrl + action)
        request.get()

    update: (action, data) ->
        request = $resource(resourceUrl + action)
        request.save(data)

    remove: (action, id) ->
        request = $resource(resourceUrl + action + '/' + id)
        request.delete()
)