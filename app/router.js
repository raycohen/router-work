var Router = Ember.Router.extend();

Router.map(function() {
  this.route('nest');
});

Router.router.log = Ember.Logger.debug;

export default Router;
