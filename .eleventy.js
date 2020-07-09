module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("issue0sorted", (collection) =>
  collection.getFilteredByGlob("issues/TR0SH/*.md").sort((a, b) => {
    if (a.data.author > b.data.author) return 1;
    else if (a.data.author < b.data.author) return -1;
    else return 0;
  })

);


eleventyConfig.addCollection("issue1sorted", (collection) =>
collection.getFilteredByGlob("issues/TR1SH/*.md").sort((a, b) => {
  if (a.data.author > b.data.author) return 1;
  else if (a.data.author < b.data.author) return -1;
  else return 0;
}));

eleventyConfig.addCollection("issue2sorted", (collection) =>
collection.getFilteredByGlob("issues/TR2SH/*.md").sort((a, b) => {
  if (a.data.author > b.data.author) return 1;
  else if (a.data.author < b.data.author) return -1;
  else return 0;
}));

eleventyConfig.addPassthroughCopy("js");
    return {
      templateFormats: [
        "jpg", "md", "css", "cur", "html", "png", "gif"
      ]
    };
  };