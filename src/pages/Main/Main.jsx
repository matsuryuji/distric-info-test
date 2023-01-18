import { getAllDistrictGeoLocation } from "api/api";
import Header from "components/Header";
import PolygonMap from "components/PolygonMap";
import SelectFilter from "components/SelectFilter";
import { useEffect, useState } from "react";
import "./style.scss";

const Main = () => {
  const [geoLocationData, setGeoLocationData] = useState([]);
  useEffect(() => {
    getAllDistrictGeoLocation().then((response) => {
      setGeoLocationData(response);
    });
  }, []);
  return (
    <div className="main__wrapper">
      <Header title="Evolução Populacional" />
      <div className="main__map-filter">
        <SelectFilter geoLocationData={geoLocationData} />
        <PolygonMap />
      </div>
    </div>
  );
};

export default Main;
