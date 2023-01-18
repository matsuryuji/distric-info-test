import axios from "axios";
import Header from "components/Header";
import PolygonMap from "components/PolygonMap";
import SelectFilter from "components/SelectFilter";
import { useEffect } from "react";

const Main = () => {
    useEffect(() => {
        axios.get("")
    }, []);
  return (
    <>
      <Header title="Evolução Populacional" />
      <div>
        <SelectFilter />
        <PolygonMap />
      </div>
    </>
  );
};

export default Main;
