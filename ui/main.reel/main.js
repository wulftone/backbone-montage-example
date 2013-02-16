// Module: main.js
// Name: Main
var Montage = require("montage/core/core").Montage;
var Component = require("montage/ui/component").Component;
var ArrayController = require("montage/ui/controller/array-controller").ArrayController;
require('vendor/zepto');
var _ = require('vendor/lodash');
var Users = require('models/users').Users;

exports.Main = Montage.create(Component, {
    arrayController: {
        value: null
    },

    didCreate: {
        value: function () {
            this.users = new Users( { name:'default' } ); // give it one user by default
            this.users.fetch(); // fetch users from the server, doesn't work right now--no resource!
            var content = this.users.pluck('name');
            this.arrayController = ArrayController.create().initWithContent(content);
        }
    },

    handleAddButtonAction: {
        value: function(event) {
            var val = event.detail.username;
            this.users.add( { name: val } );
            this.arrayController.content = this.users.pluck('name');
        }
    },

    handleSaveButtonAction: {
        value: function(event) {
            this.users.save();
        }
    }
});
