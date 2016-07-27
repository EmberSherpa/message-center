import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Route.extend({
  messages: inject.service(),
  model() {
    return this.get('messages').fetchCategories();
  }
});
