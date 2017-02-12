(function() {
  "use strict";

  angular.module('lowfodmap', ['ui.router'])
  .config(config)
  .constant('ApiPath', 'http://localhost:3000/');

  config.$inject = ['$urlRouterProvider', '$httpProvider'];
  function config($urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }

})();