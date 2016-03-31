import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    update(blog, params) {
      console.log('hello');
      this.sendAction('update', blog, params);
    }
  });
