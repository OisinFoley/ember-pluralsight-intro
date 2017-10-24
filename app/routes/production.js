import Ember from 'ember';

const{
  Route
} = Ember;

export default Route.extend({
  model(){

    // return {
    //   'ProductID':1,
    //   "ProductName":"Ponderosa Pine",
    //   "DimensionID":7,
    //   "DimensionName":"1'' X 6\" X 6'",
    //   "BoardsSum":6,
    //   "BoardFeetSum":18
    // }

    return Ember.$.getJSON("/data/production.json");

  }
});
