"use strict"

((app) ->
    Controller = ($scope, resourceFactory, BlogsModel) ->
        BlogsModel.initialize($scope)

        $scope.save = ->
            request = resourceFactory.create('blogs', $scope.blog)
            request.$then((result) ->
                $scope.alert.message = result.data.message
            )

    app.controller('BlogsControllerCreate', Controller)

) restfulTut
