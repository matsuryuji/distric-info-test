import MuiButton from "@mui/material/Button";
import React from "react";

const Button = ({
  children,
  onClick,
  sx,
  variant,
  component,
  type,
  fullWidth,
}) => {
  return (
    <MuiButton
      sx={sx}
      onClick={onClick}
      variant={variant}
      component={component}
      type={type}
      fullWidth={fullWidth}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
