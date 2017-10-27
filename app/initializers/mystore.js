export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  application.inject('route', 'mystore', 'service:mystore');
}

export default {
  name: 'mystore',
  initialize
};
