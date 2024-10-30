import { useEffect, useState } from "react";
import ApiStarWarsContext from "./ApiStarWarsContext";
import { PlanetType } from "../types";

type ApiPlanetsProviderProps = {
  children: React.ReactNode;
};

export default function ApiPlanetsProvider({
  children,
}: ApiPlanetsProviderProps) {
  const [planets, setPlanets] = useState<PlanetType[]>([]);
  const [isLoad, setIsLoad] = useState(true)

  useEffect(() => {
    const fetchPlanets = async () => {
      const url = "https://swapi.dev/api/planets";

      const response = await fetch(url);
      const data = await response.json();
      const filteredPlanets = data.results.map((planet: PlanetType) => {
        delete planet.residents;
        return planet;
      });
      setPlanets(filteredPlanets);
      setIsLoad(false);
    };

    fetchPlanets();
  }, []);

  return (
    <ApiStarWarsContext.Provider value={{ planets, isLoad }}>
      {children}
    </ApiStarWarsContext.Provider>
  );
}
