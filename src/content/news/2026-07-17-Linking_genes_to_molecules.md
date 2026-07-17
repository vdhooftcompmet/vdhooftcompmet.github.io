---
id: 2026-05-28-EUSM2026
title: "Linking genes to molecules: teaching BiG-SCAPE, FERMO and NPLinker at E-NICHE's multiomics training course"
date: 2026-07-17
authors: ["Joelle Mergola Greef"]
summary: 
cover: /images/news/E-NICHE_collage_pic.jpg
tags: ["E-NICHE", "multi-omics", "training course", "postdoc life", "COmpMet group", "WUR"]
---
Last month I was one of the presenters at the *E-NICHE COST* Action's five-day
training course on metabolomics and multi-omics, held at the Stazione Zoologica
Anton Dohrn in Naples. E-NICHE brings together European chemical ecologists,
and this course was built around an idea: take a room full of researchers who
mostly know one side of natural product discovery, either the genomes or the
metabolites, and give them a working, hands-on feel for the tools that connect the
two.

My session fell on day four, the "multiomics" day. By the time it was my turn,
participants had already spent Monday getting a refresher on LC-MS/MS and
molecular networking, Tuesday going deep on metabolomics workflows and
natural products databases, and Wednesday getting properly acquainted with
antiSMASH and biosynthetic gene clusters. That groundwork made my job much
easier: instead of starting from scratch, I got to build directly on what Soizic
Prado, Gregory Genta-Jouve and Gerardo Della Sala had already put in
people's heads over the first three days, so by Thursday everyone already knew
what a BGC and a molecular family were and we could jump straight to clustering
and linking them.

*Why bother linking genomes and metabolomes at all?*

Genomics and metabolomics each give you half a story. A genome tells you what
a microbe could make, every biosynthetic gene cluster (BGC) sitting in the DNA,
whether or not it's ever switched on. A metabolome tells you what's actually
present in an extract, but says nothing about which genes made it. Most BGCs are
silent under standard lab conditions, and most LC-MS features have no match in
any spectral library. Neither layer alone tells you which silent gene cluster is
worth waking up, or which unidentified peak is worth isolating. You need both,
tied together.

The workflow: 
Three tools carried the day: *BiG-SCAPE* on the genomics side, *FERMO* on the
metabolomics side, and *NPLinker* to bring the two together.
BiG-SCAPE takes the BGCs antiSMASH detects in a genome and groups them into
gene cluster families, based on shared protein domains and sequence similarity,
with MIBiG reference clusters thrown in so you can see at a glance whether a
family looks like something known or something new. Participants installed it
themselves and ran it on their own antiSMASH output, then explored the
resulting network in Cytoscape.
FERMO does the equivalent job on the metabolomics side. It takes a feature table,
a molecular network and your sample metadata (and ideally some bioactivity
data), and gives you a dashboard to quickly filter thousands of LC-MS features
down to the handful actually worth chasing. We worked through a real case study
on 10 Planomonospora strains showing differential antibiotic activity against
Staphylococcus aureus, where a couple of filters cut thousands of features down
to a short, defensible list.
NPLinker then takes BiG-SCAPE's gene cluster families and the molecular families
from GNPS or FERMO, and scores every possible pair by how consistently they
show up together across your strains, the same co-occurrence logic behind older
classics like the Metcalf score. For the practical we used a published dataset of
119 insect-associated Streptomyces genomes and their LC-MS data, and on how to
actually read the output: a link that holds only in a handful of strains is usually
far more interesting than one that holds everywhere.

*Thank you*

None of this would have come together without Giovanna Romano and Soizic
Prado, who organised the whole course. Beyond running their own sessions, they
kept the schedule running like clockwork all week, and on top of that made sure
we got a proper taste of Naples itself, meal after meal of the kind of pizza, seafood
and pastries the city is famous for. Thank you again to Soizic, Gregory and
Gerardo for being such great teachers over the first three days and setting the
tone that made my own session possible. It was a pleasure to teach alongside all
of you, and to everyone who worked through the practicals with such
enthusiasm

![E-NICHE](/images/news/E-NICHE_collage_pic.jpg)










