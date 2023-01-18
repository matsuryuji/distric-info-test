import { Button, Select } from "components/core";

const SelectFilter = () => {
  return (
    <div>
      <span>Filtrar Por</span>
      <Select title="Bairro" />
      <Button>Aplicar</Button>
    </div>
  );
};

export default SelectFilter;
