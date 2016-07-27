import Ember from 'ember';

const {
  set,
  computed,
  RSVP: { resolve }
} = Ember;

export default Ember.Service.extend({
  messages: [],
  unreadMessages: computed.filterBy('messages', 'read', false),
  unreadCount: computed.alias('unreadMessages.length'),

  fetchCategories() {
    return [
      { name: 'Payments', id: 'payments', unread: 3 },
      { name: 'Security', id: 'security', unread: 2 },
      { name: 'Collections', id: 'collections', unread: 4 },
      { name: 'Reporting', id: 'reporting', unread: 4 },    
    ];
  },

  fetchMessages(category_id) {

    let messages = getMessages(category_id);
    this.set('messages', messages);

    return resolve(messages);
  },

  fetchMessage(id) {
    return this.get('messages').findBy('id', id);
  },

  markRead(message) {
    set(message, 'read', true);
  },

  markUnread(message) {
    set(message, 'read', false);
  },

  setCurrentCategory(category_id) {
    this.set('currentCategory', category_id);
  }
});

function getMessages(category_id) {
  return [
    { id: "1", title: `Hello World from ${category_id}`, read: false },
    { id: "2", title: `Hello World 2 from ${category_id}`, read: false },
    { id: "3", title: `Hello World 3 from ${category_id}`, read: true },
    { id: "4", title: `Hello World 4 from ${category_id}`, read: true },                  
  ];
}