// You should implement your task here.
module.exports = function towelSort (matrix) {
  if (matrix===undefined) {
    return []
  }
  let arr=[]
  let j=0
  for (let i=0; i<matrix.length; i++) {
    (i%2===0) ? j=0 : j=matrix[i].length-1
    if (j===0) {
    while (j<matrix[i].length) {
      arr.push(matrix[i][j])
      j++
    }
  } else {
    while (j>=0) {
      arr.push(matrix[i][j])
      j--
    }
  }
  }
  return arr
}

// console.log(towelSort([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ]))