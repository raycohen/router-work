import InnerApp from 'inner/app';

var NestView = Ember.View.extend({
  didInsertElement: function() {
    window.NestedApp = InnerApp.create({
      rootElement: this.$('.nested-root')[0]
    });

    this._app = NestedApp;
  },
  willDestroyElement: function() {
    this._app.destroy();
  },
  click: function() {
    console.log("clicked the nest view in the outer app");
  }
});

export default NestView;
