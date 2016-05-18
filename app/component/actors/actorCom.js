 (function () {
     'use strict';
     
     function myController(movieApi){
         var model = this;
         
         model.message = movieApi.message();
         
     }
     
     myController.$inject = ['movieApi'];
     
      var module = angular.module("mainApp");
      module.component( "actorsList",{
          templateUrl:"/app/component/actors/actorView.html",
          controller:myController,
          controllerAs:'model'
      });
   
 }());