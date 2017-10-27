import Ember from 'ember';

export default Ember.Route.extend({
  // mystore:  Ember.inject.service(),  //you'd expect to pass a string, but if you provide the same key name as the service that
  //you're calling, then Ember will intelligently create the link

  //use of initializer means we can remove this ^

  model(params){
    //instead of calling that json file again with a jquery call, we can reference it from production.js,
    // as it's the parent route of this route


    // return this.modelFor('production')
      // .findBy('DimensionID', parseInt(params.dimension_id));
    return this.get('mystore').dimension(params.dimension_id);
  }

});
