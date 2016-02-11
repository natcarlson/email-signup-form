// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


var app = angular.module('EmailSignUp', []);

app.controller( 'EmailsController', ['$scope', '$http', function($scope, $http) {

  $http.get('/api/emails').then(function(response) {
    var data = response.data;
    $scope.emails = data.emails;
  });

  $scope.newEmail = {};
  $scope.createEmail = function() {
    $http.post('/api/emails', {email: $scope.newEmail}).then(function(response) {
      var data = response.data;
      $scope.emails.push( data );
      $scope.newEmail = {}

      var openConfirmationModal = function() {};
        $("#confirmation-modal").openModal({
            complete : openConfirmationModal
        });

      // var closeConfirmationModal = function() {
      //   setTimeout(function() {
      //     $("#confirmation-modal").closeModal({
      //         complete : closeConfirmationModal
      //     }, 3000);
      //   });
      // };

    });
  };
}]);


$(document).ready(function(){
    jQuery.noConflict();
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal({
      dismissible: true,
      opacity: .5
    })
});


// $(document).ready(function() {
// setTimeout(function() {
// $('#confirmation-modal').fadeOut(200);
// }, 3000); // seconds
// });


// var onCreateEmail = function() {
//     alert("Modal closed!");
// };
//
// $("#confirmation-modal").openModal({
//     complete : onModalHide
// });
