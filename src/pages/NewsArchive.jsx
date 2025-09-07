import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import { allNews } from "../lib/loadContent";
import NewsCard from "../components/NewsCard";

export default function NewsArchive() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">News archive</Typography>
      <Grid container spacing={2}>
        {allNews.map(n => (
          <Grid key={n.slug} item xs={12} md={6} lg={4}>
            <NewsCard item={n} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
