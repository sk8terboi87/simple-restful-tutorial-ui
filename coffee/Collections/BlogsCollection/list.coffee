"use strict"

((app) ->
    Controller = ($scope, $routeParams, BlogsModel) ->
        BlogsModel.initialize($scope)

        $scope.list = ->
            $scope.blogs = BlogsModel.retrieve()

        $scope.remove = (id) ->
            BlogsModel.remove(id, $scope)

        $scope.list()

    app.controller('BlogsControllerList', Controller)

) restfulTut
