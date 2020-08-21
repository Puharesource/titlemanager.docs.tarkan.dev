import theme from '@nuxt/content-theme-docs'

export default theme({
    router: {
        base: process.env.NODE_ENV === 'production' ? '/docs/titlemanager/' : undefined
    }
})
