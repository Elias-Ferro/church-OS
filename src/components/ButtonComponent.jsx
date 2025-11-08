import React from "react";
import { Button } from "@mui/material";

const ButtonComponent = ({ label, variant, icon }) => {
  return (
    <Button
      variant={variant}
      startIcon={icon}
      fullWidth
      sx={{
        textTransform: "none !important",
        "&.MuiButtonBase-root": {
          justifyContent: "flex-start",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
