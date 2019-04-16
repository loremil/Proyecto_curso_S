cursosApp.controller("active--bloque01", function($scope, $timeout) {
  $scope.changeIndex = function(index) {
    $scope.selected = index;
  }
  setTimeout(function(){
    $scope.$broadcast('reCalcViewDimensions');
  }, 500); 
  $scope.slider = {
   value: 1,
   options: {
     showTicksValues: true,
     stepsArray: [
       {value: 1, legend: 'menos del 20%'},
       {value: 2, legend: ''},
       {value: 3, legend: 'mayor o igual a 60%'},
     ]
   }
 };
 function apply(scope) {
  if (!scope.$$phase && !scope.$root.$$phase) {
    scope.$apply();
    console.log("Scope Apply Done !!");
  }
  else {
    console.log("Scheduling Apply after 200ms digest cycle already in progress");
    setTimeout(function() {
        apply(scope);
    }, 200);
  }
}
 //slider horizonte
 $scope.slider2 = {
  value: 1,
  options: {
    showTicksValues: true,
    stepsArray: [
      {value: 1, legend: '< 1 mes'},
      {value: 2, legend: '< 1 año'},
      {value: 3, legend: '1-3 años'},
      {value: 4, legend: '3-5 años'},
      {value: 5, legend: '> 5 años'},
    ]
  }
 };
 //slider3 liquidez
 $scope.slider3 = {
  value: 5,
  options: {
    showTicksValues: true,
    stepsArray: [
      {value: 1, legend: '0'},
      {value: 2, legend: '< 30%'},
      {value: 3, legend: ' > = 30%'},
      {value: 4, legend: ' No sé'},
    ]
  }
 };
 //slider4 y 5 Riesgo
 $scope.slider4 = {
  value: 1,
  options: {
    showTicksValues: true,
    stepsArray: [
      {value: 1, legend: '> 0%'},
      {value: 2, legend: ' > 5%'},
      {value: 3, legend: ' > 10%'},
      {value: 4, legend: ' > 20%'},
      {value: 5, legend: ' > 35%'},
    ]
  }
 };
 //slider3 liquidez
 $scope.slider5 = {
  value: 1,
  options: {
    showTicksValues: true,
    stepsArray: [
      {value: 1, legend: '9% a 11%'},
      {value: 2, legend: '7% a 13%'},
      {value: 3, legend: '5% a 15%'},
      {value: 4, legend: '0% a 20%'},
      {value: 5, legend: '10% a 30%'},
    ]
  }
 };

});
