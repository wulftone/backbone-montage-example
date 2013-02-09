// person.js
var Montage = require("montage").Montage;
var Person = exports.Person = Montage.create(Montage, {
    _name: {
        value: null
    },
    name: {
        set: function(value) {
            this._name = value;
            this.sayHello();
        },
        get: function() {
            return this._name;
        }
    },
    sayHello: {
        value: function() {
            console.log(this.name + " was created at: " + this.timestamp);
        }
    },
    timestamp: {
        value: null
    },
    didCreate: {
        value: function() {
            this.timestamp = new Date();
            console.log("My name is: " + this.name); // this.name is still null at this point
        }
    },
    toString: {
        value: function() {
            return 'hey'
        }
    }
});
