<template>
    <div class="container mx-auto bg-gray-100 min-h-screen pt-8">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>


<script>
    export default {
        name: 'Main'
    }
</script>
