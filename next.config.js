const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

/* module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}; */

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})