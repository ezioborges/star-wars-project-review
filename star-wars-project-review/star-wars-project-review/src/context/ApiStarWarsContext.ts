import { createContext } from "react";
import { PlanetType } from "../types";

type ApiStarWarsContextType = {
  planets: PlanetType[];
  isLoad: boolean;
};

const ApiStarWarsContext = createContext({} as ApiStarWarsContextType);

export default ApiStarWarsContext;
