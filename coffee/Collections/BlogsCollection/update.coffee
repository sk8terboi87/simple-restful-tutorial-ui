"use strict"

((app) ->
    Controller = ($scope, $routeParams,  BlogsModel, resourceFactory) ->
        BlogsModel.initialize($scope)

        $scope.fetchBlog = (id) ->
            blogResource = resourceFactory.query('blogs', id)
            blogResource.$then((result) ->
                $scope.blog = result.data.data
            )

        $scope.update = ->
            blogResource = resourceFactory.update('blogs', $scope.blog)
            blogResource.$then((result) ->
                $scope.alert.message = result.data.message
            )

        $scope.fetchBlog($routeParams.id)

    app.controller('BlogsControllerUpdate', Controller)

) restfulTut
