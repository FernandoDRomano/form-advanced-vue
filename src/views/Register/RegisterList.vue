<template>
    <div>
        <h2 class="text-center text-3xl font-semibold mb-4">Listado de Registros</h2>
        <div class="flex justify-end my-3">
            <button 
                @click="showViewCreateRegister"
                class="bg-green-700 px-4 py-1 text-white font-light rounded-lg shadow-lg">
                Nuevo +
            </button>
        </div>
        <list :registers="registers"></list>
    </div>
</template>

<script>
    import List from '@/components/Register/RegisterList.vue'
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'RegisterList',
        async mounted(){
            await this.getRegisters()
        },
        components:{
            List
        },
        computed:{
            ...mapState('register', ['registers']),
        },
        methods:{
            ...mapActions('register', ['getRegisters']),
            showViewCreateRegister(){
                this.$router.push({name: 'registro-crear'})
            }
        }
    }
</script>
