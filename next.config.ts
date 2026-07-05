import type { NextConfig } from "next";

// When building for GitHub Pages the site is served from
// https://hqum-dev.github.io/AgentForge-AI/, so all URLs need that prefix.
// Local development (npm run dev) stays at plain http://localhost:3000.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/AgentForge-AI" : "",
  assetPrefix: isGitHubPages ? "/AgentForge-AI" : "",
};

export default nextConfig;
