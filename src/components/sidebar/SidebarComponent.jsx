import { Button, Card, Container, Paper } from "@mui/material";
import React from "react";
import ButtonComponent from "../ButtonComponent";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LogoutIcon from "@mui/icons-material/Logout";

const SidebarComponent = ({ selectedContent, onSelect }) => {

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        gap: "8px",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "87px",
        }}
      >
        LOGO
      </Paper>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          height: "100%",
          gap: "8px",
          padding: "10px",
          "&.MuiContainer-root": {
            paddingLeft: "10px !important",
            paddingRight: "10px !important",
            margin: "0 !important",
          },
        }}
      >
        <ButtonComponent
          label="Dashboard"
          variant="contained"
          icon={<DashboardIcon />}
          onClick={() => {
            selectedContent !== "dashboard" && onSelect("dashboard");
          }}
        />
        <ButtonComponent
          label="Igrejas"
          variant="contained"
          icon={<AccountBalanceIcon />}
          onClick={() => {
            selectedContent !== "igrejas" && onSelect("igrejas");
          }}
        />
        <ButtonComponent
          label="Financeiro"
          variant="contained"
          icon={<AttachMoneyIcon />}
          onClick={() => {
            selectedContent !== "financeiro" && onSelect("financeiro");
          }}
        />
        <ButtonComponent
          label="Agenda"
          variant="contained"
          icon={<EventAvailableIcon />}
          onClick={() => {
            selectedContent !== "agenda" && onSelect("agenda");
          }}
        />
      </Container>

      <Container
        sx={{
          display: "flex",
          marginBottom: "10px",
          padding: "10px",
          "&.MuiContainer-root": {
            paddingLeft: "10px !important",
            paddingRight: "10px !important",
            margin: "0 !important",
          },
        }}
      >
        <ButtonComponent
          label="Logout"
          variant="outlined"
          icon={<LogoutIcon />}
        />
      </Container>
    </Paper>
  );
};

export default SidebarComponent;
