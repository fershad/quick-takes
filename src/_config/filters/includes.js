// sort collection by an arbitrary key
// {% set collection = collections.posts | sort('title', false, false) %}
module.exports = function(array = [], string) {
  let tags = array.map(tag => tag.trim());
   return tags.includes(string);
};
