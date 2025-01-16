angular.module('sidebarApp', [])
.controller('SidebarController', function($scope) {
  $scope.isCollapsed = false;
  $scope.toggleSidebar = function() {
    $scope.isCollapsed = !$scope.isCollapsed;
  };
});
