<template>
	<div>
		<globalHeader />
	
		<nuxt />
	
		<globalFooter />
	</div>
</template>

<script>	
	import globalHeader from '~/components/GlobalHeader.vue'
	import globalFooter from '~/components/GlobalFooter.vue'
	

	export default {
		components: {
			globalHeader,
			globalFooter
		}
	}
</script>