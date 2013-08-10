"use strict"

((app) ->
    Controller = ($scope, $resource, BlogsModel) ->
        BlogsModel.initialize($scope)

        $scope.save = ->
            BlogsModel.send('add', $scope.blog)

    app.controller('BlogsController', Controller)

) restfulTut
