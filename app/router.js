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
    this.route('philosophy');
  });
  this.route('books', function() {
    this.route('must-read', {path: '/'});
    this.route('fiction');
    this.route('non-fiction');
  });
  this.route('movies', function() {
    this.route('favorite', {path: '/'});
    this.route('guilty');
    this.route('tv');
  });
  this.route('photos');
  this.route('people', function() {
    this.route('people-you-should-know', {path: '/'});
    this.route('interesting');
  });
  this.route('moments', function() {
    this.route('world-change');
  });
  this.route('ideas', function() {
    this.route('strategy');
    this.route('science');
    this.route('political');
    this.route('historical', {path: '/'});
  });
});

export default Router;
