import theme from '@nuxt/content-theme-docs'

export default theme({
    generate: {
        dir: 'dist/docs/titlemanager'
    },

    router: {
        base: '/docs/titlemanager/'
    }
})
