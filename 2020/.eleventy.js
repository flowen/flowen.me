module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: { input: "src", output: "dist", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["pug", "md", "css", "html", "yml"],
    htmlTemplateEngine: "pug"
  };
};
