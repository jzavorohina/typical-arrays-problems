
exports.min = function min (array) {
  if (!array || array.length == 0) return 0;
  return array.reduce( (prev, current) => Math.min(prev, current) );
}

exports.max = function max (array) {
  if (!array || array.length == 0) return 0;
  return array.reduce( (prev, current) => Math.max(prev, current) );
}

exports.avg = function avg (array) {
  if (!array || array.length == 0) return 0;
  return array.reduce( (sum, i) => sum + i ) / array.length;
}
