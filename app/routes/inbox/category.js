import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Route.extend({
  messages: inject.service(),
  model({category_id}) {
    let messagesService = this.get('messages');
    
    return messagesService.fetchMessages(category_id).then((messages)=>{
      messagesService.setCurrentCategory(category_id);
      return messages;
    });
  }
});
