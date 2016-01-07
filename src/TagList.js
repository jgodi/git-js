var semver = require('semver');

module.exports = TagList;

function TagList(tagList) {
  this.latest = tagList ? tagList[tagList.length - 1] : null;
  this.all = tagList
}

TagList.parse = function (tags) {
  if (tags.length) {
    return new TagList(tags.split('\n').filter(function (tag) {
      return tag.length;
    }).sort(semver.compare));
  } else {
    return new TagList(null);
  }
};
