var _ = require('vendor/lodash');
var Backbone = require('vendor/backbone');

exports.User = Backbone.Model.extend({

  initialize: function(options) {
    this.set('name','Jerry');
  },

  url: '/users',

  events: {
    'change:name':'logger'
  },

  logger: function(e) {
    console.log(this.get('name'));
    if (e)
      console.log(e);
  }

});
