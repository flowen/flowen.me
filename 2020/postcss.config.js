module.exports = {
  plugins: [
    require(`tailwindcss`)(`./tailwind/tailwind.config.js`),
    require(`autoprefixer`),
    ...(process.env.NODE_ENV === 'production' ? [require(`postcss-clean`)] : []),
  ],
};
