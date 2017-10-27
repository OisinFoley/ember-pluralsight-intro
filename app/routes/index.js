import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  beforeModel(){
    // this.transitionTo('production', "yesterday", "today");
    this.transitionTo('production',
	    	moment(new Date()).format('MM-DD-YYYY') + ' 05:00',
	    	moment(new Date()).format('MM-DD-YYYY') + ' 15:00'

        // moment(new Date()).format('MM-DD-YYYY') + new Date().format('HH:mm'),
        // moment(new Date()).format('MM-DD-YYYY') + new Date().format('HH:mm')

      // moment(new Date()).format('MM-DD-YYYY'),
      // moment(new Date()).format('MM-DD-YYYY')
    	);

    //do i need to feed in params like tutor does, but then split the value and reference and
    //assign start_date as :start[0] and then start_time as :start[1]..?
  }
});
