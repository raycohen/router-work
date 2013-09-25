var NestView = Ember.View.extend({
  didInsertElement: function() {
    var Resolver = require('resolver');
    var MyApp = Ember.Application.extend({
      rootElement: this.$('.nested-root')[0],
      LOG_ACTIVE_GENERATION: true,
      LOG_VIEW_LOOKUPS: true,
      modulePrefix: 'appkit', // TODO: loaded via config
      Resolver: Resolver,
      Router: Ember.Router.extend({
        location: 'none'
      })
    });

    var NestedApp = MyApp.create();
    window.NestedApp = NestedApp;

    NestedApp.Router.map(function() {
      this.route('about');
    });

    var ApplicationView = Ember.View.extend({
      templateName: "nested_application"
    });

    var IndexView = Ember.View.extend({
      templateName: "nested_index"
    });

    var container = NestedApp.__container__;
    container.register('view:application', ApplicationView);
    container.register('view:index', IndexView);

    this._app = NestedApp;
  },
  willDestroyElement: function() {
    this._app.destroy();
  }
});

export default NestView;
