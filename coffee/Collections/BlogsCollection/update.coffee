"use strict"

((app) ->
    Controller = ($scope, $routeParams,  BlogsModel, resourceFactory) ->
        BlogsModel.initialize($scope)

        $scope.fetchBlog = (id) ->
            request = resourceFactory.query('blogs', id)
            request.$then((result) ->
                $scope.blog = result.data.data
            )

        $scope.update = ->
            request = resourceFactory.update('blogs', $scope.blog)
            request.$then((result) ->
                $scope.alert.message = result.data.message
            )

        $scope.fetchBlog($routeParams.id)

    app.controller('BlogsControllerUpdate', Controller)

) restfulTut
