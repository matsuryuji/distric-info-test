import { FormControl, MenuItem, InputLabel } from "@mui/material";
import  MuiSelect  from "@mui/material/Select";

const Select = ({ title, value, handleChange, menuItens, menuItem }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{title}</InputLabel>
      <MuiSelect value={value} label={title} onChange={handleChange}>
        {menuItens.map(() => (
          <MenuItem key={menuItem} value={menuItem}>
            {menuItem}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
