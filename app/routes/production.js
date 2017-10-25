import Ember from 'ember';

// const{
//   Route
// } = Ember;

const Promise = Ember.RSVP.Promise;

export default Ember.Route.extend({
  // model(params){
  model(params) {


    // return {
    //   'ProductID':1,
    //   "ProductName":"Ponderosa Pine",
    //   "DimensionID":7,
    //   "DimensionName":"1'' X 6\" X 6'",
    //   "BoardsSum":6,
    //   "BoardFeetSum":18
    // }

    //it's just a jquery call to a local file
    // return Ember.$.getJSON("/data/production.json");

    //now for single record - retrieves first value in the json array
    // return Ember.$.getJSON('/data/production.json?start=${params.start}&end=${params.end}');

        return new Promise(function(resolve) {
          setTimeout(function () {
            // let data = Ember.$.getJSON('/data/production.json?start=${params.start}&end=${params.end}');
            let data = Ember.$.getJSON('/data/production.json?stars_at=${params.start}&ends_at=${params.end}');
            // let data = Ember.$.getJSON(`/data/production.json?stars_at=${params.start}&ends_at=${params.end}`);


            resolve(data);
          }, 400);
        });
      }
    });

