/**
  @module ember-data
*/

/**
  All Ember Data methods and functions are defined inside of this namespace.

  @class DS
  @static
*/

if ('undefined' === typeof DS) {
  DS = Ember.Namespace.create({
    VERSION: '1.0.0-beta.1'
  });

  if ('undefined' !== typeof window) {
    window.DS = DS;
  }
}