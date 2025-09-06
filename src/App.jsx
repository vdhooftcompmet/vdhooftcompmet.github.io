import React from "react";
import { Container, Box, Paper, Typography, Stack } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            p: 4,
            textAlign: "center",
            borderRadius: 2
          }}
        >
          <Stack spacing={1} alignItems="center">
            <Typography variant="h3" component="h1">
              🚧
            </Typography>
            <Typography variant="h4" component="h2">
              Under Construction
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Check back soon.
            </Typography>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}
