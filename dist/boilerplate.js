(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'angular'], factory);
    } else if (typeof exports === 'object') {
        factory(exports, require('angular'));
    } else {
        factory((root.boilerplate = {}), root.angular);
    }
}(this, function (exports, angular) {
'use strict';

angular.module('boilerplate', []).factory('sample', [function () {
  return {
    hello: function hello() {
      return 'welcome to boilerplate';
    }
  };
}]);

exports.boilerplate = Boilerplate;
}));
