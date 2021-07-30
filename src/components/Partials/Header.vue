<template>
    <div>
        <div class="bg-gray-700 py-4 px-3 flex items-center justify-center">
            <img src="../../assets/logo.png" alt="Logo" class="h-10 sm:h-12 mr-2">
            <h1 class="text-center text-white text-lg sm:text-xl md:text-2xl font-medium md:font-semibold">Formularios Avanzados con Vuex - VueRouter y Vee-Validate</h1>
        </div>
        <nav-app></nav-app>
    </div>
</template>

<script>
    import NavApp from './Nav.vue'
    export default {
        name: 'Header',
        components:{
            NavApp
        }
    }
</script>
