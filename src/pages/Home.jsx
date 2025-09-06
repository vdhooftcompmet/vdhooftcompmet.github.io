import React from "react";
import { Box, Typography, Grid, Paper, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { allNews, currentPeople } from "../lib/loadContent";
import NewsCard from "../components/NewsCard";
import PersonCard from "../components/PersonCard";

const LATEST = 3;

export default function Home() {
  const latest = allNews.slice(0, LATEST);
  return (
    <Stack spacing={4}>
      <Paper sx={{ p: 4 }}>
        <Stack spacing={1}>
          <Typography variant="h3">Our Group</Typography>
          <Typography variant="body1">
            Short blurb about the group. Quick links:
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" component={Link} to="/people">People</Button>
            <Button variant="outlined" component={Link} to="/news">News</Button>
            <Button variant="outlined" href="https://scholar.google.com/" target="_blank">Publications</Button>
          </Stack>
        </Stack>
      </Paper>

      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Latest News</Typography>
          <Button component={Link} to="/news">View all</Button>
        </Stack>
        <Grid container spacing={2}>
          {latest.map(n => (
            <Grid key={n.slug} item xs={12} md={4}>
              <NewsCard item={n} />
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h5">People</Typography>
        <Grid container spacing={2}>
          {currentPeople.slice(0, 6).map(p => (
            <Grid key={p.slug} item xs={12} sm={6} md={4}>
              <PersonCard p={p} />
            </Grid>
          ))}
        </Grid>
        <Box>
          <Button component={Link} to="/people">All people & alumni</Button>
        </Box>
      </Stack>
    </Stack>
  );
}
