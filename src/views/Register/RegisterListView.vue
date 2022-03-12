<template>
    <div>
        <h2 class="text-center text-xl md:text-3xl font-bold md:font-semibold mb-2 md:mb-4">Listado de Registros</h2>
        <div class="flex justify-center md:justify-end my-3">
            <button 
                @click="showViewCreateRegister"
                class="bg-green-700 flex items-center px-4 py-1 text-sm sm:text-base text-white font-light rounded-lg shadow-lg">
                Nuevo  
                <svg xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 24 24" class="ml-2 h-4 md:h-5 w-4 md:w-5 fill-current">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
            </button>
        </div>
        <list :registers="registers" @showRegister="showRegister"></list>
        <transition name="opacity-scale" mode="out-in">
            <register-show v-if="showModal" :id="idRegiter" @closeModal="closeModal"></register-show>
        </transition>
    </div>
</template>

<script>
    import List from '@/components/Register/RegisterList.vue'
    import RegisterShow from '@/components/Register/RegisterShow.vue'
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'RegisterListView',
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
