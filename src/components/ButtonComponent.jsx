import React from "react";
import { Button } from "@mui/material";

const ButtonComponent = ({ label, variant, icon, onClick }) => {
  return (
    <Button
      variant={variant}
      startIcon={icon}
      fullWidth
      onClick={onClick}
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
