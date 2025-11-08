import { Container, Divider, Paper } from "@mui/material";
import SidebarComponent from "./components/sidebar/SidebarComponent.jsx";
import TopBarComponent from "./components/topBar/TopBarComponent.jsx";

function App() {
  return (
    <>
      <Container
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
        <SidebarComponent />
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <TopBarComponent titlePage={"Top Bar"} />
          <Divider />

          <Container
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
            Main Content Area
          </Container>
        </Paper>
      </Container>
    </>
  );
}

export default App;
