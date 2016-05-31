/**
 * Created by KGraham on 5/26/16.
 */
(function(){
    "use strict";

    function ParametersCtrl(DriverDataStore, $filter){

        var self = this;

        self.drivers = angular.copy(DriverDataStore.getDrivers());
        self.parametersSelected = [];
        self.conversions = conversions();
        self.setParameters = setParameters;
        self.toggleParameterSelected = toggleParameterSelected;
        self.toggleExtended = toggleExtended;
        self.anySelected = anySelected;

        function setParameters(){
            if(self.indexSelected) {
                self.parameters = self.drivers[self.indexSelected].parameters;
            }
        }

        function toggleParameterSelected(parameter){
            parameter.selected = parameter.selected ? false : true;
        }

        function toggleExtended(parameterName){
            if(!self[parameterName]) {
                self[parameterName] = {};
            }
            self[parameterName].extended = self[parameterName].extended ? false : true;
        }

        function anySelected(){
            if(self.parameters) {
                var filtered = $filter("filter")(self.parameters, {selected: true});
                if(filtered) {
                    return filtered.length > 0;
                }
            }
            return false;
        }

        function conversions(){
            return ["C to F", "C to K", "F to C", "F to K", "K to C", "K to F", "L to mL", "mL to L", "L/m to L/h",
                "L/m to L/s", "L/m to mL/h"];
        }
    }

    angular.module('DCX')
           .controller('ParametersCtrl', ParametersCtrl);

})();