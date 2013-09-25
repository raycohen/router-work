var Resolver = require('resolver');

var Router = Ember.Router.extend({
  location: 'none'
});

Router.map(function() {
  this.route('about');
});

var MyApp = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'inner',
  Resolver: Resolver,
  Router: Router
});

export default MyApp;
