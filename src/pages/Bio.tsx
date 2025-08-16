import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  Link,
  Divider,
} from "@mui/material";
import seaBook from "../assets/yuriy-kovalev.jpg";

const Bio = () => {
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
          bgcolor: "rgba(91, 90, 88, 0.1)",
          p: { xs: 3, md: 5 },
          borderRadius: 2,
          color: "text.primary",
        }}
      >
        {/* HEADER */}
        <Typography variant="h3" sx={{ mb: 1, textAlign: "center" }}>
          Vuksan Vuksanović
        </Typography>
        <Typography
          variant="h5"
          sx={{ mb: 3, textAlign: "center", fontStyle: "italic" }}
        >
          Sertifikovani trener i terapeut
        </Typography>

        {/* CONTACT */}
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
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
          <br />
          🌐{" "}
          <Link
            href="http://www.linkedin.com/in/vuksan-vuksanovic"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            LinkedIn
          </Link>
        </Typography>

        <Divider sx={{ my: 4, borderColor: "text.primary" }} />

        {/* BIO */}
        <Typography variant="h4" gutterBottom>
          O meni
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Hipnoterapeut i bioenergetičar sa preko 20 godina kontinuiranog
          usavršavanja u oblasti psihoanalize i Eriksonove psihoterapije i
          kliničke hipnoterapije. Obrazovao se u Hrvatskoj, Francuskoj i
          Americi, trenutno završava Master studije psihoanalize u Dablinu i PhD
          studije transdisciplinarne humanistike. Pisac i učesnik na
          međunarodnim konferencijama i seminarima.
        </Typography>

        {/* EDUCATION */}
        <Typography variant="h5" gutterBottom>
          Obrazovanje
        </Typography>
        <List sx={{ mb: 3 }}>
          <ListItem>
            PhD kandidat | Transdisciplinarne humanistike, mediji i komunikacija
          </ListItem>
          <ListItem>
            Master psihoanalize | GCAS College Dublin | u toku
          </ListItem>
          <ListItem>
            Master filozofije | Filozofski fakultet, Univerzitet Crne Gore |
            2012
          </ListItem>
          <ListItem>
            Osnovne studije filozofije | Filozofski fakultet, Univerzitet Crne
            Gore
          </ListItem>
          <ListItem>Bibliotekarske kvalifikacije</ListItem>
        </List>

        {/* CONFERENCES */}
        <Typography variant="h5" gutterBottom>
          Učešće na konferencijama
        </Typography>
        <List sx={{ mb: 3 }}>
          <ListItem>
            Biopolitics and the Biotechnological 'Enhancement' of Humanity |
            IPhA 48th Annual Conference, 2025
          </ListItem>
          <ListItem>
            Philosophy and Fantasy | IPhA Conference, New York, 2021
          </ListItem>
          <ListItem>Women & Freud | Freud Museum London, 2024-25</ListItem>
          <ListItem>
            On the Ambivalence with our Mothers | London, 2025
          </ListItem>
        </List>

        {/* CERTIFICATES */}
        <Typography variant="h5" gutterBottom>
          Sertifikati
        </Typography>
        <Typography variant="body1">
          Hipnoterapija Trening, Bioterapija – preko 20 certificiranih kurseva i
          licenci iz integrativne hipnoterapije, Past Life Regression, NLP,
          Bioenergetskih tretmana i Eriksonove psihoterapije.
        </Typography>
      </Container>
    </Box>
  );
};

export default Bio;
