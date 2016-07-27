import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { name: 'Payments', id: 'payments' },
      { name: 'Security', id: 'security' },
      { name: 'Collections', id: 'collections' },
      { name: 'Reporting', id: 'reporting' },    
    ]
  }
});
