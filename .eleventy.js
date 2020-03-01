module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("issue0sorted", (collection) =>
  collection.getFilteredByGlob("issues/TR0SH/*.md").sort((a, b) => {
    if (a.data.author > b.data.author) return 1;
    else if (a.data.author < b.data.author) return -1;
    else return 0;
  })
);

    return {
      templateFormats: [
        "jpg", "md", "css", "cur", "html", "png", "gif", "js"
      ]
    };
  };