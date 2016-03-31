import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },

    saveBlog1() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        article: this.get('article'),
        author: this.get('author'),
        image: this.get('image'),
      };
      this.set('addNewBlog', false);
      this.sendAction('saveBlog2', params);
    }
  }
});
