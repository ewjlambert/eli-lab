/**angular.module('SwApp', ['ngMaterial'])
    .controller('AppCtrl', function ($scope) {
        $scope.imagePath = 'img/washedout.png';


    });
*/

angular
    .module('SwApp', ["ngMaterial", "ngRoute"])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        // Home
            .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
            // Pages
            .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
            .when("/faq", {templateUrl: "partials/mon_out.php", controller: "PageCtrl"})
            .when("/covered", {templateUrl: "partials/covered.html", controller: "PageCtrl"})
           // .when("/services", {templateUrl: "partials/services.php", controller: "PageCtrl"})


            /*.when('/partials/services.php?mon=:id', {
                templateUrl: 'partials/services.php',
                controller: 'RouteController'
            })

        function RouteController($scope, $routeParams) {
            $scope.templateUrl = 'partials/services.php'+$routeParams.id+'/.php';
        }*/

            .when("/mon:id", {
                controller: 'PageCtrl',
                templateUrl: function($routeParams) {
                    return 'partials/services.php' + $routeParams.id;
                }

            })

            .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
            // Blog
            .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
            .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
            // else 404
            .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
    }])



    .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.toggleLeft = buildDelayedToggler('left');
        $scope.toggleRight = buildToggler('right');
        $scope.isOpenRight = function(){
            return $mdSidenav('right').isOpen();

        };
        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
            var timer;
            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
            return debounce(function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 200);
        }
        function buildToggler(navID) {
            return function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        }
    })
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    })
    .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };
    })





/**
var app = angular.module('spaApp', [
    'ngRoute'
]);


 * Configure the Routes

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        // Pages
        .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
        .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
        .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
        .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
        .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
        // Blog
        .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
        .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);
 */
/**
 * Controls the Blog
 */
.controller('BlogCtrl', function (/* $scope, $location, $http */) {
    console.log("Blog Controller reporting for duty.");
})

/**
 * Controls all other Pages
 */
.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");

    // Activates the Carousel
//    $('.carousel').carousel({
 //       interval: 5000
//    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    })
})



