import sanity from "~/store/modules/sanity-credentials.js"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanity)

export function urlFor(source) {
	return builder.image(source)
}
