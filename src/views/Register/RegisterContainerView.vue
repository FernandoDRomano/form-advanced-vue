<template>
    <div>
        <transition name="fade" mode="out-in">
            <router-view class="mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">  
            </router-view>
        </transition>
    </div>

</template>

<script>
    export default {
        name: 'RegisterContainerView'
    }
</script>
