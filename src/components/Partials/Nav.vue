<template>
    <nav class="bg-green-500 py-3">
        <div class="flex items-center justify-center w-11/12 mx-auto">
            <router-link 
                :to="{name: 'home'}" 
                class="flex items-center justify-center mx-2 px-3 text-white text-sm sm:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 md:h-5 w-4 md:w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Inicio
            </router-link>
            <router-link 
                :to="{name: 'registro'}" 
                class="flex items-center justify-center mx-2 px-3 text-white text-sm sm:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 md:h-5 w-4 md:w-5 mr-1 fill-current" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z"/></svg>
                Registros
            </router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>
