/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ember-kitchen',
  assetPrefix: '/ember-kitchen/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
