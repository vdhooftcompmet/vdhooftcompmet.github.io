import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Typography, Link as MUILink, Box, List, ListItem } from "@mui/material";

export default function MarkdownView({ children }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: (p) => <Typography variant="h3" gutterBottom {...p} />,
        h2: (p) => <Typography variant="h4" gutterBottom {...p} />,
        h3: (p) => <Typography variant="h5" gutterBottom {...p} />,
        p:  (p) => <Typography variant="body1" paragraph {...p} />,
        a:  (p) => <MUILink {...p} target="_blank" rel="noreferrer" />,
        ul: (p) => <List sx={{ listStyle: "disc", pl: 3 }} {...p} />,
        ol: (p) => <List sx={{ listStyle: "decimal", pl: 3 }} {...p} />,
        li: (p) => <ListItem sx={{ display: "list-item", py: 0 }} {...p} />,
        img: (p) => <Box component="img" sx={{ maxWidth: "100%", my: 2 }} {...p} />
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
