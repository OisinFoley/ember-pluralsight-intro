import Ember from 'ember';

export default Ember.Controller.extend({
  // total_boards: Ember.computed('model.@each.boards', function(){
  //   return this.get('model').reduce(function(prev,  row){
  //     return prev+ parseFloat(row.get('boards'));
  //   }, 0);
  // })
  //again, let's use a macro instead

  boards: Ember.computed.mapBy('model', 'boards'), //shorthand for the above "model.:each.boards"
  total_boards: Ember.computed.sum('boards'),    //references the above computed prop which is just watching all the individual values for changes
  max_boards: Ember.computed.max('boards'),

  boardfeets: Ember.computed.mapBy('model', 'boardfeet'),
  total_boardfeet: Ember.computed.sum('boardfeets'),
  max_boardfeet: Ember.computed.max('boardfeets')

});
