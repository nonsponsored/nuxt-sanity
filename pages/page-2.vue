<template>
	<main>
		
		<article v-for="post in sanityPost.slice(0,1)" :key="post._id">
			<h1>{{post.title}}</h1>
			
			<h2>{{post.sub_title}}</h2>
			<figure>
				<img :src="urlFor(post.hero_image).width(680).url()" :alt="post.hero_image.alt_text" />
				
				<figcaption>{{post.caption}}</figcaption>
			</figure>
			<p>{{post.post_text}}</p>
		</article>
		
		<nuxt-link to="/" class="button--green">Home</nuxt-link>
		<nuxt-link to="/page-1/" class="button--green">Pulisic</nuxt-link>
		<nuxt-link to="/page-2/" class="button--green">MLS4THLOU</nuxt-link>
	</main>
</template>

<script>
	import { urlFor } from "../store/modules/sanity-img-builder.js"
	import { mapState } from 'vuex'

	export default {
		data () {
			return {
				title: 'MLS4THLOU'
			}
		},
		head () {
			return {
				title: this.title,
				meta: [
					// hid is used as unique identifier. Do not use `vmid` for it as it will not work
					{ hid: 'description', name: 'description', content: 'MLS4THLOU Description' }
				]
			}
		},
		methods: {
			urlFor
		},
		computed: {
			...mapState([
				'sanityPost'
			])
		}
	}
</script>