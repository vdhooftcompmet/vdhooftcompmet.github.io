import React from "react";
import { AppBar, Box, Container, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export default function PageShell() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Van der Hooft Computational Group
          </Typography>
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
