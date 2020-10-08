import sanity from '~/store/modules/sanity-credentials.js'

export const state = () => ({
	sanityPeople: [],
	sanityPost: []
})

export const mutations = {
	updateSanityPeople: (state, payload) => {
		state.sanityPeople = payload
	},
	updateSanityPost: (state, payload) => {
		state.sanityPost = payload
	}
}

export const actions = {
	async getSanityPeople({ state, commit }) {
		if (state.sanityPeople.length) return
	
		try {
			let sanityPeople = await sanity.fetch(
				'*[_type == "person"]'
			)
			
			console.log(sanityPeople)
			
			
			commit('updateSanityPeople', sanityPeople) 
		} catch (err) {
			console.log(err)
		}
	},  
	async getSanityPost({ state, commit }) {
		if (state.sanityPost.length) return
	
		try {
			let sanityPost = await sanity.fetch(
				'*[_type == "post"]'
			)			
			commit('updateSanityPost', sanityPost)
		} catch (err) {
			console.log(err)
		}
	}
}