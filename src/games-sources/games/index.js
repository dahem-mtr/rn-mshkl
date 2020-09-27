import gameImage from "../../games-sources/games-assets/games-images/first-game.jpg";
import React, { useEffect, useState, useContext } from "react";

import  FirstGame  from "./firstGame";

export const games = [
  {
    id: 1,
    data: {
      image: gameImage,
      backgroundColor: "#7366ff",
      title: {
        ar: "حفظ الصور",
        en: "save"
      },
    },
    type: "save",
    component: <FirstGame/>,
  },
];
