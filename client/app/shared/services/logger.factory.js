(function () {
    "use strict";

    function Logger($log) {

        function Logger(context) {
            this.context = context;
        }

        Logger.prototype.log = function () {
            [].unshift.call(arguments, this.context);
            $log.log.apply(null, arguments);
        };

        Logger.prototype.debug = function () {
            [].unshift.call(arguments, this.context);
            $log.debug.apply(null, arguments);
        };

        Logger.prototype.error = function () {
            [].unshift.call(arguments, this.context);
            $log.error.apply(null, arguments);
        };

        return Logger;
    }

    angular
        .module("DCX")
        .factory("Logger", Logger);
})();
