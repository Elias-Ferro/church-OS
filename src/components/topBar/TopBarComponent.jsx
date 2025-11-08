import { Paper, Typography } from "@mui/material";
import React from "react";

const TopBarComponent = ({ titlePage }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        height: "80px",
        width: "100%",
        padding: "15px",
      }}
    >
      <Typography variant="h6" fontWeight={400} textTransform={"uppercase"}>
        {titlePage}
      </Typography>
    </Paper>
  );
};

export default TopBarComponent;
