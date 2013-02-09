// Module: main.js
// Name: Main
var Montage = require("montage/core/core").Montage;
var Component = require("montage/ui/component").Component;
require('vendor/zepto');
var _ = require('vendor/lodash');
var User = require('models/user').User;

exports.Main = Montage.create(Component, {
    hasTemplate: {
        value: false
    },
    saveButton: {
        value: null
    },
    displayUsername: {
        value: function(name) {
            $('#username').html(name);
        }
    },
    handleAction: {
        value: function(event) {
            var val = $('#main > input[name="username"]').val()
            this.user.set('name',val);
            this.displayUsername(val);
            // Do login stuff...
        }
    },
    prepareForDraw: {
        value: function() {
            this.user = new User();
            this.user.fetch();
            this.displayUsername(this.user.get('name'));
        }
    }
});
