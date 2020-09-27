export const closeSquares = (updateItems) => {
  updateItems((prevData) => prevData.map((item) => ({ ...item, show: false })));
};
