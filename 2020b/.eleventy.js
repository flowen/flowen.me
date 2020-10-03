module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["pug", "md", "css", "html", "yml"]);

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("robots.txt");

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
    },
    passthroughFileCopy: true,
    // templateFormats: ["pug", "md", "css", "html", "yml"],
    htmlTemplateEngine: "pug",
  };
};
