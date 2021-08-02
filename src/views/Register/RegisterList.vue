<template>
    <div>
        <h2 class="text-center text-xl md:text-3xl font-bold md:font-semibold mb-2 md:mb-4">Listado de Registros</h2>
        <div class="flex justify-center md:justify-end my-3">
            <button 
                @click="showViewCreateRegister"
                class="bg-green-700 px-4 py-1 text-sm sm:text-base text-white font-light rounded-lg shadow-lg">
                Nuevo +
            </button>
        </div>
        <list :registers="registers" @showRegister="showRegister"></list>
        <register-show v-if="showModal" :id="idRegiter" @closeModal="closeModal"></register-show>
    </div>
</template>

<script>
    import List from '@/components/Register/RegisterList.vue'
    import RegisterShow from '@/components/Register/RegisterShow.vue'
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'RegisterList',
        async mounted(){
            await this.getRegisters()
        },
        data(){
            return{
                showModal: false,
                idRegiter: ''
            }
        },
        components:{
            List,
            RegisterShow
        },
        computed:{
            ...mapState('register', ['registers']),
        },
        methods:{
            ...mapActions('register', ['getRegisters']),
            showViewCreateRegister(){
                this.$router.push({name: 'registro-crear'})
            },
            closeModal(){
                this.showModal = false
            },
            showRegister(id){
                this.idRegiter = id
                this.showModal = true
            }
        }
    }
</script>
