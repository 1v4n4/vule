import { Button, Container, Box } from "@mui/material";

const Consult = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
      <Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() =>
            window.open(
              "https://calendar.app.google/QDmu1xFWfCZFWu6F9",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Zakažite besplatne konsultacije
        </Button>
      </Box>
    </Container>
  );
};

export default Consult;
