"use strict"

((app) ->
    Controller = ($scope, resourceFactory, BlogsModel) ->
        BlogsModel.initialize($scope)

        $scope.save = ->
            blogResource = resourceFactory.create('blogs', $scope.blog)
            blogResource.$then((result) ->
                $scope.alert.message = result.data.message
            )

    app.controller('BlogsControllerCreate', Controller)

) restfulTut
