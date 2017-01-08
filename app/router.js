import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('podcast');
  this.route('books');
  this.route('movies');
  this.route('photos');
  this.route('people');
  this.route('moments');
  this.route('eotw');
});

export default Router;
