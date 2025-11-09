import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const CardButton = ({ title, description }) => {
  return (
    <Card sx={{width: "250px"}}>
      <CardActionArea>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: "15px"}}>
          <Typography variant="h5" component="div" fontSize={20}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardButton;
