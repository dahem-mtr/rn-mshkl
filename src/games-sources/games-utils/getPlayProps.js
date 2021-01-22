
import { getGameProps as ss } from "../games/firstGame/utils/getGameProps";

export const getPlayProps = (gameId, level) => {



  switch (gameId) {
    case 1:
      return ss(level)

    default:
      return ss(2);

  }
}