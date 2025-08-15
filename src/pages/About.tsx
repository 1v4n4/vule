import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  Link,
  Divider,
} from "@mui/material";

const About = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="md">
        {/* Header */}
        <Typography variant="h3" component="h1" gutterBottom>
          Evoltetra – O nama
        </Typography>
        <Typography variant="body1" paragraph>
          Specijalizovani treninzi i usluge: hipnoterapija, Eriksonova
          psihoterapija, Past Life Regression i NLP edukacija.
        </Typography>

        {/* Services List */}
        <List>
          <ListItem>
            <strong>1. Tehnike relaksacije:</strong> Redukovanje anksioznosti uz
            primjenu integrativne hipnoterapije i kognitivno-bihevioralnih
            tehnika (KBT)
          </ListItem>
          <ListItem>
            <strong>2. Trening hipnoterapije i Eriksonove psihoterapije</strong>
          </ListItem>
          <ListItem>
            <strong>3. Trening regresoterapije – Past Life Regression</strong>
          </ListItem>
          <ListItem>
            <strong>4. NLP edukacija</strong>
          </ListItem>
          <ListItem>
            <strong>5. Bioenergetski tretmani:</strong> Bioenergija i tretmani
            obnavljaju energetsku ravnotežu, mogu ublažiti bolove u leđima i
            mišićima, smanjiti stres i anksioznost, poboljšati kvalitet sna i
            dobro raspoloženje.
          </ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        {/* Contact Info */}
        <Typography variant="h4" gutterBottom>
          Vuksan Vuksanović
        </Typography>
        <Typography variant="body1" paragraph>
          Sertifikovani trener i terapeut
        </Typography>
        <Typography variant="body1" paragraph>
          📍 Podgorica <br />
          📞 <Link href="tel:+38267036870">+382 67 036 870</Link> <br />
          📧 <Link href="mailto:wuksan69@gmail.com">
            wuksan69@gmail.com
          </Link>{" "}
          <br />
          🌐{" "}
          <Link
            href="http://www.linkedin.com/in/vuksan-vuksanovic"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </Link>
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* CV Section */}
        <Typography variant="h4" gutterBottom>
          O meni
        </Typography>
        <Typography variant="body1" paragraph>
          Hipnoterapeut i bioenergetičar sa preko 20 godina kontinuiranog
          usavršavanja u oblasti psihoanalize i Eriksonove psihoterapije i
          kliničke hipnoterapije. Obrazovao se u Hrvatskoj, Francuskoj i
          Americi, trenutno završava Master studije psihoanalize u Dablinu i PhD
          studije transdisciplinarne humanistike. Pisac i učesnik na
          međunarodnim konferencijama i seminarima.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Obrazovanje
        </Typography>
        <List>
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

        <Typography variant="h5" gutterBottom>
          Učešće na konferencijama
        </Typography>
        <List>
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
          {/* Add more items as needed */}
        </List>

        <Typography variant="h5" gutterBottom>
          Sertifikati
        </Typography>
        <Typography variant="body1" paragraph>
          Hipnoterapija, Trening, Bioterapija – preko 20 certificiranih kurseva
          i licenci iz integrativne hipnoterapije, Past Life Regression, NLP,
          Bioenergetskih tretmana i Eriksonove psihoterapije.
        </Typography>
      </Container>
    </Box>
  );
};
export default About;
