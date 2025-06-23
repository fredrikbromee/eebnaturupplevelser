module.exports = function (eleventyConfig) {
    /* Copy the entire admin folder verbatim */
    eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  
    /* Optional: copy images too */
    eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };
  