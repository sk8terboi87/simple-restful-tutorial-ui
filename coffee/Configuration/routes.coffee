@restfulTut.config(["$routeProvider", ($routeProvider) ->
	$routerprovider = $routeProvider;
	$routeProvider.when("/",
		templateUrl: "views/Blogs/list.html"
		controller: "BlogsControllerList"
	);
	$routeProvider.when("/blog/create",
		templateUrl: "views/Blogs/create.html"
		controller: "BlogsControllerCreate"
	);
	$routeProvider.when("/blog/update/:id",
		templateUrl: "views/Blogs/update.html"
		controller: "BlogsControllerUpdate"
	);
	$routeProvider.when("/blogs/list",
		templateUrl: "views/Blogs/list.html"
		controller: "BlogsController"
	);
	$routeProvider.otherwise(
		redirectTo: "/"
	);
])