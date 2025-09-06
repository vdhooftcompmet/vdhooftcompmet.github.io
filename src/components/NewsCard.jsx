import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

export default function NewsCard({ item }) {
  return (
    <Card>
      <CardActionArea component={Link} to={`/news/${item.slug}`}>
        {item.cover && (
          <CardMedia component="img" height="160" image={item.cover} alt={item.title} />
        )}
        <CardContent>
          <Stack spacing={0.5}>
            <Typography variant="overline">
              {item.date ? format(parseISO(item.date), "PPP") : ""}
            </Typography>
            <Typography variant="h6">{item.title}</Typography>
            {item.summary && (
              <Typography variant="body2" color="text.secondary">{item.summary}</Typography>
            )}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
