import Resolver from 'resolver';
import Router from 'outer/router';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'outer',
  Resolver: Resolver,
  Router: Router
});

export default App;
