import React from "react";
import { AppBar, Box, Container, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import logoUrl from "../assets/logo_favicon.jpeg";

export default function PageShell() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ gap: 2 }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              component="img"
              src={logoUrl}
              alt="Group logo"
              sx={{ height: 48, width: "auto", mr: 1, borderRadius: "50%" }}
            />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Van der Hooft
            </Typography>
          </Box>

          {/* Spacer pushes nav to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Nav */}
          <Stack direction="row" spacing={1}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/news">News</Button>
            <Button color="inherit" component={Link} to="/people">People</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container sx={{ my: 4 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
