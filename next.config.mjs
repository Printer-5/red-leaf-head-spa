const isGitHubPages = process.env.GITHUB_ACTIONS || false;
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGitHubPages && repo ? `/${repo}` : "",
  assetPrefix: isGitHubPages && repo ? `/${repo}/` : "",
};

export default nextConfig;
