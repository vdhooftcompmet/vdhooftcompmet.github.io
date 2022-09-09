
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import logo from './logo/logo_long.png';
import group_photo_2021 from './group_photo/group_photo_2021.jpeg';
import group_photo_2022 from './group_photo/group_photo_2022.jpeg';
import research_pillar_1 from './imgs/research_pillar_1.png';
import research_pillar_2 from './imgs/research_pillar_2.png';
import research_pillar_3 from './imgs/research_pillar_3.png';

// PROFILE PHOTOS
import profile_David_Meijer from './people/David_Meijer_profile.png';
import profile_Justin_van_der_Hooft from './people/Justin_van_der_Hooft_profile.png';
import profile_Mitja_Zdouc from './people/Mitja_Zdouc_profile.png';
import profile_Niek_de_Jonge from './people/Niek_de_Jonge_profile.png';
import profile_Joris_Louwen from './people/Joris_Louwen_profile.png';
import profile_Remco_van_Tuel from './people/Remco_van_Tuel_profile.png';
import profile_Amisha_Singh from './people/Amisha_Singh_profile.png';
import profile_Kevin_Mildau from './people/Kevin_Mildau_profile.png';
import profile_Beatriz_Bergamo from './people/Beatriz_Bergamo_profile.png';
import profile_Daniela_Atique_Vicentini from './people/Daniela_Atique_Vicentini_profile.png';
import profile_Selina_Ilchmann from './people/Selina_Ilchmann_profile.png';
import profile_Suraj_Muralidhar from './people/Suraj_Muralidhar_profile.png';
import profile_Anna_Marie_Seelen from './people/Anna-Marie_Seelen_profile.png';
import profile_Luka_Lmelias from './people/Luka_Lmelias_profile.png';
import profile_Soliman_Kathib from './people/Soliman_Kathib_profile.png';
import profile_Ricardo_da_Silva from './collabs/Ricardo_da_Silva_profile.png';
import profile_Fidele_Tugizimana from './collabs/Fidele_Tugizimana_profile.png';

// SEARCH ENGINE
export const SEO = {
    title: "Van der Hooft Computational Metabolomics Group",
    description: "The Van der Hooft Computational Metabolomics Group",
    image: logo.src, 
}

// ABOUT
export const about = {
    group_photo: [
        group_photo_2021.src,
        group_photo_2022.src
    ],
    description: (
        <div>
            <div className="mb-4">
                <h5>
                    Our research vision is to close the gap between what we can <i>see</i> in metabolomics and what we can actually <i>learn</i> from it.
                </h5>
            </div>
            <div className="mb-4">
                In our group, we develop approaches and tools to support structural and functional annotation in untargeted metabolomics workflows. To do this together in a responsible and respective way, we held the following shared team values in high regard: open-mindedness, pragmatism, and collegiality. Doing so, we strive to create the environment and atmosphere in which each team member can equally contribute and commit in a fair manner, and where we feel accountable for our contributions. We will encourage each group member to develop at their own pace and regularly flourish. As a group, we support, encourage, and apply open science following the FAIR principles as much as possible. This applies both to the data we use and the scripts and code we produce. 
            </div>
            <div className="mb-4">
                We aim to create tools that will enable biochemical interpretation of spectral data. This will enable biochemical interpretation of spectral data obtained from complex metabolite mixtures through structural and functional annotations. This will depend on finding out: i) which structural information is encoded in metabolomics data; ii) how novel chemistry can be recognised in spectral data, and iii) how to effectively identify relevant metabolite groups in metabolomics profiles of complex metabolite mixtures?
            </div>
            <div className="mb-4">
                The Van der Hooft Group develops computational metabolomics approaches inspired by two other fields - that of natural language processing (NLP) and genomics. For example, Justin has pioneered the use of topic modeling and word embedding NLP algorithms to discover substructures and structural relationships in metabolomics profiles.
            </div>
            <div>
                The Van der Hooft Group uses the plant root microbiome and human food metabolome as prime applications since they represent complex metabolite mixtures full of yet unknown metabolic matter that once elucidated will boost our insights in molecular mechanisms underpinning the regulation of growth, development, and health.
            </div>
        </div>
    ),
    research_pillars: [
        {
            img: research_pillar_1.src,
            title: "Research pillar I",
            description: "Machine learning to read metabolite structure from spectra",
            path: "research_pillar_1"
        },
        {
            img: research_pillar_2.src,
            title: "Research pillar II",
            description: "Chemically-informed comparative metabolomics to prioritize chemistry",
            path: "research_pillar_2"
        },
        {
            img: research_pillar_3.src,
            title: "Research pillar III",
            description: "Linked omics and activity profiles to gain functional insights",
            path: "research_pillar_3"
        }
    ]
}

// PEOPLE
export const people = {
    title: "People",
    people: [
        {
            name: "Justin van der Hooft",
            role: "Assistant professor",
            active: true,
            profile: profile_Justin_van_der_Hooft.src, 
            links: [
                {
                    icon: faUser,
                    link: "https://www.wur.nl/nl/Personen/Justin-dr.-JJJ-Justin-van-der-Hooft.htm"
                },
                {
                    icon: faGithub,
                    link: "https://github.com/justinjjvanderhooft"
                },
                {
                    icon: faTwitter,
                    link: "https://twitter.com/jjjvanderhooft"
                },
            ]
        },
        {
            name: "Mitja Zdouc",
            role: "Post-doctoral researcher",
            active: true,
            profile: profile_Mitja_Zdouc.src,
            links: [
                {
                    icon: faUser,
                    link: "https://www.wur.nl/en/Persons/Mitja-dr.-MM-Mitja-Zdouc.htm"
                },
                {
                    icon: faTwitter,
                    link: "https://twitter.com/mitjamz"
                }
            ]
        },
        {
            name: "David Meijer",
            role: "PhD student",
            active: true,
            profile: profile_David_Meijer.src,
            links: [
                {
                    icon: faUser,
                    link: "https://davidmeijer.com"
                },
                {
                    icon: faLinkedin,
                    link: "https://www.linkedin.com/in/davidmeijerbif"
                },
                {
                    icon: faGithub,
                    link: "https://github.com/davidmeijer"
                },
                {
                    icon: faTwitter,
                    link: "https://twitter.com/techmeijer"
                },
            ]
        },
        {
            name: "Kevin Mildau",
            role: "PhD student",
            active: true,
            profile: profile_Kevin_Mildau.src,
            links: [
                {
                    icon: faUser,
                    link: "https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fchemnet.univie.ac.at%2Fteam%2Fkevin-mildau%2F&amp;data=04%7C01%7Cjustin.vanderhooft%40wur.nl%7Cf29b94ad5fec4ab0b6f108d9f5dddb36%7C27d137e5761f4dc1af88d26430abb18f%7C0%7C0%7C637811156245511823%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C2000&amp;sdata=vo1VLbRAW%2BeU2bCnOW9ejTmr0koelgdMlojyalGfkJA%3D&amp;reserved=0"
                },
                {
                    icon: faLinkedin,
                    link: "https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fkevin-mildau%2F&amp;data=04%7C01%7Cjustin.vanderhooft%40wur.nl%7Cf29b94ad5fec4ab0b6f108d9f5dddb36%7C27d137e5761f4dc1af88d26430abb18f%7C0%7C0%7C637811156245511823%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C2000&amp;sdata=BWDJ0TiVu4LQ3gE0M16E4P3GwB3ArRJFPoZskVlZTLQ%3D&amp;reserved=0"
                },
                {
                    icon: faGithub,
                    link: "https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2Fkevinmildau&amp;data=04%7C01%7Cjustin.vanderhooft%40wur.nl%7Cf29b94ad5fec4ab0b6f108d9f5dddb36%7C27d137e5761f4dc1af88d26430abb18f%7C0%7C0%7C637811156245511823%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C2000&amp;sdata=iG8WLWDwsm%2F6INArOFgQY5HhcHUH9Uv%2FygNXmHOpfDY%3D&amp;reserved=0"
                },
                {
                    icon: faTwitter,
                    link: "https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Ftwitter.com%2FKMildau&amp;data=04%7C01%7Cjustin.vanderhooft%40wur.nl%7Cf29b94ad5fec4ab0b6f108d9f5dddb36%7C27d137e5761f4dc1af88d26430abb18f%7C0%7C0%7C637811156245511823%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C2000&amp;sdata=E%2FlI5jS97LcJA8VGvVnmGu3avc3ZIvUQ5QVNV22H7mk%3D&amp;reserved=0"
                }
            ]
        },
        {
            name: "Niek de Jonge",
            role: "PhD student",
            active: true,
            profile: profile_Niek_de_Jonge.src,
            links: [
                {
                    icon: faGithub,
                    link: "https://github.com/niekdejonge"
                }
            ]
        },
        {
            name: "Joris Louwen",
            role: "Research assistant",
            active: false,
            profile: profile_Joris_Louwen.src,
            links: []
        },
        {
            name: "Artur van Bemmelen",
            role: "Research assistant",
            active: true,
            profile: null,
            links: []
        },
        {
            name: "Nienke van Unen",
            role: "MSc student",
            active: false,
            profile: null,
            links: []
        },
        {
            name: "Osman Altun",
            role: "MSc student",
            active: false,
            profile: null,
            links: []
        },
        {
            name: "Selina Ilchmann",
            role: "MSc student",
            active: false,
            profile: profile_Selina_Ilchmann.src,
            links: []
        },
        {
            name: "Suraj Muralidhar",
            role: "Visiting PhD student",
            active: true,
            profile: profile_Suraj_Muralidhar.src,
            links: []
        },
        {
            name: "Morena Tinte",
            role: "Visiting PhD student",
            active: true,
            profile: null,
            links: []
        },
        {
            name: "Anna-Marie Seelen",
            role: "MSc student",
            active: true,
            profile: profile_Anna_Marie_Seelen.src,
            links: []
        },
        {
            name: "Remco van Tuel",
            role: "BSc student",
            active: false,
            profile: profile_Remco_van_Tuel.src,
            links: []
        },
        {
            name: "Amisha Singh",
            role: "MSc student",
            active: false,
            profile: profile_Amisha_Singh.src,
            links: []
        },
        {
            name: "Beatriz Bergamo",
            role: "Undergraduate student",
            active: true,
            profile: profile_Beatriz_Bergamo.src,
            links: []
        },
        {
            name: "Daniela Atique Vicentini",
            role: "Undergraduate student",
            active: true,
            profile: profile_Daniela_Atique_Vicentini.src,
            links: []
        },
        {
            name: "Lapo Renai",
            role: "Visiting PhD student",
            active: false,
            profile: null,
            links: []
        },
        {
            name: "Huali Xie",
            role: "Visiting PhD student",
            active: false,
            profile: null,
            links: []
        },
        {
            name: "Junda Huang",
            role: "MSc student",
            active: false,
            profile: null,
            links: []
        },
        {
            name: "Yiyuan Ding",
            role: "MSc student",
            active: false,
            profile: null,
            links: []
        },
        {
            name: "Antonio Rebac",
            role: "BSc student",
            active: false,
            profile: null,
            links: []
        },
        {
            name: "Jeanine Boot",
            role: "MSc student",
            active: false,
            profile: null,
            links: []
        },
        {
            name: "Sofia Kalaidopoulou",
            role: "MSc student",
            active: false,
            profile: null,
            links: []
        },
        {
            name: "Isis Meij",
            role: "MSc student",
            active: false,
            profile: null,
            links: []
        },
        {
            name: "Leron Kok",
            role: "MSc student",
            active: false,
            profile: null,
            links: []
        },
        {
            name: "Daniel Papenberg",
            role: "MSc student",
            active: false,
            profile: null,
            links: []
        },
        {
            name: "Luka Lmelias",
            role: "MSc student",
            active: true,
            profile: profile_Luka_Lmelias.src,
            links: []
        },
        {
            name: "Soliman Kathib",
            role: "Visiting researcher",
            active: true,
            profile: profile_Soliman_Kathib.src,
            links: []
        }
    ]
}

// PEOPLE
export const collabs = {
    title: 'Collaborators',
    collabs: [
        {
            name: "Marnix Medema",
            role: "Associate professor",
            affiliation: "Wageningen University, The Netherlands",
            profile: null,
            links: [
                {
                    icon: faUser,
                    link: "https://www.wur.nl/en/Persons/Marnix-dr.-MH-Marnix-Medema.htm"
                }
            ]
        },
        {
            name: "Ricardo da Silva",
            role: "Professor",
            affiliation: "University of São Paulo, Brazil",
            profile:  profile_Ricardo_da_Silva.src,
            links: [
                {
                    icon: faUser,
                    link: "http://ccbl.fcfrp.usp.br/ccbl/"
                },
                {
                    icon: faGithub,
                    link: "https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2Fcomputational-chemical-biology&amp;data=04%7C01%7Cjustin.vanderhooft%40wur.nl%7Cb8725efd53c74b6dd8cf08d9f61992a7%7C27d137e5761f4dc1af88d26430abb18f%7C0%7C0%7C637811411974848888%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&amp;sdata=QbHMj9oZldTTdeW4ue8RJfPqybYJkr5Fn2CWUxM1YUI%3D&amp;reserved=0"
                },
                {
                    icon: faTwitter,
                    link: "https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Ftwitter.com%2Fccbl19&amp;data=04%7C01%7Cjustin.vanderhooft%40wur.nl%7Cb8725efd53c74b6dd8cf08d9f61992a7%7C27d137e5761f4dc1af88d26430abb18f%7C0%7C0%7C637811411974848888%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&amp;sdata=%2BxL%2BcNS9AdXKhAnYYBOLeZQO8KSP1%2BX5hfUtdkFm314%3D&amp;reserved=0"
                }
            ]
        },
        {
            name: "Madeleine Ernst",
            role: "Group leader",
            affiliation: "Center for Neonatal Screening, Denmark",
            profile: null,
            links: [
                {
                    icon: faUser,
                    link: "https://en.ssi.dk/about-us/contact/employees/m/madeleine-ernst-maet"
                }
            ]
        },
        {
            name: "Fidele Tugizimana",
            role: "Group leader",
            affiliation: "University of Johannesburg, SA",
            profile: profile_Fidele_Tugizimana.src,
            links: [
                {
                    icon: faUser,
                    link: "https://twitter.com/fideletu"
                },
                {
                    icon: faTwitter,
                    link: "https://twitter.com/FT_ResearchUJ"
                }
            ]
        },
        {
            name: "Florian Huber",
            role: "Professor",
            affiliation: "Düsseldorf University of Applied Sciences, Germany",
            profile: null,
            links: [
                {
                    icon: faUser,
                    link: "https://medien.hs-duesseldorf.de/huber"
                }
            ]
        },
        {
            name: "eScience Center",
            role: "Institution",
            affiliation: "The Netherlands",
            profile: null,
            links: [
                {
                    icon: faUser,
                    link: "https://www.esciencecenter.nl/"
                }
            ]
        },
        {
            name: "Roger Linington",
            role: "Professor",
            affiliation: "Simon Fraser University, Canada",
            profile: null,
            links: [
                {
                    icon: faUser,
                    link: "https://www.sfu.ca/chemistry/department/faculty-staff/profiles/research-faculty/rliningt.html"
                }
            ]
        },
        {
            name: "The Dorrestein Laboratory",
            role: "Institution",
            affiliation: "University of California in San Diego, USA",
            profile: null,
            links: [
                {
                    icon: faUser,
                    link: "https://dorresteinlab.ucsd.edu/"
                }
            ]
        },
        {
            name: "Glasgow Polyomics",
            role: "Institution",
            affiliation: "University of Glasgow, Scotland, UK",
            profile: null,
            links: [
                {
                    icon: faUser,
                    link: "https://www.polyomics.gla.ac.uk/"
                }
            ]
        },
        {
            name: "Elena Chekmeneva",
            role: "Research associate",
            affiliation: "Imperial College London, England, UK",
            profile: null, 
            links: [
                {
                    icon: faUser,
                    link: "https://www.imperial.ac.uk/people/e.chekmeneva"
                }
            ]
        },
        {
            name: "Christoph Bueschl",
            role: "Researcher",
            affiliation: "University of Vienna, Austria",
            profile: null, 
            links: [
                {
                    icon: faUser, 
                    link: "https://chemnet.univie.ac.at/team/christoph-bueschl/"
                }
            ]
        },
    ]
}