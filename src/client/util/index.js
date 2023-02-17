const getMatrix = function getMatrix(n) {
  let matrix = []
  if (n > 10) {
    // above
    matrix.push(n - 10)
    if (n % 10 !== 0) {
      // left above
      matrix.push(n - 11)
    }
  }
  if (n % 10 !== 0) {
    // left
    matrix.push(n - 1)
  }
  if ((n + 1) % 10 !== 0) {
    // right
    matrix.push(n + 1)
    if (n > 10) {
      // right above
      matrix.push(n - 9)
    }
  }
  if (n < 89) {
    //  below
    matrix.push(n + 10)
    if (n % 10 !== 0) {
      // left below
      matrix.push(n + 9)
    }
    if ((n + 1) % 10 !== 0) {
      // right below
      matrix.push(n + 11)
    }
  }
  return matrix
}

const buildBoard = function buildBoard() {
  const bombs = 10
  let bombLocs = []
  const board = Array.from({ length: 100 }, (_, ) => 0)

  while (bombLocs.length < bombs) {
    let randIndex = Math.floor(100 * Math.random())
    if (!bombLocs.includes(randIndex)) {
      bombLocs.push(randIndex)
      board[randIndex] = 'b'
    }
  }
  
  for (let i = 0, len = board.length; i < len; i++) {
    if (board[i] !== 'b') {
      let matrix = getMatrix(i)
      for (const k of matrix) {
        if (board[k] === 'b') {
          
          board[i]++
        }
      }
    }
  }
  return board
}

export default buildBoard

// for (let i = 90, len = 100; i < len; i++) {
//   console.log(i, getMatrix(i))

// }
// console.log(buildBoard())