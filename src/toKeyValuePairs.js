var _curry1 = require('./internal/_curry1');
var _has = require('./internal/_has');


/**
 * @return {Array} An array of key, value pair from the object's own properties.
 * @example
 *
 *      R.toKeyValuePairs({a: 1, b: 2, c: 3}); //=> [{key: 'a', value: 1}, {key: 'b', value: 2}, {key: 'c', value: 3}]
 */
module.exports = _curry1(function toKeyValuePairs(obj) {
  var kvPairs = [];
  for (var prop in obj) {
    if (_has(prop, obj)) {
      kvPairs[kvPairs.length] = {key: prop, value: obj[prop]};
    }
  }
  return kvPairs;
});
