(() => {
  angular.module('sample').controller('HomeCtrl', [
    'sample',
    function (
      sample
    ) {
      let vm = this
      vm.message = sample.hello()
    }])
})()
