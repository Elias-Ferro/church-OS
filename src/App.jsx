import { Box, Divider, Paper } from "@mui/material";
import SidebarComponent from "./components/sidebar/SidebarComponent.jsx";
import TopBarComponent from "./components/topBar/TopBarComponent.jsx";
import { useState } from "react";
import ChurchesContent from "./contents/ChurchesContent.jsx";

function App() {
  const [selectedContent, setSelectedContent] = useState("dashboard");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          width: "100vw",
          height: "100vh",
          padding: "10px",
          "&.MuiContainer-root": {
            paddingLeft: "10px !important",
            paddingRight: "10px !important",
            margin: "0 !important",
          },
          gap: "10px",
        }}
      >
        <SidebarComponent
          selectedContent={selectedContent}
          onSelect={setSelectedContent}
        />
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <TopBarComponent titlePage={selectedContent} />
          <Divider />

          <Box
            sx={{
              display: "flex",
              height: "100%",
              padding: "10px",
              "&.MuiContainer-root": {
                paddingLeft: "10px !important",
                paddingRight: "10px !important",
                margin: "0 !important",
              },
            }}
          >
            {selectedContent === "dashboard" && <div>Dashboard Content</div>}
            {selectedContent === "igrejas" && <ChurchesContent />}
            {selectedContent === "financeiro" && <div>Financeiro Content</div>}
            {selectedContent === "agenda" && <div>Agenda Content</div>}
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default App;
