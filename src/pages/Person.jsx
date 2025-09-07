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
          <Typography variant="h5" align="center">{p.name}</Typography>
          <Typography color="text.secondary">{p.role}</Typography>
          {p.affiliations && p.affiliations.map((a, i) => (
            <Typography key={i} color="text.primary" align="center">{a}</Typography>
          ))}
          {p.links && Object.keys(p.links).length > 0 && (
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              flexWrap="wrap"
              justifyContent="center"
            >
              {Object.entries(p.links).map(([label, url]) => (
                <Button
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  variant="outlined"
                >
                  {label}
                </Button>
              ))}
            </Stack>
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} md={9}>
        <MarkdownView>{p.content}</MarkdownView>
      </Grid>
    </Grid>
  );
}
