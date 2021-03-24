import props from "./props";

export const getGameProps = (level) => {
  var isBetween = level >= 0 && level <= 101 ? true : false;
  for (var i = 0; i < props.length; i++) {
    if (level < props[i].level) {
      return props[i];
    } else {
      return props[0];
    }
  }
};
