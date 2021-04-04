module.exports = {
  trailingSlash: true,
  async headers() {
    return [
      {
        // This works, and returns appropriate Response headers:
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=180, s-maxage=180, stale-while-revalidate=180',
          },
        ],
      },
    ]
  },
}
