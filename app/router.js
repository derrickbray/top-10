import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('podcast', function() {
    this.route('top-ten', {path: '/'});
    this.route('history');
    this.route('science');
  });
  this.route('books', function() {
    this.route('must-read');
    this.route('fiction');
    this.route('non-fiction');
  });
  this.route('movies');
  this.route('photos');
  this.route('people');
  this.route('moments');
  this.route('eotw');
});

export default Router;
