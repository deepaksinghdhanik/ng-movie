 (function () {
     'use strict';
     
     function myController(){
         var model = this;
         
         model.message = "message from Movie";
         
     }
     
      var module = angular.module("mainApp");
      module.component( "moviesList",{
          templateUrl:"/app/component/movies/movieView.html",
          controller:myController,
          controllerAs:'model'
      });
   
 }());