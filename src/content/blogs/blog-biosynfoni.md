---
id: blog-biosynfoni
title: How Biosynfoni was born
date: 2024-07-01
authors: ["Lucina-May Nollen"]
summary: Lucina-May Nollen writes about how Biosynfoni was created.
cover: /images/general/code.jpg
tags: ["origin story"]
---

### The beginning

On a warm summer day in July, we had one of our first meetings for the Master’s thesis project I just started: creating a natural product-aware molecular fingerprint. In the process of figuring out what approach to take, I remember Justin giving the following advice: to follow the route that would satisfy my own curiosities. At that point, I had just started looking into different natural product classes, and I remember having trouble wrapping my head around the various classifications and what they entailed. Reading up on the origins, these classifications were vague in definition; part of the classifications are derived from extraction methods, others from properties or substructures the compounds contained, yet others from purely historical conventions. Not satisfied with these inconclusive classifications, my first – perhaps overambitious – curiosity became the quest to new, more airtight classifications. How could we create a fingerprint that would allow us to classify natural products in a consistent, intelligible way?

### The cornerstone

I cannot remember exactly what I looked for when I found the main cornerstone of my eventual fingerprint idea, Dewick’s 2009 Medicinal Natural Products: A Biosynthetic Approach, perhaps something along the lines of ‘common substructures within natural product classes’. Whatever it was, this book led to a tipping point in Biosynfoni’s creation: it had successfully introduced a systematic collection of Natural Product building blocks, including metabolic pathway annotations and interrelatedness for each of them. It described 8 main substructures originating from 4 pathways, and provided a nice schematic view of their biosynthesis and how it was linked to the glycolysis pathway. Thus, by seeing what substructure a molecule contains, you could derive what biosynthetic pathway(s) it originates from, providing a robust classification tactic.

### The ideology

This set of building blocks allowed easy creation of a substructure-key fingerprint: just define the substructure keys to be these building blocks. Ideally, I wanted the fingerprint to detect the substructure keys as a human eye would do: this led us to the counted, non-overlapping and fuzzy principle of Biosynfoni. A human eye would detect how many units of one substructure are present in the molecule (counted), and would also detect these substructures even if there are some small modifications to it (fuzzy). In general, it would see the most ‘important’ or obvious substructure, even if that substructure in itself contains smaller substructures: these are ‘hierarchically less important’, and a human would just choose to ignore the smaller substructures within the larger one. At this point, two weeks in, the foundations of the fingerprint were complete. 

### The name

While I had designed the Biosynfoni logo the very first week of the project, we still needed a name. The name ‘Biosynfoni’ could only have been born out of this building block approach, combining ‘biosynthetic’ and ‘bioinformatics’ into the new term biosynformatics. Clearly the only nicely sounding option containing ‘synfo’ would be synfo-ni, with the ‘ni’ flexibly provided by ‘fiNgerprInt’.

### The assessment

The next few weeks we thought about the possible applications of the fingerprint, alongside this new type of classification. We expected the fingerprint to estimate biosynthetic similarity well: similar molecules would have the same substructures even after cyclisation or small ‘decorative’ reactions. These two tasks – biosynthetic similarity prediction and classification – would test Biosynfoni’s performance. For these tasks, my personal goal was to achieve these as straight-forwardly as possible, ideally without machine learning methods. Accordingly, my initial ideal classification algorithm was: 1) count the number of detected substructures belonging to each of the 4 annotated pathways, 2) the count proportion of a pathway is the ‘class-likeness score’ for that pathway-class. While this was an interesting approach, the largest problem is that there is no way of assessing Biosynfoni performance compared to other fingerprints, or even to other classification tools. Therefore, we ended up using regular classification methods for task performance assessment.

### The changes

Similarly, some of my other ideologies for Biosynfoni, like the non-overlap detection, ended up not being as practical for the fingerprint’s assessment, and ended up being put aside for the time being. We also ended up expanding the substructure set, and added building blocks from ‘other pathways’ like sugars, amino acids, even though the amino acid pathway actually overlapped with the initial four pathways. Ultimately, we even added building blocks without a pathway, as well as various decoration substructures to increase the fingerprint coverage (sensitivity) of molecules! However, while we did tweak my ‘Biosynformatic manifesto’ – as I had nicknamed the foundational ideas of Biosynfoni – here and there, enough foundations remained to give Biosynfoni its characteristic properties. Ultimately, the fingerprint is still relatively short with 39 substructures as of March 2024, and its simple definition and the pathway-classified substructures still allow some of the intuitive interpretation I dreamt of in the summer of 2023.

### The memories

Overall, this project was a great playground for me to dabble around in and philosophise about molecular representations, mathematical transformations of information, and the connection between bioinformatics and cheminformatics. Looking back at the process now, I see that the ensemble of small tweaks, choices and steps within this project really is a product of everyone I met during those 8 months: my supervisors; the many people of the Computational Metabolomics group  asking many great questions during my midterm and group-meeting presentation; my fellow master’s thesis friends during lunch and during summer picnics at the Rhine; and all the other Bioinformatics Group members during round table discussions and presentations. 

Check out the Biosynfoni GitHub [here](https://github.com/lucinamay/biosynfoni).
