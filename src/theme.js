import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary:   { main: "#065171" },   // brand primary (buttons, links, etc.)
    secondary: { main: "#34b234" },   // accent
    background: {
      default: "#FAF9F6",             // page background (off-white)
      paper:   "#FFFFFF",             // cards / Paper
    },
    text: {
      primary:   "#0F172A",           // main text
      secondary: "#475569",           // muted text
    },
    divider: "#E2E8F0",
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily:
      `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"`,
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.6 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: "none" }, // remove default gradient
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { textTransform: "none", borderRadius: 10 },
        outlined: { borderColor: "#CBD5E1" },
      },
    },
    MuiLink: {
      styleOverrides: { root: { textUnderlineOffset: "3px" } },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: "none" } },
    },
  },
});

export default theme;
