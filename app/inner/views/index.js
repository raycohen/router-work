var IndexView = Ember.View.extend({
  elementId: "inner-index",
  click: function(e) {
    console.log('clicked inner index view');
    // e.stopPropagation();
  }
});

export default IndexView;
