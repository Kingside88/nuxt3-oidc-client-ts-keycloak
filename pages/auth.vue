<template>
    <h3>Carregando...</h3>
  </template>
  
  <script lang="ts" setup>
  import { useServices } from '@/composables/useServices'
  
  const services = useServices()
  const router = useRouter()
  
  const authenticateOidc = async () => {
    try {
      await services.$auth.signInCallback()
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  await authenticateOidc()
  </script>