"use strict"

((app) ->
    Controller = ($scope, $routeParams,  BlogsModel) ->
        BlogsModel.initialize($scope)
        BlogsModel.query($scope, $routeParams.id)

        $scope.update = ->
            BlogsModel.update($scope.blog, $scope)

    app.controller('BlogsControllerUpdate', Controller)

) restfulTut
