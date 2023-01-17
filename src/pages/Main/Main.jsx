import Header from "components/Header";
import PolygonMap from "components/PolygonMap";
import SelectFilter from "components/SelectFilter";

const Main = () => {
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
