import React from "react";
import { Grid, Typography, Stack, Divider } from "@mui/material";
import { currentPeople, alumni } from "../lib/loadContent";
import PersonCard from "../components/PersonCard";

export default function People() {
  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography variant="h4">Current Members</Typography>
        <Grid container spacing={2}>
          {currentPeople.map(p => (
            <Grid key={p.slug} item xs={12} sm={6} md={4} lg={3}>
              <PersonCard p={p} />
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Divider />

      <Stack spacing={1}>
        <Typography variant="h4">Alumni</Typography>
        <Grid container spacing={2}>
          {alumni.map(p => (
            <Grid key={p.slug} item xs={12} sm={6} md={4} lg={3}>
              <PersonCard p={p} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
