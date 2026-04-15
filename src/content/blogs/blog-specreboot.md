---
id: blog-specreboot
title: From board to action - How SpecReBoot was born
date: 2026-03-19
authors: ["Esteban Charria"]
summary: Esteban Charria tells us how SpecReBoot started and how it has recently developed.
cover: /images/general/code.jpg
tags: ["origin story"]
---

### The beginning

The idea behind SpecReBoot started during a brainstorming session between Rosina and Esteban, while thinking about how bootstrapping strategies work. At some point, something clicked: what if we could transfer the resampling strategy used for amino acid or nucleotide sequence alignments to spectral features, such as fragment peaks? From there, a simple question emerged: can we use this to evaluate the robustness of spectral relationships?

In metabolomics, network edges are often treated as fixed, even though they depend strongly on the fragment information present in the spectra. This made us wonder whether spectral relationships could be evaluated in a more reproducible and confidence-aware way.

Inspired by the logic of phylogenetic bootstrapping, we began exploring whether repeated resampling of spectral information could provide a measure of support for spectral similarity. That idea became **SpecReBoot**.

![Placeholder: whiteboard sketch from first brainstorming notes](/images/blogs/board.jpeg)

### The first milestone

A major step for the project was the release of the codebase on GitHub, together with our **bioRxiv preprint**, where we introduced the framework and showed its first applications. This was an important moment in turning the original idea into a method that could be shared with the broader computational metabolomics community.

You can read the preprint [here](https://www.biorxiv.org/content/10.64898/2026.02.03.703446v2).

### The momentum

Since then, SpecReBoot has continued to grow. We presented the work in the **Natural Products in the 21st Century** conference in Leuven, where it received a **Best Talk Prize**. This was a very encouraging sign that SpecReBoot could become an idea that helps shape future developments in the computational metabolomics community and broader applications.

At the same time, we realized that the framework needed to evolve to match the current needs of the field, which is increasingly moving toward repository-scale analyses with thousands and thousands of spectra. We therefore developed a **parallelization strategy** to speed up computations and make the workflow more scalable for larger datasets. This has been an important step toward making SpecReBoot more practical for real-world applications.

![Placeholder: photo of the team in Leuven](/images/blogs/Leuven.jpeg)

### The first workshops

Another exciting milestone was our **first SpecReBoot workshop in Leiden**. This gave us the chance to share the motivation behind the method, present the workflow in practice, and discuss how confidence-aware molecular networking could be useful in metabolomics projects, especially in natural products discovery. Thanks Joelle for co-organizing this nice event!

Followed by this, on the 14th of April we had the chance to have a **second workshop** at NAICONS, a biotech company in Milan working on the discovery of bioactive molecules from microbes. This was a very exciting chance to extend the applications of SpecReBoot to boost NPs discovery!

### Looking ahead

Together, these developments mark an exciting phase for SpecReBoot: from an initial idea to a growing framework for confidence-aware molecular networking. We are looking forward to continuing its development and exploring its applications with the community.

One such idea is the application of the SpecReBoot concept to the library matching problem, where matches are often unreliable. By using our bootstrap resampling strategy, we could bring confidence to re-rank library hits — stay tuned for more developments on this, or check the library matching branch on our GitHub [here](https://github.com/ECharria/SpecReBoot/tree/library_matching).

### The developing team

- Esteban Charria Girón
- Rosina Torres Ortega
- Joelle Mergola Greef
- Marnix Medema
- Justin van der Hooft

Check out the SpecReBoot GitHub [here](https://github.com/ECharria/SpecReBoot).