//using an absolute path as the tutor claims it'll provide code copying benefits later,
//will update here when I see that benefit in action

import Ember from 'ember';
// import Production from '../models/production';
import Production from 'loopylog/models/production';
import moment from 'moment';

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

    this.set('params', params); //this gets the datetime params from the url route, into our template. will populate inputs onload


    return new Promise(function(resolve) {
        setTimeout(function () {
          // let data = Ember.$.getJSON('/data/production.json?start=${params.start}&end=${params.end}');
          let data = Ember.$.getJSON('/data/production.json?stars_at=${params.start}&ends_at=${params.end}');
          data.then(function(result){
            let records = [];
            result.forEach(function(item){
              records.push( Production.create(item) );
            });
            resolve(records);
          })


          //with updated callback, we don't use this resolve anymore, it's returned in new position shown above
          // resolve(data);
        }, 400);
      });
      },

      //the following let's you customise what's going to be available through the controller before rendering
      //remember because a CTRL module is deprecated, this routes file, (or alternatively a component) now act
      //as the CTRL

      setupController(controller, model){
        this._super(controller,model);
        let params = this.get('params')
        //next we're saying that the :start and :end in our router.js file's value should equal to the
        //values in the provided url, matching the same format

        controller.set('start',params.start) //start is in router.js, param.start is localhost:4200/start/to/ etc...
        controller.set('end', params.end);

        controller.set('start_date', moment(new Date(params.start)).format('mm/dd/yyyy'));
        controller.set('end_date', moment(new Date(params.end)).format('mm/dd/yyyy'));
        controller.set('start_time', moment(new Date(params.start)).format('HH:mm'));
        controller.set('end_time', moment(new Date(params.end)).format('HH:mm'));

        //error somewhere in code from following video 10.4, made it as far as 2:50
      }
  });

