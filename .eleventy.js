const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Add a date filter to format dates
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-MM-dd") => {
    // Check if dateObj is a valid Date object, else use the current date
    const date = dateObj instanceof Date && !isNaN(dateObj) ? dateObj : new Date();
    return DateTime.fromJSDate(date).toFormat(format);
  });

  // Collection for newsletters
  eleventyConfig.addCollection("pamphlets", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/pamphlets/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

