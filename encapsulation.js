"use strict";
    var ND
    ,   _CON            =   console
    ,   _log            =   (... a)         =>  { Function.apply.call(_CON.log     ,_CON,a); }
    ,   _err            =   (... a)         =>  { Function.apply.call(_CON.error   ,_CON,a); }

module.exports = {

    encapsulate : function (obj) {
        for (var i in obj){

           _log('@=',i , typeof obj[i]);
        }
    }


};