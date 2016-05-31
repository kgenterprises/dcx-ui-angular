(function(){
    "use strict";

    function PrecisionFilter(){
        return function(input) {
            if (!angular.isNumber(input)) {
                if (input && input.length > 0) {
                    var padding = "";
                    for (var i = 0; i < input; i++) {
                        padding += "0";
                    }
                    return "0." + padding;
                } else {
                    return "";
                }
            }
        };
    }

    angular.module("DCX")
           .filter("precisionExample", PrecisionFilter);

})();