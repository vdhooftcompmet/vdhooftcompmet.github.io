import React, { useMemo } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import { Link } from "react-router-dom";
import PersonCard from "./PersonCard";
import { currentPeople } from "../lib/loadContent";

const CARD_W = 300; // px, fixed card width
const CARD_H = 320; // px, fixed card height

// Scroll the width of the first sequence (50% of the doubled track)
const scroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

/**
 * Endless, right-to-left marquee built by duplicating the sequence.
 * - Fixed card width ensures a seamless 50% translate loop.
 * - Pauses on hover. Respects reduced-motion.
 * - Fades left/right edges into the page background.
 * - Uses name-based alphabetical order to sort profiles.
 * NOTE: haven't checked what happens when we have no, or too little profiles to fill the marquee at least once...
 */
export default function PeopleStream({
  title = "People",
  toAll = "/people",
  gap = 16,              // px gap between cards
  secondsPerCard = 3.5,  // tweak overall speed
}) {
  const theme = useTheme();

  // Stable order (no random shuffle) for a smooth loop
  const items = useMemo(
    () => [...currentPeople].sort((a, b) => (a.name || "").localeCompare(b.name || "")),
    []
  );

  // Duplicate once to create a seamless loop
  const doubled = useMemo(() => [...items, ...items], [items]);

  // Duration: proportional to number of unique cards
  const durationSec = Math.max(30, Math.round(items.length * secondsPerCard));

  const fadeBg = theme.palette.background.default; // blends with the Paper behind it

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">{title}</Typography>
        <Button component={Link} to={toAll}>View all</Button>
      </Stack>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          // Optional: give it some height balance
          py: 1,
        }}
        aria-label="Endless stream of group members"
      >
        {/* Edge fades */}
        <Box
          aria-hidden
          sx={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            // Fade both sides into the background
            background: `linear-gradient(
              to right,
              ${fadeBg} 0%,
              ${alpha(fadeBg, 0)} 8%,
              ${alpha(fadeBg, 0)} 92%,
              ${fadeBg} 100%
            )`,
            zIndex: 2,
          }}
        />

        {/* The moving track (two explicit sequences for a seamless loop) */}
        <Box
          sx={{
            display: "inline-flex",
            width: "max-content",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
            gap: `${gap}px`,
            animation: `${scroll} ${durationSec}s linear infinite`,
            "&:hover": { animationPlayState: "paused" },
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
              transform: "translateX(0)",
            },
          }}
        >
          {/* First sequence */}
          {items.map((p) => (
            <Box
              key={`seq1-${p.slug}`}
              sx={{
                flex: "0 0 auto",
                width: CARD_W, minWidth: CARD_W, maxWidth: CARD_W,
                height: CARD_H,
              }}
            >
              <PersonCard p={p} />
            </Box>
          ))}

          {/* Duplicate sequence (for seamless wrap) */}
          {items.map((p) => (
            <Box
              key={`seq2-${p.slug}`}
              aria-hidden
              sx={{
                flex: "0 0 auto",
                width: CARD_W, minWidth: CARD_W, maxWidth: CARD_W,
                height: CARD_H,
              }}
            >
              <PersonCard p={p} />
            </Box>
          ))}
        </Box>
      </Box>

      <Box>
        <Button component={Link} to={toAll}>View our alumni & collaborators</Button>
      </Box>
    </Stack>
  );
}
