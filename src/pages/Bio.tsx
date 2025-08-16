import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  Link,
  Divider,
} from "@mui/material";
import pic from "../assets/yuriy-kovalev.jpg";
import Seo from "../components/Seo";

const Bio = () => {
  return (
    <>
      <Seo
        title="Vuksan Vuksanović - Bio Page"
        description="Sertifikovani hipnoterapeut i bioenergetičar sa 20+ godina iskustva. Edukacije, kursevi i individualni tretmani."
        keywords="hipnoterapija, bioenergija, psihoterapija, terapija, edukacija"
        url="https://terapija.me/bio"
      />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${pic})`,
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
            Americi, trenutno završava Master studije psihoanalize u Dablinu i
            PhD studije transdisciplinarne humanistike. Pisac i učesnik na
            međunarodnim konferencijama i seminarima.
          </Typography>

          {/* EDUCATION */}
          <Typography variant="h5" gutterBottom>
            Obrazovanje
          </Typography>
          <List sx={{ mb: 3 }}>
            <ListItem>
              Master, Filozofski fakultet, Univerzitet Crne Gore
            </ListItem>
            <ListItem>
              Master psihoanalize, Dablin, Irska (GCAS College Dublin, u toku)
            </ListItem>
            <ListItem>PhD: Transdiciplinarna humanistika, SR (u toku)</ListItem>
            <ListItem>Transakciona analiza SATA (2003/2004)</ListItem>
            <ListItem>Transakciona analiza (TA 2003–2005)</ListItem>
            <ListItem>
              Jungova analitička psihologija, Belgrade Analytical Circle
              (2005–2008)
            </ListItem>
            <ListItem>
              Certified Specialist in Hypnosis for Anxieties and Fears, American
              Hypnosis Association (Cert. No. 260787)
            </ListItem>
            <ListItem>
              Certified Specialist Past-Life Regression Therapist, American
              Hypnosis Association (Cert. No. 260786)
            </ListItem>
            <ListItem>Licensed Hypnotherapist (HUPED) 2019</ListItem>
            <ListItem>
              European Federation for Natural, Energy, and Spiritual Medicine
              (EUNES, Licence No. 1179)
            </ListItem>
            <ListItem>
              Certified Consulting Hypnotist, National Guild of Hypnotists
              (NGH), 2019
            </ListItem>
            <ListItem>
              Programi za verbalnu i neverbalnu komunikaciju, hipnoterapiju i
              NLP (Francuska, 2017), ISI-CNV International Institute for
              Neuro-Linguistic Programming (NLP), Hypnosis, Communication – Non
              Verbal (CNV), Leadership and Coaching
            </ListItem>
            <ListItem>
              Advanced Non-Verbal Hypnosis and Mesmerism, Université Européenne
              / International Institute of Hypnosis and NLP (Cert. No. 1230519)
            </ListItem>
            <ListItem>Certified Hypnotherapist, Hrvatska, 2019</ListItem>
            <ListItem>Certified Life Coach, Hrvatska</ListItem>
            <ListItem>
              Licensed Bioenergy Therapist, European Federation for Natural,
              Energy, and Spiritual Medicine (EUPED)
            </ListItem>
            <ListItem>
              Diploma in Bioenergy Therapy, International Academy of Spiritual
              Development and Innovative Technologies, Moscow (Diploma No. 3156)
            </ListItem>
            <ListItem>
              Licensed Biotherapy Practitioner, European Federation for Natural,
              Energy, and Spiritual Medicine (EUNES, Licence No. 1179)
            </ListItem>
            <ListItem>
              Master/Teacher of Gendai Reiki Ho, Asklepios Association,
              Belgrade, Serbia (2017)
            </ListItem>
            <ListItem>
              Magnetista Emeritus (MJ) & Magnetista Junior (MJ), Université
              Européenne / International Institute of Hypnosis and NLP (Cert.
              No. 1230519)
            </ListItem>
            <ListItem>Quantum Physiotherapy (Cert. No. 1230519)</ListItem>
          </List>

          {/* MEMBERSHIPS */}
          <Typography variant="h5" gutterBottom>
            Udruženja
          </Typography>
          <List sx={{ mb: 3 }}>
            <ListItem>Psychohistorical Association NY (2021)</ListItem>
            <ListItem>
              European Society for Traumatic Stress Studies (#3889)
            </ListItem>
            <ListItem>American Hypnosis Association (005435)</ListItem>
            <ListItem>National Guild of Hypnotists (2019)</ListItem>
          </List>

          {/* PUBLICATIONS */}
          <Typography variant="h5" gutterBottom>
            Publikacije
          </Typography>
          <List sx={{ mb: 3 }}>
            <ListItem>Zemlja (Nova Knjiga, 2010)</ListItem>
            <ListItem>Sjaj (CID, 2021)</ListItem>
            <ListItem>Čarobna placenta (2022)</ListItem>
          </List>

          {/* CONFERENCES */}
          <Typography variant="h5" gutterBottom>
            Učešće na konferencijama i seminarima
          </Typography>
          <List sx={{ mb: 3 }}>
            <ListItem>
              Biopolitics and the Biotechnological 'Enhancement' of Humanity: A
              Psychohistorical Interpretation of Posthumanist and Transhumanist
              Visions of the Future through the Lens of Neoliberal Governance
              and Late Capitalism — IPhA 48th Annual Conference (May 23-25,
              2025)
            </ListItem>
            <ListItem>
              Philosophy and Fantasy — International Psychohistorical
              Association Conference, New York (May 2021)
            </ListItem>
            <ListItem>
              Women & Freud (Freud Museum London), On the Ambivalence with our
              Mothers (Freud Museum London, May 2025)
            </ListItem>
            <ListItem>
              Object Relations Institute USA and the Psychohistory Forum —
              Psychobiography Reading Group, 13th Meeting Dedicated to Eric R.
              Kandel (2025)
            </ListItem>
            <ListItem>
              Frojdian Research Seminar — The Sphinx as Figure (Frojdian
              Research Seminar Series, 2025)
            </ListItem>
          </List>
        </Container>
      </Box>
    </>
  );
};

export default Bio;
