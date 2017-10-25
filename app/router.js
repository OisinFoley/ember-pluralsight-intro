import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('production', {path: '/:start/to/:end/'}, function() {
    this.route('dimension', {path: '/dimension/:dimension_id'});
    // ^ allows us to retrieve content dynamically, instead of having a static route like below


  });
});

export default Router;





/*Some Notes*/

//1)
//Nested static routes, the cli would generate like this for us
// this.route('production',  function() {
//   this.route('dimension');

//2)
// this.route('dimension', {path: '/dimension/'});
//you were trying to link-to the dimension route earlier, without providing a parameter.
//to have done that successfully, you just needed to use the above dynamic route handler,
//which has been commented out
