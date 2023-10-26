module.exports = {
    layout: 'post',
    tags: 'posts',
    permalink: function(data) {
        // slug override for localized URL slugs
        if (data.seo?.slug) {
            return `/writing/${this.slugify(data.seo?.slug)}/`;
        } else if (data.slug) {
			return `/writing/${this.slugify(data.slug)}/`;
		} else {
            return `/writing/${this.slugify(data.page.fileSlug)}/`;
        }
    }
}
