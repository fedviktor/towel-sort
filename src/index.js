
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let towelSort=[];
if (!matrix) {
    return []
  }
    for (let i = 1; i < matrix.length; i+=2) {
         matrix[i]=matrix[i].reverse()
    }
         let sort=matrix.flat()
 return sort
     }


