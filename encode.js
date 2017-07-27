module.exports = function encode (items) {
  var length = items.length
  var keys = []
  var values = []
  var model = new Array(length)
  for (var i = 0; i < length; i++) {
    model[i] = []
    for (var key in items[i]) {
      var value = items[i][key]
      var k = keys.indexOf(key)
      if (k === -1) {
        k = keys.length
        keys[k] = key
        values[k] = [value]
        model[i][k] = 0
      } else {
        var v = values[k].indexOf(value)
        if (v === -1) {
          v = values[k].length
          values[k][v] = value
        }
        model[i][k] = v
      }
    }
  }
  return [keys, values, model]
}
