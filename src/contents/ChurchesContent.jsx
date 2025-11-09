import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import {} from "react";
import CardButton from "../components/CardButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ChurchesContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" color="grey">
          Gerenciamento de campos e igrejas convencionadas
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddCircleIcon />}
          onClick={() => {
            console.log("Adicionar Igreja");
          }}
        >
          Igreja
        </Button>
      </Box>

      <Container
        sx={{
          display: "flex",
          width: "100%",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <CardButton
          title="Igreja Evangelica Balsamo de Gileade"
          description="Estrada do Buritisal"
        />
      </Container>
    </Box>
  );
};

export default ChurchesContent;
