"use strict";

    Object.prototype.extends    = function (parent) {
        var oo  =   this.prototype.constructor

        oo.prototype              = Object.create(parent.prototype);                                    //  just protoype stuff !
        oo.prototype.constructor  = oo;                                                                 //  fix misplaced constructor
        oo.prototype.parent       = parent;                                                             //  hold parent here
        oo.prototype.super        = (th)    => {                                                        //  super emulated call
            this.prototype.parent.call(th); 
            th.className    =   oo.name; 
        }
    }
