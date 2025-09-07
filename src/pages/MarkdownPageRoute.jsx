import React from "react";
import { useParams } from "react-router-dom";
import MarkdownPage from "./MarkdownPage";

export default function ResearchMarkdownRoute() {
  const { slug } = useParams();           // e.g., "pillar-1"
  console.log(slug);
  return <MarkdownPage pageId={`${slug}`} />;
}
