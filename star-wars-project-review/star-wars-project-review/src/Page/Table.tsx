import { useContext, useEffect, useState } from "react";
import ApiStarWarsContext from "../context/ApiStarWarsContext";
import { PlanetType } from "../types";

import '../styles/table.css';

function Table() {
  const { planets, isLoad } = useContext(ApiStarWarsContext);

  const [planetsTable, setPlanetsTable] = useState<PlanetType[]>([]);

  useEffect(() => {
    if (planets.length > 0) {
      setPlanetsTable(planets);
    }
  }, [planets]);

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
    <div className="container-fluid p-0">
      {!isLoad && planetsTable.length > 0 && (
        <table className="table table-bordered equal-column-width">
          <thead>
            <tr>
              {Object.keys(planetsTable[0]).map((planetKeys, i) => (
                <th key={i}>{planetFieldNames[planetKeys] || planetKeys}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planetsTable.map((planet) => (
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
                <td>
                  {planet.films}
                </td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
