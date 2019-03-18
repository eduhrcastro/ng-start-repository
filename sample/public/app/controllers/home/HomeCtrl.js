(() => {
  angular.module('sample').controller('HomeCtrl', [
    '$log',
    function (
      $log
    ) {
      let vm = this

      $log.log(vm)
    }])
})()
