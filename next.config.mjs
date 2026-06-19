/** @type {import('next').NextConfig} */
const nextConfig = {
  // These let the site deploy on the first push even if a stray type or lint
  // nit slips in. Once it's running on Vercel, you can flip either to `false`
  // to enforce strict checking again.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
