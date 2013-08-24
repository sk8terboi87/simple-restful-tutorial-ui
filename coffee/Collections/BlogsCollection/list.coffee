"use strict"

((app) ->
    Controller = ($scope, $routeParams, BlogsModel, resourceFactory) ->
        BlogsModel.initialize($scope)

        $scope.list = ->
            request = resourceFactory.get('blogs')
            request.$then((result) ->
                $scope.blogs = result.data
            )


        $scope.remove = (id) ->
            request = resourceFactory.remove('blogs/remove', id)
            request.$then((result) ->
                $scope.alert.message = result.data.message
                if (result.data.status is "success")
                    $scope.list()
            )

        $scope.list()

    app.controller('BlogsControllerList', Controller)

) restfulTut
