// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: ['@pinia/nuxt'],
	runtimeConfig: {
		authorityUrl: process.env.AUTHORITY_URL,
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		clientRoot: process.env.CLIENT_ROOT,
		clientScope: process.env.CLIENT_SCOPE,
		coreUrl: process.env.CORE_URL,
		applicationUrl: process.env.APPLICATION_URL
	}    
})
