import matter from "gray-matter";

function normalizeDate(d) {
  if (!d) return null;
  if (typeof d === 'string') return d; // assume ISO-like already
  const asDate = new Date(d); // handles Date or timestamp
  return Number.isNaN(asDate.getTime()) ? null : asDate.toISOString();
}

// --- NEWS ---
const newsRaw = import.meta.glob("../content/news/*.md", {
  query: "?raw",
  import: "default",
  eager: true
});

export const allNews = Object.entries(newsRaw)
  .map(([path, raw]) => {
    const { data, content } = matter(raw);
    const date = normalizeDate(data.date);
    return { ...data, date, content, slug: data.id, _path: path };
  })
  .sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });

// --- PEOPLE ---
const peopleRaw = import.meta.glob("../content/people/*.md", {
  query: "?raw",
  import: "default",
  eager: true
});

// Define seniority order
const roleOrder = [
  "professor",
  "associate professor",
  "assistant professor",
  "postdoctoral researcher",
  "visiting postdoctoral researcher",
  "phd candidate",
  "visiting phd candidate",
  "msc student",
  "bsc student"
];

// Convert into a lookup map for quick sorting
const roleRank = Object.fromEntries(roleOrder.map((r, i) => [r, i]));

export const allPeople = Object.entries(peopleRaw).map(([path, raw]) => {
  const { data, content } = matter(raw);
  if (!data.portrait) {
    throw new Error(`Missing "portrait" in ${path}`);
  }
  const links = { ...(data.links || {}) };
  return { ...data, links, content, slug: data.id, _path: path };
}).sort((a, b) => {
  // Normalize roles to lowercase
  const roleA = (a.role || "").toLowerCase();
  const roleB = (b.role || "").toLowerCase();

  // Compare by rank (fall back to very large number if not in list)
  const rankA = roleRank[roleA] ?? Number.MAX_SAFE_INTEGER;
  const rankB = roleRank[roleB] ?? Number.MAX_SAFE_INTEGER;

  if (rankA !== rankB) return rankA - rankB;

  // If same role rank, sort by name alphabetically
  return (a.name || "").localeCompare(b.name || "");
});

export const currentPeople = allPeople.filter(p => (p.status || "current") === "current");
export const alumni = allPeople.filter(p => p.status === "alumni");
export const collaborators = allPeople.filter(p => p.status === "collaborator");

// --- PAGES ---
const pagesRaw = import.meta.glob("../content/pages/*.md", {
  query: "?raw",
  import: "default",
  eager: true
});

export const pagesById = Object.fromEntries(
  Object.entries(pagesRaw).map(([path, raw]) => {
    const { data, content } = matter(raw);
    const id = data.id || path.split("/").pop().replace(/\.md$/, "");
    return [id, { ...data, content, slug: data.slug || id, _path: path }];
  })
);

// --- BLOGS ---
const blogsRaw = import.meta.glob("../content/blogs/*.md", {
  query: "?raw",
  import: "default",
  eager: true
});

export const allBlogs = Object.entries(blogsRaw)
  .map(([path, raw]) => {
    const { data, content } = matter(raw);
    const date = normalizeDate(data.date);
    return { ...data, date, content, slug: data.id, _path: path };
  })
  .sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });
