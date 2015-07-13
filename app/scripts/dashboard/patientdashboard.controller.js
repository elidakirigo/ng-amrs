/*jshint -W003, -W098 */
(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name ngAmrsApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the ngAmrsApp
   */
  angular
  .module('app.patientdashboard')
  .controller('PatientDashboardCtrl', PatientDashboardCtrl);
  PatientDashboardCtrl.$nject = ['$scope', '$stateParams','$timeout', 'ContextService'];

  function PatientDashboardCtrl($scope, $stateParams, $timeout, ContextService) {
    $scope.patient = {};
    $scope.p = null;

    $timeout(function () {
      ContextService.getPatientService().getPatientByUuid({uuid:$stateParams.uuid},
        function (data) {
          $scope.patient = data;
          console.log(data);
        });
    },1000);
    }
})();
