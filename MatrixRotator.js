const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor(matrix) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate(direction) {
    const tempMat = []
    let count = 0;
    let CCWcount = this.matrix.length - 1;

    //pushes empty arrays to have same number of rows
    for (let i = 0; i < this.matrix.length; i++) {
      tempMat.push([]);
    }

    if (direction === 'ClockWise') {
      while (count < this.matrix.length) {
        for (let j = this.matrix.length - 1; j >= 0; j--) {
          tempMat[count].push(this.matrix[j][count]);
        }
        count++;
      }
      this.matrix = tempMat;

    } else if (direction === 'CounterClockWise') {
      while (count < this.matrix.length) {
        for (let j = 0; j < this.matrix.length; j++) {
          tempMat[CCWcount].push(this.matrix[j][count]);
        }
        count++;
        CCWcount--;
      }
      this.matrix = tempMat;
    }
  }
};
