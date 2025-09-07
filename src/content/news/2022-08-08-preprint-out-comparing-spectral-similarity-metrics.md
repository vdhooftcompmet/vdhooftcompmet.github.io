---
id: preprint-out-comparing-spectral-similarity-metrics
title: Preprint out
date: 2022-08-08
authors: ["Group"]
summary: Comparing spectral similarity metrics for mass spectrometry data.
cover: /images/general/news.jpg
tags: ["preprint"]
---

Great effort led by Wouter Bittremeux, Robin Schmid, Pieter Dorrestein, Mingxun Wang, and Florian Huber. In this paper we compare three mass spectral similarity metrics in comparing mass spectrometry fragmentation spectra.

We took mass spectra from various resources including proteomics peptide spectra and metabolomics small molecule metabolite spectra. Cosine, modified cosine, and neural loss scores were compared. For each spectral pair, the three scores are computed and the spectrum usage was calculated for all situations. The results show that modified cosine performs best for all spectral comparisons, but we do observe differential performance between chemical compound classes (metabolites) and side of modification (peptides).

Check out the code and preprint [here](https://github.com/bittremieux/cosine_neutral_loss).