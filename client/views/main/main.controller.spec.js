'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('test for heaviestPet function', function(){
        scope.data = [
            {text: "cat", number:2},
            {text: "dog", number:1}
        ]
        expect(scope.heaviestPet()).toEqual("cat 2");
    })

    it('test for no data', function(){
        expect(scope.heaviestPet()).toEqual("No Data");
    })
});
