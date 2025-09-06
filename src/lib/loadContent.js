// src/lib/loadContent.js
import matter from "gray-matter";

function normalizeDate(d) {
  if (!d) return null;
  if (typeof d === 'string') return d; // assume ISO-like already
  const asDate = new Date(d); // handles Date or timestamp
  return Number.isNaN(asDate.getTime()) ? null : asDate.toISOString();
}

// --- NEWS ---
const newsRaw = import.meta.glob("../content/news/*.md", {
  as: "raw",
  eager: true
});

export const allNews = Object.entries(newsRaw)
  .map(([path, raw]) => {
    const { data, content } = matter(raw);
    const date = normalizeDate(data.date); // <-- normalize here
    return { ...data, date, content, slug: data.id, _path: path };
  })
  .sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });

// --- PEOPLE ---
const peopleRaw = import.meta.glob("../content/people/*.md", {
  as: "raw",
  eager: true
});

export const allPeople = Object.entries(peopleRaw).map(([path, raw]) => {
  const { data, content } = matter(raw);
  if (!data.portrait) {
    throw new Error(`Missing "portrait" in ${path}`);
  }
  return { ...data, content, slug: data.id, _path: path };
}).sort((a, b) => (a.name || "").localeCompare(b.name || ""));

export const currentPeople = allPeople.filter(p => (p.status || "current") === "current");
export const alumni = allPeople.filter(p => p.status === "alumni");
