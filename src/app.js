angular.module('boilerplate', []).factory('sample', [
  () => {
    return {
      hello: () => {
        return 'welcome to boilerplate'
      }
    }
  }])
