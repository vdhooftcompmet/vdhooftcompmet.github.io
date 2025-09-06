import React from "react";
import { useParams } from "react-router-dom";
import { allNews } from "../lib/loadContent";
import { Typography, Stack, Alert } from "@mui/material";
import { fmt } from "../lib/dates";
import MarkdownView from "../components/MarkdownView";

export default function NewsPost() {
  const { slug } = useParams();
  const post = allNews.find(n => n.slug === slug);
  if (!post) return <Alert severity="error">News not found.</Alert>;
  return (
    <Stack spacing={2}>
      <Typography variant="h3">{post.title}</Typography>
      <Typography variant="overline">{fmt(post.date)}</Typography>
      <MarkdownView>{post.content}</MarkdownView>
    </Stack>
  );
}
