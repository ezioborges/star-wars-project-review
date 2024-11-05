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
  const [isLoad, setIsLoad] = useState(true);
  const [planetName, setPlanetName] = useState<string>("");

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

  const updatePlanetsName = (name: string) => setPlanetName(name);

  const findPlanetByName = (planetName: string) => {
    setPlanetName(planetName)
  };

  return (
    <ApiStarWarsContext.Provider
      value={{
        planets,
        isLoad,
        planetName,
        updatePlanetsName,
        findPlanetByName,
      }}
    >
      {children}
    </ApiStarWarsContext.Provider>
  );
}
