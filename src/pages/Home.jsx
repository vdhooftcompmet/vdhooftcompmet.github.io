import React from "react";
import { Box, Typography, Grid, Paper, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { allNews, allBlogs } from "../lib/loadContent";
import NewsCard from "../components/NewsCard";
import BlogCard from "../components/BlogCard";
import PeopleStream from "../components/PeopleStream";
import logoUrl from "../assets/logo_long.png";
import groupPictureUrl from "../assets/group_picture_2023.png";
import imgResearchPillar1 from "../assets/research_pillar_1.png";
import imgResearchPillar2 from "../assets/research_pillar_2.png";
import imgResearchPillar3 from "../assets/research_pillar_3.png";

const LATEST = 3;

export default function Home() {
  const latestNews = allNews.slice(0, LATEST);
  const latestBlogs = allBlogs.slice(0, LATEST);

  return (
    <Stack spacing={4}>
      <Paper sx={{ p: 4 }}>
        <Stack spacing={1}>
          <Box
            component="img"
            src={logoUrl}
            alt="Group logo"
            sx={{ height: "auto", width: "80%", alignSelf: "center", mr: 1, pb: 2 }}
          />
          <Box component="figure" sx={{ m:0, pb: 2 }}>
            <Box 
              component="img"
              src={groupPictureUrl}
              alt="Group picture 2023"
              loading="lazy"
              sx={{
                width: "100%",
                height: { xs: 200, sm: 260, md: 500 },
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 1
              }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.75, textAlign: "center" }}>
              Our group in 2023, from left to right and top to bottom: Mahdere Shimels, Niek de Jonge, Rosina Torres Ortega, Robert Koetsier, Justin van der Hooft, Annette Lien, Jonas Dietrich, Felicia Wolters, David Meijer, Kumar Saurabh Singh, Mitja Zdouc, Kevin Mildau, and Suraj Muralidhar. Not present in photo: Kekeletso Chele, Kgalaletso Othibeng, Elena del Pup, Morenta Tinte, Helge Hecht, and Giulia Crocioni.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, pb: 2 }}>
            <Typography variant="body1">
              Our research vision is to close the gap between what we can <i>see</i> in metabolomics and what we can actually <i>learn</i> from it.
            </Typography>
            <Typography variant="body1">
              In our group, we develop approaches and tools to support structural and functional annotation in untargeted metabolomics workflows. To do this together in a responsible and respective way, we held the following shared team values in high regard: open-mindedness, pragmatism, and collegiality. Doing so, we strive to create the environment and atmosphere in which each team member can equally contribute and commit in a fair manner, and where we feel accountable for our contributions. We will encourage each group member to develop at their own pace and regularly flourish. As a group, we support, encourage, and apply open science following the FAIR principles as much as possible. This applies both to the data we use and the scripts and code we produce.
            </Typography>
            <Typography variant="body1">
              We aim to create tools that will enable biochemical interpretation of spectral data. This will enable biochemical interpretation of spectral data obtained from complex metabolite mixtures through structural and functional annotations. This will depend on finding out: i) which structural information is encoded in metabolomics data; ii) how novel chemistry can be recognised in spectral data, and iii) how to effectively identify relevant metabolite groups in metabolomics profiles of complex metabolite mixtures?
            </Typography>
            <Typography variant="body1">
              The Van der Hooft Group develops computational metabolomics approaches inspired by two other fields - that of natural language processing (NLP) and genomics. For example, Justin has pioneered the use of topic modeling and word embedding NLP algorithms to discover substructures and structural relationships in metabolomics profiles.
            </Typography>
            <Typography variant="body1">
              The Van der Hooft Group uses the plant root microbiome and human food metabolome as prime applications since they represent complex metabolite mixtures full of yet unknown metabolic matter that once elucidated will boost our insights in molecular mechanisms underpinning the regulation of growth, development, and health.
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2} sx={{ mt: 1 }}>
                {[
                  { title: "Research pillar I", subtitle: "Machine learning to read metabolite structure from spectra", img: imgResearchPillar1, to: "pages/research-pillar-1" },
                  { title: "Research pillar II", subtitle: "Chemically-informed comparative metabolomics to prioritize chemistry", img: imgResearchPillar2, to: "pages/research-pillar-2" },
                  { title: "Research pillar III", subtitle: "Linked omics and activity profiles to gain functional insights", img: imgResearchPillar3, to: "pages/research-pillar-3" },
                ].map(({ title, subtitle, img, to }) => (
                  <Grid key={title} item xs={12} sm={6} md={4}>
                    <Box
                      component={Link}
                      to={to}
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow: 4,
                        "&:hover": { boxShadow: 8 },
                        height: "100%",
                      }}
                    >
                      <Box
                        component="img"
                        src={img}
                        alt={title}
                        loading="lazy"
                        sx={{
                          width: "100%",
                          height: 240,
                          objectFit: "cover",
                          display: "block",
                          p: 2,
                        }}
                      />
                      <Box sx={{ p: 2, bgcolor: "background.paper", flexDirection: "column", gap: 0.5, display: "flex" }}>
                        <Typography variant="h6" align="center" fontWeight="bold">
                          {title}
                        </Typography>
                        <Typography variant="h7" align="center">
                          {subtitle}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Stack>
      </Paper>

      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Latest news</Typography>
          <Button component={Link} to="/news">View all</Button>
        </Stack>
        <Grid container spacing={2}>
          {latestNews.map(n => (
            <Grid key={n.slug} item xs={12} md={4}>
              <NewsCard item={n} />
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Latest blogs</Typography>
          <Button component={Link} to="/blogs">View all</Button>
        </Stack>
        <Grid container spacing={2}>
          {latestBlogs.map(n => (
            <Grid key={n.slug} item xs={12} md={4}>
              <BlogCard item={n} />
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Paper variant="outlined" sx={{ p: 3 }}>
        <Stack spacing={1} alignItems="center">
          <Typography variant="overline" color="text.secondary">
            Funding
          </Typography>
          <Typography variant="body2" align="center" sx={{ maxWidth: 900 }}>
            iOMEGA project - Accelerating Scientific Discoveries 2018 grant; NPLinker 2.0 project - eScience Open Call 2021 grant
          </Typography>
        </Stack>
      </Paper>

      <PeopleStream 
        title="Our people" 
        toAll="/people" 
        secondsPerCard={3.5}
      />
    </Stack>
  );
}
