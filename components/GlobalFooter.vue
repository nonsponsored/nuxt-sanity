<template>
	<footer>

		<h6>Footer</h6>
		
		<router-link to="/page-1/" exact>Pulisic</router-link>
		<router-link to="/page-2/" exact>MLS4THLOU</router-link>

	</footer>
</template>

<style lang="scss">
	footer {
		background-color: rgb(53, 73, 94);
		color: #fff;
		padding: 50px;
		text-align: center;
	
		a {
			color: #fff;
			padding: 0 10px;
		}
		
		.nuxt-link-active {
			font-weight: bold;
			text-decoration: none;
		}
	}
</style>