/**angular.module('SwApp', ['ngMaterial'])
    .controller('AppCtrl', function ($scope) {
        $scope.imagePath = 'img/washedout.png';


    });
*/

angular
    .module('SwApp', ["ngMaterial", 'ui.router', 'angular.filter', '720kb.tooltips'])

    .run(['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.$location = $location;
    }])

    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/covered");
        //
        // Now set up the states
        $stateProvider
            .state('covered', {
                url: "/covered",
                templateUrl: "partials/covered.html"
            })
           /* .state('state1.list', {
                url: "/list",
                templateUrl: "partials/state1.list.html",
                controller: function($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            }) */
            .state('mons', {
                url: "/mons",
                templateUrl: "partials/mon_out.php"
            })
            /*.state('state2.list', {
                url: "/list",
                templateUrl: "partials/state2.list.html",
                controller: function($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            }); */
            .state('db', {
                url: "/db",
                templateUrl: "partials/blog.html"
            })

            .state('template', {
                url: "/template",
                templateUrl: "partials/monTemplate.html"
            })

            .state('new-qs', {
            url: '/new?monName',
            templateUrl: 'partials/monTemplate.html',
            controller: function($scope, $stateParams) {
                $scope.monName = $stateParams.monName;
            }
            })


    })



    .controller('AppCtrl', function($scope) {
        $scope.demo = {
            showTooltip : false,
            tipDirection : ''
        };
        $scope.demo.delayTooltip = undefined;
        $scope.$watch('demo.delayTooltip',function(val) {
            $scope.demo.delayTooltip = parseInt(val, 10) || 0;
        });
        $scope.$watch('demo.tipDirection',function(val) {
            if (val && val.length ) {
                $scope.demo.showTooltip = true;
            }
        })
    })





.controller('projectsController', function($scope, $http)

{

    getProject();

    function getProject(){

        $http.post('partials/getProject.php').success(function(data){

            $scope.projects = data; //the data are stored in projects

        })

    }})


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
    });






// Activates Tooltips for Social Links
//$('.tooltip-social').tooltip({
  //  selector: "a[data-toggle=tooltip]"
//});


