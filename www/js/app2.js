var application = angular.module('starter', ['ionic', 'ngCordova']);  
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
 
  application.controller('itemDivider', ['$scope', '$cordovaFile', function ($scope, $cordovaFile) {
    console.log('here');
    window.alert("Inside controller");
    $cordovaFile.checkFile(cordova.file.applicationDirectory, "www/demo.json")
      .then(function (success) {
        // success
        console.log("File is found");
        $cordovaFile.readAsText(cordova.file.dataDirectory, "www/demo.json")
          .then(function (result) {
            // success
            console.log("Success in reading file")
            $scope.items = JSON.parse(result);
          }, function (error) {
            // error
            console.log("error in reading the file");
          });


      }
        , function (error) {
          // error
          console.log("error in finding the file");
        });
  }])

}

