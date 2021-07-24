module.exports = function solveSudoku(matrix) {
  let flag = true;
  let possibles = {};
  let iterations = 0;
  // going through whole matrix 
  while (flag) {
    flag = false;

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j ++) {
        
        //missing numbers are left
        if (matrix[i][j] == 0) {
          flag = true;

          possibles[`${i}-${j}`] = [];
          //check all possibilities
          for (let pos = 1; pos <= 9; pos++) {
            let abort = false;
            //check row
            for (let jj = 0; jj < 9; jj++) {
              if (matrix[i][jj] == pos) {
                abort = true;
                break;
              } 
            }
            //check column  
            for (let ii = 0; ii < 9; ii++) {
              if (matrix[ii][j] == pos) {
                abort = true;
                break;
              }
            }
            /*//check square  
            for (let ii = (i % 3) * 3, step1 = 0; step1 < 3 && !abort; step1++, ii++) {
              for (let jj = (j % 3) * 3, step2 = 0; step2 < 3 && !abort; step2++, ii++) {
                if (matrix[ii][jj] == pos) {
                  abort = true;
                  break;
                }
              }
            }*/
            if (!abort)
              possibles[`${i}-${j}`].push(pos);
          }
          if (possibles[`${i}-${j}`].length == 1) 
            matrix[i][j] = possibles[`${i}-${j}`][0];
        }
      }
    }

    iterations++;
    if (iterations > 1000) 
      break;

  }

  
  return matrix;
}
