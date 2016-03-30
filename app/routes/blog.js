import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blog', params.blog_id);
  },
  // actions: {
    // update(blog, params) {
    //   Object.keys(params).forEach(function(key) {
    //     if(params[key]!==undefined) {
    //       rental.set(key,params[key]);
    //     }
    //   });
    //   blog.save();
    //   this.transitionTo('index');
    // },
    // destroyBlog(blog) {
    //   rental.destroyRecord();
    //   this.transitionTo('index');
    // }
  // }
});
