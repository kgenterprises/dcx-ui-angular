/**
 * Created by KGraham on 5/29/2016.
 */
(function(){
    "use strict";

    function AuthFactory(API_SERVER, Logger, $http, Session, $q){

        var logger = new Logger("AuthFactory");

        return {
            login: login,
            isAuthenticated: isAuthenticated,
            isAuthorized: isAuthorized
        };

        function login(username, password){
            //return $http
            //    .post({
            //              url: API_SERVER + '/login',
            //              params: {
            //                  username: username,
            //                  password: password
            //              }
            //          })
            //    .then(function(response){
            //        Session.create(response.data.id, response.data.user.id,
            //                       response.data.user.role);
            //        return response.data.user;
            //      });
            var deferred = $q.defer();
            if(username !== "kristina") {
                Session.create(Math.random(), username,
                               username === "7" ? "admin" : "editor");
                deferred.resolve();
            } else {
                if(password !== "kristina") {
                    deferred.reject("Password incorrect for the given user.");
                } else {
                    Session.create(Math.random(), username, "admin");
                }
            }
            return deferred.promise;

        }

        function isAuthenticated(){
            return !!Session.username;
        }

        function isAuthorized(authorizedRoles){
            if(!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return this.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1;
        }

    }

    angular.module("DCX")
           .factory("AuthFactory", AuthFactory);

})();