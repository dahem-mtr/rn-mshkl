export const createIndexes = (countSquares) => {
  var indexes = [];

  for (var i = 0; i < countSquares; i++) {
    // var m = getImage();

    indexes = [...indexes, i];
  }
  return indexes
}