import { Button, Select } from "components/core";
import "./style.scss";

const SelectFilter = (props) => {
  const handleClick = () => {
    props.handleFindPolygonMap(props.districtId);
    props.handleShowDistrictPopulation(props.districtId);
  };

  return (
    <div className="select-filter__wrapper">
      <span className="select-filter__title">Escolha um Bairro</span>
      <div className="select-filter__itens">
        <Select
          title="Bairro"
          menuItens={props.geoLocationData}
          handleChange={props.handleChangeDistrict}
          value={props.districtId}
        />
        <Button variant="contained" onClick={() => handleClick()}>
          Aplicar
        </Button>
      </div>
    </div>
  );
};

export default SelectFilter;
