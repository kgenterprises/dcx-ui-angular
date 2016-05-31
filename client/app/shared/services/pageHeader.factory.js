/**
 * Created by KGraham on 5/26/16.
 */
(function() {
    "use strict";

    function PageHeaderFactory () {
        
        var pageHeader = "";
        var helpContents = {};
        
        return {
            setPageHeader: setPageHeader,
            getPageHeader: getPageHeader,
            setPageHelpContents: setPageHelpContents,
            getPageHelpContents: getPageHelpContents
        };
        
        function setPageHeader(pageHeader_) {
            pageHeader = pageHeader_;
        }

        function getPageHeader() {
            return pageHeader;
        }
        
        function setPageHelpContents(title, contentsTemplateUrl) {
            helpContents.title = title;
            helpContents.contentsTemplateUrl = contentsTemplateUrl;
        }
        
        function getPageHelpContents() {
            return helpContents;
        }
    }

    angular.module('DCX').factory('PageHeaderFactory', PageHeaderFactory);

})();