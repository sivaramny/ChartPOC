/* application main module with dependencies */
angular.module('app', ['ngRoute', 'tc.chartjs', 'ngDragDrop']);

/* basic routes here */
angular.module('app').config(function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'partials/home.html'
  }).
  otherwise({
    redirectTo: '/home',
  });
});

// line charts
angular.module('app').controller('LineController', function($scope, $timeout) {

  /* Load chart with default data onload or refresh*/
  $scope.data = [65, 59, 80, 81, 56, 55, 40];

  /* Data loaded when drag Sony Summary */
  $scope.sonyData = [65, 159, 80, 81, 56, 55, 40];

  /* Data loaded when drag Samsung Summary */
  $scope.samsungData = [98,74,78,10,29,63,41];

  /* Data loaded when drag LG Summary */
  $scope.lgData = [55,84,42,47,39,66,15];

  /* Method to refresh chart */
  $scope.refreshChart = function(resData) {
    $scope.chartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First Chart",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: resData,
          spanGaps: false,
        }
      ]
    };
  };

  /* method called on page load */
  $scope.refreshChart($scope.data);

  /* called this function on drop the data from source to target*/
  $scope.onDrop = function(target, source){
    console.log("dropped " + source + " on " + target);
    $scope.refreshChart(source );
  };

});
