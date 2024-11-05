import { useContext } from "react";
import ApiStarWarsContext from "../context/ApiStarWarsContext";

function SearchByPlanetName() {
    const { planetName, updatePlanetsName } = useContext(ApiStarWarsContext);

    const handleInputChange = (value: string) => {
        updatePlanetsName(value);
    } 
  return (
    <>
      <input
        type="text"
        name="planetName"
        value={planetName}
        onChange={({ target }) => handleInputChange(target.value)}
      />
    </>
  );
}

export default SearchByPlanetName;
