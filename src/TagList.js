module.exports = TagList;

function TagList(tagList) {
  this.latest = tagList ? tagList[tagList.length - 1] : null;
  this.all = tagList
}

TagList.parse = function (tags) {
  if (tags.length) {
    return new TagList(tags.split('\n').filter(function (item) {
      return item.length;
    }).map(function (item) {
      return item.trim();
    }).sort(compVersions));
  } else {
    return new TagList(null);
  }
};

function compVersions(strV1, strV2) {
  var nRes = 0
    , parts1 = strV1.split('.')
    , parts2 = strV2.split('.')
    , nLen = Math.max(parts1.length, parts2.length);

  for (var i = 0; i < nLen; i++) {
    var nP1 = (i < parts1.length) ? parseInt(parts1[i], 10) : 0
      , nP2 = (i < parts2.length) ? parseInt(parts2[i], 10) : 0;

    if (isNaN(nP1)) {
      nP1 = 0;
    }
    if (isNaN(nP2)) {
      nP2 = 0;
    }

    if (nP1 != nP2) {
      nRes = (nP1 > nP2) ? 1 : -1;
      break;
    }
  }

  return nRes;
}

