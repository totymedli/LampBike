LampBike.config(function ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl : 'app/templates/counter-view.html'})
		.when('/about', {templateUrl : 'app/templates/about-view.html'});
});