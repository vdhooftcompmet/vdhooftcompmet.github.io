import React from "react";
import { useParams } from "react-router-dom";
import { allPeople } from "../lib/loadContent";
import { Grid, Typography, Stack, Avatar, Alert, Button } from "@mui/material";
import MarkdownView from "../components/MarkdownView";

export default function Person() {
  const { slug } = useParams();
  const p = allPeople.find(x => x.slug === slug);
  if (!p) return <Alert severity="error">Person not found.</Alert>;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <Stack spacing={1} alignItems="center">
          <Avatar src={p.portrait} alt={p.name} sx={{ width: 160, height: 160 }} />
          <Typography variant="h5">{p.name}</Typography>
          <Typography color="text.secondary">{p.role}</Typography>
          {p.website && <Button href={p.website} target="_blank">Website</Button>}
        </Stack>
      </Grid>
      <Grid item xs={12} md={9}>
        <MarkdownView>{p.content}</MarkdownView>
      </Grid>
    </Grid>
  );
}
