import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'}, function() {
    this.route('west-civ', {path: '/'});
    this.route('bio');
    this.route('astro');
    this.route('phy');
  });
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
  this.route('people', function() {
    this.route('people-you-should-know', {path: '/'});
    this.route('interesting');
  });
  this.route('moments', function() {
    this.route('world-change', {path: '/'});
  });
  this.route('ideas', function() {
    this.route('historical', {path: '/'});
    this.route('strategy');
    this.route('science');
    this.route('political');
  });

});

export default Router;
