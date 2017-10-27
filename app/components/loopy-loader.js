import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    loadData() {
      // let newStart = moment(new Date(this.get('start_date'))).format('MM-DD-YYYY ') + this.get('start_time');
      // let newEnd = moment(new Date(this.get('start_date'))).format('MM-DD-YYYY ') + this.get('end_time');

      let newStart = moment(new Date(this.get('start_date'))).format('DD-MM-YYYY ') + this.get('start_time');
      let newEnd = moment(new Date(this.get('start_date'))).format('DD-MM-YYYY ') + this.get('end_time');

      // let newStart = moment(new Date(this.get('start_date'))).format('DD-MM-YYYY ') + new Date(this.get('start_time').format('HH:mm'));
      // let newEnd =   moment(new Date(this.get('start_date'))).format('DD-MM-YYYY ') + new Date(this.get('end_time').format('HH:mm'));

      // let newStart = moment(new Date(this.get('start_date')).format('DD-MM-YYYY ') + new Date(this.get('start_time').format('HH:mm')));
      // let newEnd =   moment(new Date(this.get('start_date')).format('DD-MM-YYYY ') + new Date(this.get('end_time').format('HH:mm')));

      console.log("new hh:mm format time is :: %s", this.get('end_time') );

      let url = `/${newStart}/to/${newEnd}`;
      // this.transitionTo(url);
      // this.sendAction("action", url)
      this.get('load')(url);
    }
  }
});
