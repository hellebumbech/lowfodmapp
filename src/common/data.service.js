(function() {
  "use strict";

  angular.module('lowfodmap')
  .service('DataService', DataService);

  DataService.$inject = ['$http', 'ApiPath'];
  function DataService($http, ApiPath) {
    var service = this;

    service.intoleranceData = ['fruktaner'];

    service.getKulhydrattyper = function() {
      return $http.get(ApiPath + 'src/data/kulhydrattyper.json').then(function(response){
          service.kulhydrattyper = response.data.kulhydrattyper;
          return response.data.kulhydrattyper;
        })
    };

    service.gemIntoleranceData = function(kulhydrattyper) {
      service.intoleranceData = [];
      for(var item in kulhydrattyper) {
        if(kulhydrattyper[item].intolerance == true) {
          service.intoleranceData.push(kulhydrattyper[item].sukkerstof);
        }
      }
    };

    service.getFoedevareData = function() {
      return $http.get(ApiPath + 'src/data/foedevarer.json').then(function(response) {
        return response.data.foedevarer;
      })
    }

    service.getFoedevareItem = function(foedevareId) {
      return service.getFoedevareData().then(function(response) {
        for(var item in response) {
          if(response[item].id == foedevareId) {
            return response[item];
          }
        }
      });
    }
  }
})();
