cursosApp.controller("anclaUp", function ($scope, $location, $anchorScroll){
    $scope.scrollTo = function(scrollLocation){
        $location.hash(scrollLocation);
        $anchorScroll.yOffset = 200;
        $anchorScroll();
    }
});
