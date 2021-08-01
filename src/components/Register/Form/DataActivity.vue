<template>
    <div class="px-3 sm:px-6 py-3 sm:py-4 my-4 bg-white border rounded-md">
        <h3 class="text-center sm:text-left font-light text-xl mb-2 md:mb-3">Actividad</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-8">
            <ValidationProvider rules="required" v-slot="{ errors, valid }" class="mb-2 md:mb-0">
                <label class="text-sm lg:text-base md:block md:mb-1" for="date">Inicio</label>
                <datepicker 
                    :class="[errors.length ? 'border-red-400' : '', valid ? 'border-green-400' : '']" 
                    class="border w-full px-2 py-1 lg:py-2 rounded-md bg-gray-100 outline-none ring-0" 
                    v-model="dateAuxiliar"
                    :language="es" 
                    format="dd MMMM yyyy"
                    :required="true" 
                    name="date" 
                    id="date" 
                    @closed="fechaSeleccionada" 
                    placeholder="Seleccione la fecha">
                </datepicker>

                <span class="text-red-600 text-xs mt-1 font-light">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors, valid }" class="mb-2 md:mb-0">
                <label class="text-sm lg:text-base md:block md:mb-1" for="name_activity">Actividad</label>
                <select 
                    :class="[errors.length ? 'border-red-400' : '', valid ? 'border-green-400' : '']" 
                    class="text-sm border w-full px-4 lg:px-6 py-2 lg:py-3 rounded-md bg-gray-100 outline-none" 
                    @change="changeAct" 
                    v-model="activity.name" 
                    name="name_activity" 
                    id="name_activity">

                        <option value="" selected>Seleccione una opción</option>
                        <option 
                            v-for="option in options" 
                            :key="option.value" 
                            :value="option.value">
                            {{option.text}}
                        </option>
                </select>

                <span class="text-red-600 text-xs mt-1 font-light">{{ errors[0] }}</span>
            </ValidationProvider>
        </div>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import {es} from 'vuejs-datepicker/dist/locale'

    export default {
        name: 'DataActivity',
        props:{
            activity:{
                required: true,
                type: Object
            }
        },
        components:{
            Datepicker
        },
        data(){
            return{
                es: es,
                dateAuxiliar: null,
                options: [
                    { text: 'Futbol', value: 'futbol' },
                    { text: 'Basquet', value: 'basquet' },
                    { text: 'Rugby', value: 'rugby' }
                ]
            }
        },
        methods:{
            changeAct(){
                console.log('cambiando actividad')
                this.$emit('changeActivity')
            },

            fechaSeleccionada() {
                const date = new Date(this.dateAuxiliar)
                const final = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
                this.activity.beginning = final
            },

        },
    }
</script>
