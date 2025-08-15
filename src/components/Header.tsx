import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const pages = [
  { text: "Treninzi i usluge", path: "/about" },
  { text: "Biografija", path: "/bio" },
  { text: "Kontakt", path: "/contact" },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        {/* Home Icon on the left */}
        <IconButton
          edge="start"
          color="inherit"
          component={Link}
          to="/"
          sx={{ mr: 2 }}
        >
          <HomeIcon sx={{ fontSize: 36 }} /> {/* Increased size */}
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop Links on the right */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {pages.map((page) => (
            <Button
              key={page.text}
              color="inherit"
              size="large"
              component={Link}
              to={page.path}
              sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              {page.text}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            color="inherit"
            onClick={handleOpenMenu}
            sx={{ fontSize: 36 }} // Increase mobile menu icon size
          >
            <MenuIcon fontSize="inherit" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.text}
                component={Link}
                to={page.path}
                onClick={handleCloseMenu}
              >
                {page.text}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
