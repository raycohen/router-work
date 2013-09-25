import InnerApp from 'appkit/inner_app';

var NestView = Ember.View.extend({
  didInsertElement: function() {
    window.NestedApp = InnerApp.create({
      rootElement: this.$('.nested-root')[0]
    });

    var ApplicationView = Ember.View.extend({
      templateName: "nested_application"
    });

    var IndexView = Ember.View.extend({
      templateName: "nested_index",
      click: function() {
        console.log("clicked the NestedApp's IndexView");
      }
    });

    var container = NestedApp.__container__;

    container.unregister('view:application');
    container.register('view:application', ApplicationView);

    container.unregister('view:index');
    container.register('view:index', IndexView);

    this._app = NestedApp;
  },
  willDestroyElement: function() {
    this._app.destroy();
  }
});

export default NestView;
