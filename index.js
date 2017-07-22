const data = (data) => {
  const result = new Array(data[0].length)
  for (let x = data[0].length; x--;) {
    const item = {}
    for (let y = data[2][x].length; y--;) {
      item[data[0][y]] = data[1][y][data[2][x][y]]
    }
    result[x] = item
  }
  return result
}

module.exports = data
