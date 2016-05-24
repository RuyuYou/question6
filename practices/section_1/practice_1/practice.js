function collect_same_elements(collection_a, collection_b) {
  var sameElements = buildSameELements(collection_a, collection_b);
  return sameElements;
}

function buildSameELements(collection_a, collection_b) {
  var sameElements = [];
  collection_a.forEach(function (collectElement) {
    for (var i=0;i<collection_b.length;i++) {
      if (collectElement === collection_b[i]) {
        sameElements.push(collection_b[i]);
      }
    }
  });
  return sameElements;
}

module.exports = collect_same_elements;
