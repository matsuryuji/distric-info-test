import { getAllDistrictGeoLocation, getDistrictGeoLocation, getDistrictPopulation } from "api/api";
import DistrictLineChart from "components/DistrictLineChart";
import Header from "components/Header";
import PolygonMap from "components/PolygonMap";
import SelectFilter from "components/SelectFilter";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import "./style.scss";

const Main = () => {
  const [geoLocationData, setGeoLocationData] = useState([]);
  const [districtId, setDistrictId] = useState("");
  const [districtPopulation, setDistrictPopulation] = useState("");
  const [districtLocation, setDistrictLocation] = useState([[0,0]]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAllDistrictGeoLocation().then((response) => {
      setGeoLocationData(response);
    });
  }, [count]);

  const handleChangeDistrict = (event) => {
    setDistrictId(event.target.value);
  };
  
  const handleShowDistrictPopulation = useCallback((id) => {
    getDistrictPopulation(id).then((response) => {
      setDistrictPopulation(response);
    });
    setCount(prevValue => prevValue + 1)
  }, []);


  const handleFindPolygonMap = useCallback((id) => {
    getDistrictGeoLocation(id).then((response) => {
      setDistrictLocation(response[0].geometry.coordinates);
    });
    setCount(prevValue => prevValue + 1)
  }, []);

  return (
    <div className="main__wrapper">
      <Header title="Evolução Populacional" />
      <div className="main__map-filter">
        <SelectFilter
          geoLocationData={geoLocationData}
          districtId={districtId}
          handleChangeDistrict={handleChangeDistrict}
          handleFindPolygonMap={handleFindPolygonMap}
          handleShowDistrictPopulation={handleShowDistrictPopulation}
        />
        <PolygonMap districtLocation={districtLocation} />
      </div>
      <DistrictLineChart/>
    </div>
  );
};

export default Main;
