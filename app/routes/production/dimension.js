import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    //instead of calling that json file again with a jquery call, we can reference it from production.js,
    // as it's the parent route of this route

    return this.modelFor('production')
      .findBy('DimensionID', parseInt(params.dimension_id));
  }

});
