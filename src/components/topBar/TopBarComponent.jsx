import React from "react";
import { Container, IconButton, Paper, Typography } from "@mui/material";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";

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
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "&.MuiContainer-root": {
            paddingLeft: "0px !important",
            paddingRight: "0px !important",
            margin: "0 !important",
          },
        }}
      >
        <Container width="100%">
          <Typography variant="h6" fontWeight={400} textTransform={"uppercase"}>
            {titlePage}
          </Typography>
        </Container>

        <Container
          sx={{ display: "flex", justifyContent: "flex-end", width: "200px" }}
        >
          <IconButton color="primary">
            <SettingsApplicationsIcon />
          </IconButton>
        </Container>
      </Container>
    </Paper>
  );
};

export default TopBarComponent;
