"use strict"

((app) ->
    Controller = ($scope, $resource, BlogsModel) ->
        BlogsModel.initialize($scope)

        $scope.save = ->
            BlogsModel.create($scope.blog, $scope)

    app.controller('BlogsControllerCreate', Controller)

) restfulTut
