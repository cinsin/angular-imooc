var myCssModule = angular.module('MyCssModule', []);

myCssModule.controller('MyCssCtrl', ['$scope',
    function ($scope) {
        $scope.color = 'green';
        $scope.changeColor = function () {
            if($scope.color == 'green') {
                $scope.color = 'red';
            } else {
                $scope.color = 'green';
            }
        }

        $scope.no = '1';
        $scope.changeStyle = function () {
            if($scope.no == '1') {
                $scope.no = '2';
            } else {
                $scope.no = '1';
            }
        }
    }
]);