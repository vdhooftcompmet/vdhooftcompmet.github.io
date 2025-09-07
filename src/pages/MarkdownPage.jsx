import React from "react";
import { Alert, Box, Typography } from "@mui/material";
import { pagesById } from "../lib/loadContent";
import MarkdownView from "../components/MarkdownView";

export default function MarkdownPage({ pageId }) {
  const page = pagesById[pageId];
  if (!page) return <Alert severity="error">Page “{pageId}” not found.</Alert>;

  return (
    <Box>
      {page.title && (
        <Typography variant="h4" sx={{ mb: 2 }}>
          {page.title}
        </Typography>
      )}
      <MarkdownView>{page.content}</MarkdownView>
    </Box>
  );
}
