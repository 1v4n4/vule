import { Box, Container, Typography } from "@mui/material";
import seaBook from "../assets/yuriy-kovalev.jpg";

const About = () => {
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
        <Typography variant="h2" component="h2" gutterBottom>
          Specijalizovani treninzi i usluge
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ fontStyle: "italic" }}>
          Hipnoterapija • Eriksonova psihoterapija • Regresoterapija • NLP
          edukacija
        </Typography>

        {/* Services List */}
        {/* Services List */}
        <Box sx={{ mt: 3 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h5" component="span">
              Tehnike relaksacije
            </Typography>
            <Typography variant="body1">
              Redukovanje anksioznosti uz primjenu integrativne hipnoterapije i
              kognitivno-bihevioralnih tehnika (KBT).
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="h5" component="span">
              Trening hipnoterapije i Eriksonove psihoterapije
            </Typography>
            <Typography variant="body1">
              Razvijanje veština i tehnika za profesionalnu primenu u radu sa
              klijentima.
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="h5" component="span">
              Trening regresoterapije – Past Life Regression
            </Typography>
            <Typography variant="body1">
              Naučite kako da vodite klijente kroz sigurno i transformativno
              iskustvo regresije.
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="h5" component="span">
              NLP edukacija
            </Typography>
            <Typography variant="body1">
              Praktične metode za unapređenje komunikacije, motivacije i ličnog
              razvoja.
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="h5" component="span">
              Bioenergetski tretmani
            </Typography>
            <Typography variant="body1">
              Bioenergija i s njom povezani tretmani obnavljaju energetsku
              ravnotežu, mogu ublažiti bolove u leđima i mišićima, smanjiti
              stres i anksioznost, poboljšati kvalitet sna i dobro raspoloženje.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
