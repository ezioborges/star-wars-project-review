import { createContext } from "react";
import { PlanetType } from "../types";

type ApiStarWarsContextType = {
  planets: PlanetType[];
  isLoad: boolean;
  planetName: string;
  updatePlanetsName: (name: string) => void;
  findPlanetByName: (planetName: string) => void;
};

const ApiStarWarsContext = createContext({} as ApiStarWarsContextType);

export default ApiStarWarsContext;
