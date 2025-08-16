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
        justifyContent: "center",
        py: 6,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          bgcolor: "rgba(91, 90, 88, 0.1)", // softer box background
          p: { xs: 3, md: 5 },
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        {/* HEADLINE */}
        <Typography variant="h3" sx={{ lineHeight: 1.3, mb: 3 }}>
          Specijalizovani treninzi i usluge
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontStyle: "italic", color: "text.secondary", mb: 4 }}
        >
          Hipnoterapija • Eriksonova psihoterapija • Regresoterapija • NLP
          edukacija
        </Typography>

        {/* Services List */}
        <Box>
          {[
            {
              title: "Tehnike relaksacije",
              desc: "Redukovanje anksioznosti uz primjenu integrativne hipnoterapije i kognitivno-bihevioralnih tehnika (KBT).",
            },
            {
              title: "Trening hipnoterapije i Eriksonove psihoterapije",
              desc: "Razvijanje veština i tehnika za profesionalnu primenu u radu sa klijentima.",
            },
            {
              title: "Trening regresoterapije – Past Life Regression",
              desc: "Naučite kako da vodite klijente kroz sigurno i transformativno iskustvo regresije.",
            },
            {
              title: "NLP edukacija",
              desc: "Praktične metode za unapređenje komunikacije, motivacije i ličnog razvoja.",
            },
            {
              title: "Bioenergetski tretmani",
              desc: "Bioenergija i s njom povezani tretmani obnavljaju energetsku ravnotežu, mogu ublažiti bolove u leđima i mišićima, smanjiti stres i anksioznost, poboljšati kvalitet sna i dobro raspoloženje.",
            },
          ].map((service, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{ color: "text.primary", fontWeight: 600, mb: 1 }}
              >
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.primary" }}>
                {service.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
