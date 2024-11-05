import { useContext, useEffect, useState } from "react";
import ApiStarWarsContext from "../context/ApiStarWarsContext";
import { PlanetType } from "../types";

import "../styles/table.css";

function Table() {
  const { planets, isLoad, planetName } = useContext(ApiStarWarsContext);

  const [planetsTable, setPlanetsTable] = useState<PlanetType[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState<PlanetType[]>([]);

  // se tiver um array de planetas quando carrega a página o estado "planetsTable" recebe os planetas que vem do context.
  useEffect(() => {
    if (planets.length > 0) {
      setPlanetsTable(planets);
    }
  }, [planets]);

  //Filtra planetas com base no nome de pesquisa.
  useEffect(() => {
    if (planetName) {
      const filtered = planetsTable.filter((planet) =>
        planet.name.toLowerCase().includes(planetName.toLowerCase())
      );
      setFilteredPlanets(filtered);
    } else {
      setFilteredPlanets(planetsTable);
    }
  }, [planetName, planetsTable]);

  // Mapeia as chaves que retornam da API e modifica os nomes para ficar visualmente melhor;
  const planetFieldNames: { [key: string]: string } = {
    name: "Nome",
    rotation_period: "Período de Rotação",
    orbital_period: "Período Orbital",
    diameter: "Diâmetro",
    climate: "Clima",
    gravity: "Gravidade",
    terrain: "Terreno",
    surface_water: "Água Superficial",
    population: "População",
  };

  if (isLoad) return <h1>Carregando...</h1>;

  return (
    <>
      {!isLoad && filteredPlanets.length > 0 && (
        <table className="table table-bordered equal-column-width">
          <thead>
            <tr>
              {Object.keys(filteredPlanets[0]).map((planetKeys, i) => (
                <th key={i}>{planetFieldNames[planetKeys] || planetKeys}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredPlanets.map((planet) => (
              <tr key={planet.name}>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
