

const setResultToItemPressed = (updateItems, itemPressed, result ) => {
  updateItems((prevData) =>
    prevData.map((item) =>
      item.key == itemPressed.key ? { ...item, show: true, isCorrect: result } : item
    )
  );
}

export const checkAnswer = (props) => {
  const {
    updateItems,
    itemsRequiredKeys,
    itemPressed,
    callBack,
  } = props;

  
  const FIVE_SECONDS = 300;

  setTimeout(() => {
    if (itemsRequiredKeys.includes(itemPressed.key)) {
      setResultToItemPressed(updateItems, itemPressed, "CORRECT")
      callBack(true);
     
    } else {
      setResultToItemPressed(updateItems, itemPressed, "NO_CORRECT")

      callBack(false);
      
    }
  }, FIVE_SECONDS);
};
