import { Button, Select } from "components/core";
import "./style.scss";

const SelectFilter = (props) => {
  return (
    <div className="select-filter__wrapper">
      <div className="select-filter__itens">
        <Select title="Bairro" menuItens={props.geoLocationData} />
        <Button>Aplicar</Button>
      </div>
    </div>
  );
};

export default SelectFilter;
