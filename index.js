exports.decode = (data) => {
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

// const merge = (a, b) => {
//   const result = []
//   const length = a.length > b.length ? a.length : b.length
//   for (let x = length; x--;) {
//     result[i] =
//   }
// }

exports.encode = (data) => {
  // const result = new Array(3)
  // const result = [[], [], []]
  // const keys = []
  // const values = []
  // const model = []
  for (let x = data.length; x--;) {
    console.log(
      Object.keys(data[x])
    )
    // for (let y in data[x]) {
    //   result[0] = y
    // }
  }
}

// exports.keys = (data) => data[0]

// exports.values = (key, data) => data[1][data[0].indexOf(key)]
