import { Box, Container, Typography, Link } from "@mui/material";
import logo from "../assets/logo.svg";
import Consult from "../components/Consult";

export default function Home() {
  return (
    <Box sx={{ bgcolor: "#e0e0e0", minHeight: "100vh", pb: 6 }}>
      {/* TOP LOGO */}
      <Container maxWidth="sm" sx={{ py: 2, textAlign: "center" }}>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: { xs: "40%", sm: 150, md: 200 },
            height: "auto",
            mx: "auto",
          }}
        />
      </Container>

      {/* SERVICES / ABOUT BOX */}
      <Container
        maxWidth="md"
        sx={{
          bgcolor: "rgba(91, 90, 88, 0.1)",
          p: { xs: 3, md: 5 },
          borderRadius: 2,
          mx: "auto",
        }}
      >
        {/* HEADLINE */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            lineHeight: 1.2,
            mb: 4,
            fontSize: {
              xs: "1.6rem", // small screens
              sm: "2rem",
              md: "2.5rem", // medium
              lg: "3rem", // large screens
            },
          }}
        >
          INTEGRATIVNA HIPNOTERAPIJA I
          <br />
          PSIHOANALITIČKO SAVJETOVANJE
        </Typography>

        {/* SERVICES */}
        <Box mb={4}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ color: "text.primary", textAlign: "center" }}
          >
            Specijalizovani treninzi i usluge
          </Typography>

          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              fontStyle: "italic",
              color: "text.secondary",
              textAlign: "center",
            }}
          >
            Hipnoterapija • Eriksonova psihoterapija • Regresoterapija • NLP
            edukacija
          </Typography>

          <Box mt={3}>
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
            ].map((service, i) => (
              <Box key={i} mb={2}>
                <Typography
                  variant="h6"
                  sx={{ color: "text.primary", fontWeight: 600 }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.primary" }}>
                  {service.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ABOUT */}
        <Box>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Vuksan Vuksanović
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              fontStyle: "italic",
              color: "text.secondary",
              textAlign: "center",
            }}
          >
            Hipnoterapeut • Bioenergetičar • Trener
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "center" }}>
            Specijalizovan za integrativnu hipnoterapiju, Eriksonovu
            psihoterapiju, Past Life Regression, NLP edukaciju i bioenergetske
            tretmane, pruža i individualne seanse i stručne treninge.
          </Typography>
        </Box>
      </Container>

      {/* CONTACT */}
      <Container maxWidth="sm" sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="body1" paragraph>
          📍 Podgorica <br />
          📞{" "}
          <Link href="tel:+38267036870" color="inherit">
            +382 67 036 870
          </Link>
          <br />
          📧{" "}
          <Link href="mailto:wuksan.wuksanovic@gmail.com" color="inherit">
            wuksan.wuksanovic@gmail.com
          </Link>
        </Typography>
        <Consult />
      </Container>
    </Box>
  );
}
