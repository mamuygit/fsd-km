(function () {
    angObj.directive('imageonload', function () {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                element.bind('load', function () {
                    element.parent().addClass('loaded');
                });
                element.bind('error', function () {
                    element.parent().addClass('loaded');
                });
            }
        };
    });

    angObj.directive("myDirective", function () {
        return {
            controller: function ($scope) {
                $scope.name = 'MyName',
                $scope.address = 'My Address'
            },
            template: 'Name: {{name}} | Address: {{address}}'
        };
    });
    // function Directive()
    // {
    //   console.log("Directive lib");
    // }
    // Directive();
})();
