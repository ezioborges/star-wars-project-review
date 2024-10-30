import { useContext } from "react";
import ApiStarWarsContext from "../context/ApiStarWarsContext";

function Table() {
  const { planets, isLoad } = useContext(ApiStarWarsContext);

  const filteredPlanetsKeys = planets.length > 0 ? Object.keys(planets[0]) : [];

  if (isLoad) return <h1>Carregando...</h1>;

  return (
    <div className="container-fluid">
      {!isLoad && (
        <table className="table">
          <thead>
            <tr>
              {filteredPlanetsKeys.map((plane, i) => (
                <th key={i}>{plane}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
