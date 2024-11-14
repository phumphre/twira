const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Add a date filter to format dates
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-MM-dd") => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  // Collection for newsletters
  eleventyConfig.addCollection("newsletters", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/newsletters/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

