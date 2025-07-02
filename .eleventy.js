module.exports = function (eleventyConfig) {
    /* Copy the entire admin folder verbatim */
    eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  
    /* Optional: copy images too */
    eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  
    /* Copy css */
    eleventyConfig.addPassthroughCopy({ "src/css": "css" });

    eleventyConfig.addPairedShortcode("contentGrid", function(content) {
        return `<div class="content-grid">${content}</div>`;
    });

    eleventyConfig.addPairedShortcode("contentBox", function(content, imageUrl, imageAlt, reverse = false, id = "") {
        const idAttr = id ? ` id="${id}"` : '';
        const reverseClass = reverse ? ' reverse' : '';
        return `<div class="content-box${reverseClass}"${idAttr}>
                    <img src="${imageUrl}" alt="${imageAlt}">
                    <div class="content-box-text">
                        ${content}
                    </div>
                </div>`;
    });
  
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };
  