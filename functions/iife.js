 // IMMEDIATELY INVOKING FUNCTION
 
 var myApp = (function() {
    var privateVar = 'I am private';

    return {
        getPrivateVar: function() {
            return privateVar;
        }
    };
})();

console.log(myApp.getPrivateVar()); 
