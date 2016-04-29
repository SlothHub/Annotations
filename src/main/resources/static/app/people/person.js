System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters:[],
        execute: function() {
            Person = (function () {
                function Person(id, firstName, lastName) {
                    this.id = id;
                    this.firstName = firstName;
                    this.lastName = lastName;
                }
                return Person;
            }());
            exports_1("Person", Person);
        }
    }
});
//# sourceMappingURL=person.js.map