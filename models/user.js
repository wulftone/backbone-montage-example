var _ = require('vendor/lodash');
var Backbone = require('vendor/backbone');

exports.User = Backbone.Model.extend({

  initialize: function(options) {
    this.set('name','Jerry');
    this.on('change:name',this.logger);
  },

  url: '/users',

  logger: function(e) {
    console.log(this.get('name'));
    if (e)
      console.log(e);
  }

});
