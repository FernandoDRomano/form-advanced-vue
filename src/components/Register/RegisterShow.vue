<template>
    <div v-if="show" class="fixed top-0 left-0 min-h-screen w-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
        
        <div class="w-11/12 sm:w-9/12 md:w-4/6 lg:w-3/5 xl:w-2/5">
            <div class="bg-green-800 rounded-t-lg flex items-center">
                <h2 class="md:text-2xl font-medium text-center text-white py-2 flex-grow">Datos del Registro N° {{ selectedRegister.id }} </h2>
                <span @click="closeModal" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-5 md:h-6 w-5 md:w-6 text-white mr-2" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
                </span>
            </div>
            <div class="bg-white mb-5 py-4 md:py-6 px-5 md:px-10">
                <h3 class="text-base md:text-xl py-2 rounded-t-md bg-green-400 text-white font-semibold text-center">Datos Personales</h3>
                <div class="border rounded-b-md px-4 md:px-8 py-4 bg-gray-100 mb-3 md:mb-5">
                    <p class="font-light text-sm md:text-base">
                        <span class="font-medium">Nombre:</span> {{ getFullName }} 
                    </p>
                </div>

                <h3 class="text-base md:text-xl py-2 rounded-t-md bg-green-400 text-white font-semibold text-center">Actividad</h3>
                <div class="border rounded-b-md px-4 md:px-8 py-4 bg-gray-100">
                    <p class="font-light text-sm md:text-base">
                        <span class="font-medium">Deporte:</span> {{ getActivity }} 
                    </p>
                    <p class="font-light text-sm md:text-base">
                        <span class="font-medium">Inicio:</span> {{ getActivityBeginning }} 
                    </p>
                    <p class="font-light text-sm md:text-base">
                        <span class="font-medium">Nombre del equipo:</span> {{ getNameTeam }} 
                    </p>
                    <p v-if="getTeamCuantity" class="font-light text-sm md:text-base">
                        <span class="font-medium">Modalidad:</span> {{ getTeamCuantity }} 
                    </p>
                    <p v-if="getTeamDetails" class="font-light text-sm md:text-base">
                        <span class="font-medium">Información adicional:</span> {{ getTeamDetails }} 
                    </p>
                </div>
            </div>
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
        props:{
            id:{
                required: true,
                type: Number
            }
        },
        async mounted(){
            await this.setSelectedRegister({id: this.id})

            this.show = true
        },
        computed:{
            ...mapState('register', ['selectedRegister']),
            getFullName(){
                return `${this.selectedRegister.data_personal.last_name}, ${this.selectedRegister.data_personal.name}`
            },
            getActivity(){
                return this.selectedRegister.activity.name
            },
            getActivityBeginning(){
                return this.selectedRegister.activity.beginning
            },
            getNameTeam(){
                return this.selectedRegister.description.team_name
            },
            getTeamCuantity(){
                return this.selectedRegister.description.team_cuantity
            },
            getTeamDetails(){
                return this.selectedRegister.description.details
            }
        },
        methods:{
            ...mapActions('register', ['setSelectedRegister']),
            closeModal(){
                this.$emit('closeModal')
            }
        }
    }
</script>
