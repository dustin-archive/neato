module.exports = function decode(data) {
  var keys = data[0]
  var values = data[1]
  var model = data[2]
  var length = model.length
  var items = new Array(length)
  for (var i = 0; i < length; i++) {
    var item = items[i] = {}
    for (var k = 0; k < keys.length; k++) {
      var v = model[i][k]
      var key = keys[k]
      var value = values[k][v]
      item[key] = value
    }
  }
  return items
}
