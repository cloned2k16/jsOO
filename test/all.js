"use strict";

    var ND
    ,   jsOO    = require   ('../')
    ,   test    = require   ("tape")
    ;
    
    console.log("version: ",jsOO.version);
    
    jsOO.inheritance.apply(Object);
    
    // we did use a function as constructor to catch the name 
    // as Class Name even when theres no ES6 support
    
    function Car        () { 
        Car.prototype.super(this);
        this.isCar=true;
    }
    
    function Ferrari    () { 
        Ferrari.prototype.super(this);
        this.isFerrari=true;
    }
    
    Car     .extends    (Object);
    Ferrari .extends    (Car);
    
    var
        car     = new Car       ()
    ,   ferrari = new Ferrari   ()
    ;
    
    
test('jsOO Inheritance', function (assert) {
    
    assert.plan(4);
    assert.strictEquals(car.isCar             ,   true);    
    assert.strictEquals(car.isFerrari         ,     ND);
    assert.strictEquals(ferrari.isCar         ,   true);    
    assert.strictEquals(ferrari.isFerrari     ,   true);    
});