import Ember from 'ember';
const {
  inject
} = Ember;

export default Ember.Route.extend({
  messages: inject.service(),
  model({message_id}) {
    return this.get('messages').fetchMessage(message_id);
  },
  afterModel(message) {
    let {read} = message;

    if (read === false) {
      this.get('messages').markRead(message);
    } 
  }
});
