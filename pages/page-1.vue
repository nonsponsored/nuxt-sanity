<template>
	<main>
				
		<article v-for="post in sanityPost.slice(1,2)" :key="post._id">
			<h1>{{post.title}}</h1>
			
			<h2>{{post.sub_title}}</h2>
			
			<figure>
				<img :src="urlFor(post.hero_image).url()" :alt="post.hero_image.alt_text" />
								
				<figcaption>{{post.caption}}</figcaption>
			</figure>
			<p>{{post.post_text}}</p>
		</article>
		
		<nuxt-link to="/" exact class="button--green">Home</nuxt-link>
		<nuxt-link to="/page-1/" exact class="button--green">Pulisic</nuxt-link>
		<nuxt-link to="/page-2/" exact class="button--green">MLS4THLOU</nuxt-link>
	</main>
</template>

<script>
	import { urlFor } from "../store/modules/sanity-img-builder.js"
	import { mapState } from 'vuex'
		
	export default {
		data () {
			return {
				title: 'Pulisic'
			}
		},
		head () {
			return {
				title: this.title,
				meta: [
					// hid is used as unique identifier. Do not use `vmid` for it as it will not work
					{ hid: 'description', name: 'description', content: 'Pulisic Description' }
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