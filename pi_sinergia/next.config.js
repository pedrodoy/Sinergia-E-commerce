/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["firebasestorage.googleapis.com", "m.media-amazon.com", "www.google.com", "www.fisioquantic.com.br", "lh3.googleusercontent.com", "www.flaticon.com"], 
    },
    webpack: (config) => {
        config.module.rules.push({
          test: /\.html$/i,
          loader: 'html-loader',
        });
        return config;
      },
};

module.exports = nextConfig;
