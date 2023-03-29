<template>
	<div class="container">		
		<h3 class="my-2">Sie sind eingeloggt</h3>
		<h3>{{ user ?? 'no user'}}</h3> 
		<NuxtLink to="logout">logout</NuxtLink>
		<button type="button" @click="fetchData">Fetch Data</button>
	</div>
</template>

<script lang="ts" setup>
const services = useServices()

let user = ref(null)
await services.$auth.getUser().then((user) => {
	user = user
})

const fetchData = async () => {
	try {
		const apiResponse = await services.$application.getApiData()
		console.log('api response', apiResponse)
	} catch (error) {
		console.log(error)
	}
}
</script>

<style scoped>
h3 {
	color: blue;
}
</style>
