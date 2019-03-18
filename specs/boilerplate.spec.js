(() => {
  describe('Boilerplate', function () {
    var sample

    beforeEach(angular.mock.module('boilerplate'))

    beforeEach(inject(function (_sample_) {
      sample = _sample_
    }))

    it('should exist', function () {
      expect(sample).toBeDefined()
    })

    describe('.hello()', function () {
      it('should exist', function () {
        expect(sample.hello).toBeDefined()
      })

      it('should return a correct hello message', function () {
        expect(sample.hello()).toEqual('welcome to boilerplate')
      })
    })
  })
})()
