/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(a = []) {
  var counter =0;
  for (k=0;k< a.length; k++){
      if (a[a[a[k]-1]-1]== k+1){
          counter++;
      }
  }
  return (parseInt(counter/3));
};
