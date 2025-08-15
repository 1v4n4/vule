import { Box, Container, Typography, Link, Button } from "@mui/material";
import seaBook from "../assets/yuriy-kovalev.jpg"; // rename your file and place in src/assets

const Home = () => {
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
        <Typography variant="h5" gutterBottom>
          Hipnoterapeut • Bioenergetičar • Trener ličnog razvoja
        </Typography>
        <Typography variant="h6">
          Sa više od 20 godina iskustva i međunarodnim obrazovanjem iz
          hipnoterapije, psihoanalize i bioenergetskih tretmana, Vuksan pomaže
          ljudima da prevaziđu anksioznost, stres i emotivne blokade.
        </Typography>
        <Typography variant="h6">
          Specijalizovan za integrativnu hipnoterapiju, Eriksonovu
          psihoterapiju, Past Life Regression, NLP edukaciju i bioenergetske
          tretmane, pruža i individualne seanse i stručne treninge.
        </Typography>
        <Typography variant="body1">
          📍 Podgorica <br />
          📞{" "}
          <Link href="tel:+38267036870" color="inherit">
            +382 67 036 870
          </Link>{" "}
          <br />
          📧{" "}
          <Link href="mailto:wuksan69@gmail.com" color="inherit">
            wuksan.wuksanovic@gmail.com
          </Link>
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Zakažite besplatnu konsultaciju
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
