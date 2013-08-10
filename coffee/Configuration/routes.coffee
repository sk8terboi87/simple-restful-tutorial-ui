@restfulTut.config(["$routeProvider", ($routeProvider) ->
	$routerprovider = $routeProvider;
	$routeProvider.when("/",
		templateUrl: "views/Blogs/list.html"
		controller: "BlogsController"
	);
	$routeProvider.when("/blog/create",
		templateUrl: "views/Blogs/create.html"
		controller: "BlogsController"
	);
	$routeProvider.when("/blog/update/:id",
		templateUrl: "views/Blogs/update.html"
		controller: "BlogsController"
	);
	$routeProvider.when("/blog/remove/:id",
		templateUrl: "views/Blogs/remove.html"
		controller: "BlogsController"
	);
	$routeProvider.when("/blogs/list",
		templateUrl: "views/Blogs/list.html"
		controller: "BlogsController"
	);
	$routeProvider.otherwise(
		redirectTo: "/"
	);
])