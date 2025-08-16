import { Box, Container, Typography } from "@mui/material";
import seaBook from "../assets/jessica-mangano.jpg"; // rename your file and place in src/assets

const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${seaBook})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <Container
        maxWidth="md"
        sx={{ bgcolor: "rgba(0,0,0,0.6)", p: 4, borderRadius: 2 }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Vuksan Vuksanović
        </Typography>
      </Container>
    </Box>
  );
};

export default Contact;
