var _ = require('vendor/lodash');
var Backbone = require('vendor/backbone');
var User = require('models/user').User;

exports.Users = Backbone.Collection.extend({

  model: User,

  url: function() { return '/users' ;},

  initialize: function(options) {
    this.on('add', this.logger);
  },

  logger: function(e) {
    console.log('Last added: ' + this.last().get('name'));
    if (e)
      console.log(e);
  },

  // Save is unsupported for now.. I dunno what it's attempting to do yet...
  // Maybe if I wasn't using `python -m SimpleHTTPServer` it would work.
  save: function() {
    var response = Backbone.sync('update', this, {
      url: this.url(),
      contentType: 'application/json',
      data: JSON.stringify( { children: this.toJSON() } ),
      success: function(models){
        this.reset(models.children);
      }
    });
    return response;
  }

});
