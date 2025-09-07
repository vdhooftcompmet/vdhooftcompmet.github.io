import React from "react";
import { useParams } from "react-router-dom";
import { allBlogs } from "../lib/loadContent";
import { Typography, Stack, Alert } from "@mui/material";
import { fmt } from "../lib/dates";
import MarkdownView from "../components/MarkdownView";

export default function BlogPost() {
  const { slug } = useParams();
  const post = allBlogs.find(n => n.slug === slug);
  if (!post) return <Alert severity="error">Blog post not found.</Alert>;
  return (
    <Stack spacing={2}>
      <Typography variant="h3">{post.title}</Typography>
      <Typography variant ="h6" color="text.secondary">By {post.authors.join(", ")}</Typography>
      <Typography variant="overline">{fmt(post.date)}</Typography>
      <MarkdownView>{post.content}</MarkdownView>
    </Stack>
  );
}
