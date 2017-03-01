"use strict";

    var ND
    ,   jsOO            =   require   ('../')
    ,   test            =   require   ("tape")
    ,   _CON            =   console
    ,   _log            =   (... a)         =>  { Function.apply.call(_CON.log     ,_CON,a); }
    ,   _err            =   (... a)         =>  { Function.apply.call(_CON.error   ,_CON,a); }
    ;

    _log("jsOO version: ",jsOO.version,'\n');

    jsOO.inheritance    .apply(Object);
    jsOO.encapsulation  .apply(Object);

    // we did use a function as constructor to catch the name
    // as Class Name even when theres no ES6 support
    function Vehicle                    ()                          {
        Vehicle.prototype.super(this);
        this.isVehicle  =   true;
    }

    function Car                        ()                          {
        Car.prototype.super(this);
        this.isCar      =   true;
    }

    function Ferrari                    ()                          {
        Ferrari.prototype.super(this);
        this.isFerrari  =   true;
    }

    Vehicle .extends    (Object);
    Car     .extends    (Vehicle);
    Ferrari .extends    (Car);

    var
        vehicle = new Vehicle   ()
    ,   car     = new Car       ()
    ,   ferrari = new Ferrari   ()
    ;

    vehicle.encapsulate({ isVehicle : 'bool'  })

test('jsOO Inheritance', function (assert) {

    assert.plan(9);

    assert.strictEquals(vehicle.isVehicle       ,   true);
    assert.strictEquals(vehicle.isCar           ,       ND);
    assert.strictEquals(vehicle.isFerrari       ,       ND);

    assert.strictEquals(car.isVehicle           ,   true);
    assert.strictEquals(car.isCar               ,   true);
    assert.strictEquals(car.isFerrari           ,       ND);

    assert.strictEquals(ferrari.isVehicle       ,   true);
    assert.strictEquals(ferrari.isCar           ,   true);
    assert.strictEquals(ferrari.isFerrari       ,   true);
});

test ('jsOO Encapsulation', function (assert) {
    assert.plan(1);
    assert.notEqual(Object.encapsulate          ,       ND);
});