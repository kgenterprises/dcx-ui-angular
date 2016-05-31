/**
 * Created by KGraham on 5/26/16.
 */
(function(){
    "use strict";

    function PageHeaderCtrl($scope, PageHeaderFactory, $mdDialog){
        var self = this;

        self.pageHeader = PageHeaderFactory.getPageHeader();
        self.openHelp = openHelp;

        $scope.$watch(function(){
            return PageHeaderFactory.getPageHeader();
        }, function(newVal, oldVal){
            if(newVal !== oldVal) {
                self.pageHeader = newVal;
            }
        });

        function openHelp(){
            $mdDialog.show(
                {
                    templateUrl: "app/components/helpDialog/helpDialog.html",
                    locals: angular.copy(PageHeaderFactory.getPageHelpContents()),
                    bindToController: true,
                    controller: function($mdDialog){
                        this.hide = function(){
                            $mdDialog.hide();
                        };
                    },
                    controllerAs: "Help",
                    clickOutsideToClose: true
                }
            );
        }
    }

    angular.module('DCX')
           .controller('PageHeaderCtrl', PageHeaderCtrl);

})();