---
id: blog-ms2query
title: The origin of MS2Query
date: 2024-07-01
authors: ["Niek de Jonge"]
summary: Niek de Jonge tells us how MS2Query came to be.
cover: /images/general/code.jpg
tags: ["origin story"]
---

Scientific papers often leave readers wondering how ideas originated. As a scientist, I have always enjoyed reading about how the ideas of others have developed. The story of how MS2Query came to be is interesting as well, as it showcases how working on small ideas can lead to inspiration for big improvements. The project started in 2020 when Florian Huber and Justin van der Hooft had just finished developing MS2Deepscore and Spec2Vec. Although these mass spectral similarity scores were effective, there was a need to make them more user-friendly for library matching.

During his internship at the Netherlands eScienceCenter, Joris Louwen took on the challenge of creating a prototype that would automate library matching and present the results and metadata to enable the user to choose the best candidate. Joris implemented this in a prototype web app that visualized the results and even showed a small molecular network of library molecules with high similarity to the query spectrum. This implementation still required the user to compare multiple scores and sources of metadata to decide which of the predicted library matches by MS2Query was the best. To simplify the process for the end-user, the idea of combining the mass spectral similarity scores and metadata into one metascore was born.

After Joris' internship ended, Niek de Jonge took over the project. It was clear that this project would be more extensive than initially anticipated. Thus, the code was refactored to ensure its maintainability while taking lessons learned from the first prototype. In the prototype, the user could select the most likely candidate based on how the library molecules were related in a small molecular network. This gave Niek the idea that it might be possible to automate the reranking based on the small molecular network. This would make MS2Query a lot more user-friendly since no time-intensive reranking had to be done by the user. Using multiple closely related library molecules for reranking was automated in MS2Query, which in the end resulted in a big improvement in the performance of MS2Query compared to using MS2Deepscore alone. Making MS2Query go from a tool that makes it easier for the users to a tool that also makes the results a lot more reliable.

After over 1.5 years of additional work, including extensive benchmarking with available public mass spectra from the GNPS platform, testing on real data, and making the code more robust, MS2Query was finally ready for publication. The team is proud of how well MS2Query works and hopes that it will lead to a better understanding of metabolomics profiles of diverse and complex samples. Overall, MS2Query is a testament to the power of incremental improvements and teamwork in scientific research.

Check out the [MS2Query GitHub](https://github.com/iomega/ms2query) to start using MS2Query or read the paper [here](https://rdcu.be/c8Hkc).