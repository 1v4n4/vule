import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import pic from "../assets/yuriy-kovalev.jpg";
import emailjs from "@emailjs/browser";
import Consult from "../components/Consult";
import Seo from "../components/Seo";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Šaljem...");

    try {
      await emailjs.send(
        "service_9y3wgio",
        "contact",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "hMN9UNf97FhJ5CnNR" // <-- replace with your public key
      );
      setStatus("Poruka je poslata! Hvala vam.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Došlo je do greške. Pokušajte ponovo.");
    }
  };

  return (
    <>
      <Seo
        title="Kontakt - Terapija.me"
        description="Kontaktirajte Vuksana Vuksanovića za hipnoterapiju, bioenergiju, savjetovanja i edukacije. Podgorica, Crna Gora."
        keywords="hipnoterapija, bioenergija, psihoterapija, terapija, kontakt, edukacije"
        url="https://terapija.me/kontakt"
      />
      <Box
        sx={{
          minHeight: "93vh",
          backgroundImage: `url(${pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex-column",
          alignItems: "center",
          justifyContent: "center",
          pt: 10,
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
          <Typography variant="h4" gutterBottom textAlign="center">
            Kontakt
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Ime"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Poruka"
              name="message"
              value={form.message}
              onChange={handleChange}
              multiline
              rows={4}
              required
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Pošalji
            </Button>
            {status && <Typography textAlign="center">{status}</Typography>}
          </Box>
        </Container>
        <Box
          sx={{
            mt: 10,
          }}
        >
          <Consult />
        </Box>
      </Box>
    </>
  );
};

export default Contact;
