import SearchByPlanetName from "../components/SearchByPlanetName";
import Table from "../components/Table";

function Body() {
    return (
        <div className="container-fluid p-0">
            <SearchByPlanetName />
            <Table />
        </div>
    );
 }

export default Body;
