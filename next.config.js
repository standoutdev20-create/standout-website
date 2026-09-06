const path = require('path')

const ckeditorCss = path.join(__dirname, 'node_modules/ckeditor5/dist/ckeditor5.css')
const ckeditorWatchdog = path.join(__dirname, 'node_modules/@ckeditor/ckeditor5-watchdog')

const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com', pathname: '/**' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Renamed from experimental.serverComponentsExternalPackages in Next 15
  serverExternalPackages: ['mongodb'],
  transpilePackages: ['@ckeditor/ckeditor5-react'],
  webpack(config, { dev }) {
    if (dev) {
      // Reduce CPU/memory from file watching
      config.watchOptions = {
        poll: 2000, // check every 2 seconds
        aggregateTimeout: 300, // wait before rebuilding
        ignored: ['**/node_modules'],
      };
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      'ckeditor5/ckeditor5.css': ckeditorCss,
      'ckeditor5/dist/ckeditor5.css': ckeditorCss,
      '@ckeditor/ckeditor5-watchdog': ckeditorWatchdog,
    }

    return config;
  },
  onDemandEntries: {
    maxInactiveAge: 10000,
    pagesBufferLength: 2,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "ALLOWALL" },
          { key: "Content-Security-Policy", value: "frame-ancestors *;" },
          { key: "Access-Control-Allow-Origin", value: process.env.CORS_ORIGINS || "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "*" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
