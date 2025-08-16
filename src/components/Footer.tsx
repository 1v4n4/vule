import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      p={3}
      sx={{
        mt: "-5vh",
        maxHeight: "5vh",
        backgroundColor: "transparent",
        position: "relative",
        zIndex: 10,
      }}
    >
      <Typography variant="body2" align="center">
        © 2025
      </Typography>
    </Box>
  );
};

export default Footer;
