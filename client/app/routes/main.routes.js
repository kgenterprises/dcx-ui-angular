/**
 * Created by KGraham on 5/26/16.
 */
(function(){
    "use strict";

    function Routes($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise("/map");

        $stateProvider
            .state("root", {
                abstract: true,
                url: "/",
                templateUrl: "app/components/root/root.html",
                controller: "RootCtrl as Root"
            })
            .state("root.login", {
                url: "login",
                views: {
                    page: {
                        templateUrl: "app/components/login/login.html",
                        controller: "LoginCtrl as Login"
                    }
                },
                params: {
                    alertMessage: null
                },
                onEnter: function(Session, Idle) {
                    angular.element(document).find("body").addClass("login-background");
                    Session.destroy();
                    Idle.unwatch();
                },
                onExit: function() {
                    angular.element(document).find("body").removeClass("login-background");
                }
            })
            .state("root.main", {
                abstract: true,
                views: {
                    page: {
                        templateUrl: "app/components/main/main.html"
                    }
                },
                onEnter: function(Idle) {
                    Idle.watch();
                }
            })
            .state("root.main.body", {
                abstract: true,
                views: {
                    navBar: {
                        templateUrl: "app/components/navBar/navBar.html",
                        controller: "NavBarCtrl as NavBar"
                    },
                    pageHeader: {
                        templateUrl: "app/components/pageHeader/pageHeader.html",
                        controller: "PageHeaderCtrl as PageHeader"
                    },
                    body: {
                        template: "<div ui-view></div>"
                    }
                }
            })
        ;
    }

    angular.module('DCX')
           .config(Routes);

})();
