import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.scheduleMore();
  },
  scheduleMore() {
    // TODO: implement polling
  }
});
