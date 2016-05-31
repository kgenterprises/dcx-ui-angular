(function(){
    "use strict";

    function NantNodeCard(){
        return {
            restrict: "E",
            scope: {
                name: "<",
                time: "<",
                desc: "<",
                online: "<",
                editMode: "<",
                selected: "="
            },
            templateUrl: "app/shared/directives/nantNodeCard/nantNodeCard.html",
            link: function($scope, element){

                var on = false;
                element.on("click", function(){
                    if($scope.editMode) {
                        if (!on) {
                            element.addClass("card-selected");
                        } else {
                            element.removeClass("card-selected");
                        }
                        on = !on;
                    }
                });
            }
        };
    }

    angular.module("DCX")
           .directive("nantNodeCard", NantNodeCard);

})();
