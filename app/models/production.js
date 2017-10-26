import Ember from 'ember';
// import Production from '../models/production';
//import Production from 'loopylog/models/production';
const Promise = Ember.RSVP.Promise;

export default Ember.Object.extend({
  //note: remmeber that because we're now using Ember.Object, we must use "get"
  //in order to return a property

  boards: Ember.computed('BoardsSum', function(){
    return this.get('BoardsSum');
  }),
  //now for a computed MACRO..
  boardfeet: Ember.computed.alias('BoardFeetSum'),

  //an actual computed property, rather than just renaming props from the imported file
  volume: Ember.computed('NominalLength','NominalWidth','NominalThickness', function(){
    return this.get('NominalLength') * 12 * this.get('NominalWidth') * this.get('NominalThickness');
  })
//len, 12, width, thickness
});
