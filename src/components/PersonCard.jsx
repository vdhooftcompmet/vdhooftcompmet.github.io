import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function PersonCard({ p }) {
  return (
    <Card>
      <CardActionArea component={Link} to={`/people/${p.slug}`}>
        <CardMedia
          component="img"
          image={p.portrait}
          alt={p.name}
          height="220"
          sx={{ objectFit: "cover" }}   // ensures nice crop for different aspect ratios
        />
        <CardContent>
          <Stack spacing={0.5}>
            <Typography variant="h6">{p.name}</Typography>
            <Typography variant="body2" color="text.secondary">{p.role}</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
