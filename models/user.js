var _ = require('vendor/lodash');
var Backbone = require('vendor/backbone');

var User = exports.User = Backbone.Model.extend({

  initialize: function(options) {
    this.on('change:name', this.logger);
  },

  url: function() { return '/users/:id'; },

  logger: function(e) {
    console.log(this.get('name'));
    if (e)
      console.log(e);
  }

});
