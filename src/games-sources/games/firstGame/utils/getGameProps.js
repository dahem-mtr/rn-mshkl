export const getGameProps = (level) => {
  var isBetween = level >= 0 && level <= 101 ? true : false;
  if (isBetween) {
    
    if (level >= 0 && level <= 1)
      return {
        countSquares: 2,
        countImages: 2,
        numberRequired: 1,
      };

    if (level >= 1 && level <= 2)
      return {
        countSquares: 3,
        countImages: 3,
        numberRequired: 2,
      };
    
    if (level >= 2 && level <= 3)
      return {
        countSquares: 4,
        countImages: 4,
        numberRequired: 3,
      };
    
    else 
      return {
        countSquares: 1,
        countImages: 1,
        numberRequired: 1,
      };
    
  } else {
    return "error number is not bettwen 1 to 100"
  }
};
