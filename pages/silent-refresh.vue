<template>
    <h3>Carregando...</h3>
  </template>
  
  <script lang="ts" setup>
  import { useServices } from '@/composables/useServices'
  
  const services = useServices()
  const router = useRouter()
  
  const silentRefreshOidc = async () => {
    try {
      await services.$auth.renewToken()
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  await silentRefreshOidc()
  </script>