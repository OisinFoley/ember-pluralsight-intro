import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'table',
  classNames: ['table'],

  boards: Ember.computed.mapBy('model', 'boards'), //shorthand for the above "model.:each.boards"
  total_boards: Ember.computed.sum('boards'),    //references the above computed prop which is just watching all the individual values for changes
  max_boards: Ember.computed.max('boards'),

  boardfeets: Ember.computed.mapBy('model', 'boardfeet'),
  total_boardfeet: Ember.computed.sum('boardfeets'),
  max_boardfeet: Ember.computed.max('boardfeets')
});
