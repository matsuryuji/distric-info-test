import { FormControl, MenuItem, InputLabel } from "@mui/material";
import MuiSelect from "@mui/material/Select";

const Select = ({ title, value, handleChange, menuItens }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{title}</InputLabel>
      <MuiSelect value={value} label={title} onChange={handleChange}>
        {menuItens.map((menuItem) => (
          <MenuItem key={menuItem.id} value={menuItem.id}>
            {menuItem.name}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
