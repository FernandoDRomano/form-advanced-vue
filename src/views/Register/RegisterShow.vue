<template>
    <div v-if="show" class="mx-auto w-11/12 bg-white rounded-md shadow-lg mb-5 py-8 px-10">
        <h2 class="text-2xl font-medium text-center mb-4">Datos del Registro N° {{ selectedRegister.id }} </h2>
        
        <h3 class="text-xl py-2 rounded-t-md bg-green-400 text-white font-semibold text-center">Datos Personales</h3>
        <div class="border rounded-b-md px-8 py-4 bg-gray-100 mb-5">
            <p class="font-light">
                <span class="font-medium">Nombre:</span> {{ selectedRegister.data_personal.name }} 
            </p>
        </div>

        <h3 class="text-xl py-2 rounded-t-md bg-green-400 text-white font-semibold text-center">Actividad</h3>
        <div class="border rounded-b-md px-8 py-4 bg-gray-100">
            <p class="font-light">
                <span class="font-medium">Deporte:</span> {{ selectedRegister.activity.name }} 
            </p>
            <p class="font-light">
                <span class="font-medium">Inicio:</span> {{ selectedRegister.activity.beginning }} 
            </p>
            <p class="font-light">
                <span class="font-medium">Nombre del equipo:</span> {{ selectedRegister.description.team_name }} 
            </p>
            <p class="font-light">
                <span class="font-medium">Modalidad:</span> {{ selectedRegister.description.team_cuantity }} 
            </p>
            <p class="font-light">
                <span class="font-medium">Información adicional:</span> {{ selectedRegister.description.details }} 
            </p>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'RegisterShow',
        data(){
            return{
                show: false
            }
        },
        async mounted(){
            await this.setSelectedRegister({id: this.$route.params.id})

            this.show = true
        },
        computed:{
            ...mapState('register', ['selectedRegister']),
            getFullName(){
                return `${this.selectedRegister.data_personal.last_name}, ${this.selectedRegister.data_personal.name}`
            }
        },
        methods:{
            ...mapActions('register', ['updateRegister', 'setSelectedRegister']),
        }
    }
</script>
