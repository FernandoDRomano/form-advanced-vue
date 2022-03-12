<template>
    <div class="text-center">
        <h2 class="text-8xl font-light mt-6 mb-4">Error 404</h2>
    <p class="text-xl font-light">Esta página no existe, intenta volver al <router-link :to="{name: 'home'}" class="text-green-500 font-bold">Inicio</router-link> </p> 
    </div>
</template>

<script>
    export default{
        name: 'Error404View'
    }
</script>