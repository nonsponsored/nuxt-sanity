import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'fyu8sik4',
    dataset: 'production',
    useCdn: false,
    withCredentials: true
})