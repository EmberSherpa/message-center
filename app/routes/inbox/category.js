import Ember from 'ember';

export default Ember.Route.extend({
  model({category_id}) {
    return [
      { id: 1, title: `Hello World from ${category_id}` },
      { id: 2, title: `Hello World 2 from ${category_id}` },
      { id: 3, title: `Hello World 3 from ${category_id}` },
      { id: 4, title: `Hello World 4 from ${category_id}` },                  
    ]
  }
});
