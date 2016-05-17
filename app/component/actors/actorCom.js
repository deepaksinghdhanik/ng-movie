 (function () {
     'use strict';
     
     function myController(){
         var model = this;
         
         model.message = "message from actors";
         
     }
     
      var module = angular.module("mainApp");
      module.component( "actorsList",{
          templateUrl:"/app/component/actors/actorView.html",
          controller:myController,
          controllerAs:'model'
      });
   
 }());