import theme from '@nuxt/content-theme-docs'

export default theme({
    generate: {
        dir: 'dist/docs/titlemanager'
    },

    router: {
        base: process.env.NODE_ENV === 'production' ? '/docs/titlemanager/' : undefined
    }
})
