var _contains = require('./internal/_contains');
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if the specified value is equal, in `R.equals` terms,
 * to at least one element of the given list; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains([42], [[42]]); //=> true
 */
module.exports = _curry2(_contains);
