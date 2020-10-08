export default {
    target: 'static',


    app: ({ isDev }) => isDev ? '[name].js' : '[chunkhash].js',
    chunk: ({ isDev }) => isDev ? '[name].js' : '[chunkhash].js',
    css: ({ isDev }) => isDev ? '[name].css' : '[contenthash].css',
    img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]',
    font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
    video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]',


    /*
    ** Headers of the page
    */
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { name: 'robots', content: 'noindex,follow' },
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Home' }
        ],
        title: 'Home',
        link: [
            //{ rel: '', type: '', href: '' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    router: {
        // You can change the link active class name, also the exact active class name
        //linkActiveClass: ''
    },
    /*
    ** Global CSS
    */
    css: [
        '~/assets/project-name.scss'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/preview.client.js',
        '~/plugins/person.server.js',
        '~/plugins/post.server.js'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [

    ],
    /*
    ** Build configuration
    */
    build: {
        extractCSS: true,

    },
    generate: {
        fallback: true
    }
}
