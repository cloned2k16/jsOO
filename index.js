//  ----------------------------------- --------------------------- ---------------------------------
    var ND
    ,   NDs         =   ''+ND
    ,   jsOO        =   {   name:       'JavaScript Object Oriented'
                    ,       desc:       'framework to emulate clasic Object Oriented behaviors' 
                    ,       version:    '0.0.1'
                    };
//  ----------------------------------- --------------------------- ---------------------------------
    jsOO.inheritance                    = require                   ('./inheritance.js');
    jsOO.inheritance.apply              = function (scope)          {
        scope.prototype.extends=jsOO.inheritance.extnds;
    }
//  ----------------------------------- --------------------------- ---------------------------------
    if ( typeof navigator  != NDs )     {                                                               // browser friendly ... :D
        _String_Prototypes.apply(window);
    }
    else    { // Node
        require('string_prototypes').apply(global);
        module.exports      = jsOO;
    }
//  ----------------------------------- --------------------------- ---------------------------------


