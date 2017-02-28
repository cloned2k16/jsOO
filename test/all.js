"use strict";

    var ND
    ,   jsOO    = require   ('../')
    ,   test    = require   ("tape")
    ;
    
    console.log("version: ",jsOO.version);
    
    jsOO.inheritance.apply(Object);
    
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
    
    
test('jsOO Inheritance', function (assert) {
    
    assert.plan(9);
    
    assert.strictEquals(vehicle.isVehicle     ,   true);    
    assert.strictEquals(vehicle.isCar         ,     ND);
    assert.strictEquals(vehicle.isFerrari     ,     ND);
    
    assert.strictEquals(car.isVehicle         ,   true);    
    assert.strictEquals(car.isCar             ,   true);    
    assert.strictEquals(car.isFerrari         ,     ND);
    
    assert.strictEquals(ferrari.isVehicle     ,   true);    
    assert.strictEquals(ferrari.isCar         ,   true);    
    assert.strictEquals(ferrari.isFerrari     ,   true);    
});