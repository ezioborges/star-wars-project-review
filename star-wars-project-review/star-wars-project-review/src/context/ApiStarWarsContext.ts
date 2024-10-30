import { createContext } from "react";

type ApiStarWarsContextType = {
  planets: object[];
  isLoad: boolean;
};

const ApiStarWarsContext = createContext({} as ApiStarWarsContextType);

export default ApiStarWarsContext;
