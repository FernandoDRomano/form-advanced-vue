<template>
    <div>
        <h2 class="text-center text-3xl font-semibold mb-4">Listado de Registros</h2>
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
            ...mapActions('register', ['getRegisters'])
        }
    }
</script>
