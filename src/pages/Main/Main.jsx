import { getAllDistrictGeoLocation, getDistrictGeoLocation } from "api/api";
import Header from "components/Header";
import PolygonMap from "components/PolygonMap";
import SelectFilter from "components/SelectFilter";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import "./style.scss";

const Main = () => {
  const [geoLocationData, setGeoLocationData] = useState([]);
  const [districtId, setDistrictId] = useState("");
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
        />
        <PolygonMap districtLocation={districtLocation} />
      </div>
    </div>
  );
};

export default Main;
