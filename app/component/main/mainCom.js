 (function () {
     'use strict';
     
     function myController(){
         var model = this;
         
         model.message = "message from Movie";
         
     }
     
      var module = angular.module("mainApp");
      module.component( "movieApp",{
          templateUrl:"/app/component/main/mainView.html",
          controller:myController,
          controllerAs:'model',
          $routeConfig:[
              {path:'/movies', component:'moviesList' , name:'Movies' , default:true},
              {path:'/actors', component:'actorsList' , name:'Actors'},
              {path:'/songs', component:'songsList' , name:'Songs'},
              {path:'/**', redirectTo:['Movies']}
          ]
      });
   
 }());