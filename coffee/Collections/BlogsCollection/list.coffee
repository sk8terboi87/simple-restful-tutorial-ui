"use strict"

((app) ->
    Controller = ($scope, $routeParams, BlogsModel, resourceFactory) ->
        BlogsModel.initialize($scope)

        $scope.list = ->
            blogResource = resourceFactory.get('blogs')
            blogResource.$then((result) ->
                $scope.blogs = result.data
            )


        $scope.remove = (id) ->
            blogResource = resourceFactory.remove('blogs/remove', id)
            blogResource.$then((result) ->
                $scope.alert.message = result.data.message
                if (result.data.status is "success")
                    $scope.list()
            )

        $scope.list()

    app.controller('BlogsControllerList', Controller)

) restfulTut
