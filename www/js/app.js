// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var application = angular.module('starter', ['ionic', 'ngCordova']);   
application.run(function ($ionicPlatform, $cordovaFile) {
  $ionicPlatform.ready(function () {
    console.log("platform ready");
    
    if (window.StatusBar) {
      StatusBar.styleDefault();
    
    }
  });
})

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(cordova.file+"Device Ready");
   
 application.controller('itemDivider', ['ionic','$scope', '$cordovaFile' , function($scope, $cordovaFile) {
  console.log('cordova');
  console.log(cordova);
  console.log("cordova.file");
  console.log(cordova.file);
  console.log("cordova.file.dataDirectory");
  console.log(cordova.file.dataDirectory);
  $cordovaFile.checkFile(cordova.file.applicationDirectory, "www/demo.json")
    .then(function (success) {
      // success
      console.log("File is found");
      $cordovaFile.readAsText(cordova.file.applicationDirectory, "www/demo.json")
        .then(function (result) {
          // success
          console.log("Success in reading file")
          $scope.items = JSON.parse(result);
          console.log(items);
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


