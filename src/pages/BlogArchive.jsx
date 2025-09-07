import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import { allBlogs } from "../lib/loadContent";
import BlogCard from "../components/BlogCard";

export default function BlogArchive() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Blog archive</Typography>
      <Grid container spacing={2}>
        {allBlogs.map(n => (
          <Grid key={n.slug} item xs={12} md={6} lg={4}>
            <BlogCard item={n} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
