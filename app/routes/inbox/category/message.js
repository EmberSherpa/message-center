import Ember from 'ember';

export default Ember.Route.extend({
  model({message_id}) {
    return {
      title: `Hello World ${message_id}`,
      content: `very nice message ${message_id}`
    };
  }
});
