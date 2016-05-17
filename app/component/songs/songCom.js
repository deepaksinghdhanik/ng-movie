 (function () {
     'use strict';
     
     function myController(){
         var model = this;
         
         model.message = "message from songs";
         
     }
     
      var module = angular.module("mainApp");
      module.component( "songsList",{
          templateUrl:"/app/component/songs/songView.html",
          controller:myController,
          controllerAs:'model'
      });
   
 }());