exports.decode = (data) => {
  const result = new Array(data[0].length)
  for (let x = data[2].length; x--;) {
    const item = {}
    for (let y = data[2][x].length; y--;) {
      item[data[0][y]] = data[1][y][data[2][x][y]]
    }
    result[x] = item
  }
  return result
}

exports.encode = (data) => {
  const keys = []
  const values = []
  const model = []
  for (let x = data.length; x--;) {
    let i = 0
    for (let key in data[x]) {
      const keyIndex = keys.indexOf(key)
      if (keyIndex === -1) {
        keys[keys.length] = key
        values[values.length] = [data[x][key]]
        model[model.length] = [i++]
      } else {
        values[keyIndex][values[keyIndex].length] = data[x][key]
      }
    }
  }
  return [keys, values, model]
}

// let i = 0

// console.log(
//   // keyIndex,
//   // data[x][key],
//   values[keyIndex],
//   values[keyIndex] && values[keyIndex][values[keyIndex].length - 1]
//   // values[keyIndex] && values[keyIndex].indexOf(data[x][key])
// )

// if (values[keyIndex] === void 0) {
//   values[keyIndex] = 'hi'
// }
// if (values[i] === void 0) {
//   values[i] = [data[key]]
// } else if (values[i].indexOf(data[key]) === -1) {
//   values[i][values[i].length] = data[key]
// }
// i++

exports.decode2 = (data) => {
  const { keys, values, model } = data
  const result = new Array(keys.length)
  for (let x = model.length; x--;) {
    const item = {}
    for (let y = model[x].length; y--;) {
      item[keys[y]] = values[y][model[x][y]]
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

// exports.keys = (data) => data[0]
//
// exports.values = (key, data) => data[1][data[0].indexOf(key)]
//
// exports.get = (key, item, data) => {
//   const i = data[0].indexOf(key)
//   return data[1][i][item[i]]
// }
