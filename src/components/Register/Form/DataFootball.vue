<template>
    <div class="px-3 sm:px-6 py-3 sm:py-4 my-4 bg-white border rounded-md">
        <h3 class="text-center sm:text-left font-light text-xl mb-2 md:mb-3">Fútbol</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-8">
            <ValidationProvider rules="required" v-slot="{ errors, valid }" class="mb-2 md:mb-0">
                <label class="text-sm lg:text-base md:block md:mb-1" for="team_name">Nombre del Equipo</label>
                <input 
                    :class="[errors.length ? 'border-red-400' : '', valid ? 'border-green-400' : '']"
                    class="border w-full px-4 lg:px-6 py-1 lg:py-2 rounded-md bg-gray-100 outline-none" 
                    v-model="description.team_name" 
                    type="text" 
                    name="team_name" 
                    id="team_name" 
                    placeholder="Ingrese el nombre del equipo">

                <span class="text-red-600 text-xs mt-1 font-light">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors, valid }" class="mb-2 md:mb-0">
                <label class="text-sm lg:text-base block md:mb-1" for="team_cuantity">Futbol</label>
                <select 
                    :class="[errors.length ? 'border-red-400' : '', valid ? 'border-green-400' : '']"
                    class="text-sm border w-full px-4 lg:px-6 py-2 lg:py-3 rounded-md bg-gray-100 outline-none" 
                    v-model="description.team_cuantity" 
                    name="team_cuantity" 
                    id="team_cuantity">

                        <option value="" selected>Seleccione una opción</option>
                        <option v-for="option in options" :key="option.value">
                            {{ option.text }}
                        </option>
                </select>

                <span class="text-red-600 text-xs mt-1 font-light">{{ errors[0] }}</span>
            </ValidationProvider>
            <div class="mb-2 md:mb-0 md:col-span-2">
                <label class="text-sm lg:text-base md:block md:mb-1" for="details">Descripción</label>
                <textarea 
                    class="border w-full px-4 lg:px-6 py-1 lg:py-2 rounded-md bg-gray-100 outline-none" 
                    v-model="description.details" 
                    type="text" 
                    name="details" 
                    placeholder="Ingrese detalles adicionales"></textarea>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DataFootball',
        props:{
            description:{
                required: true,
                type: Object
            }
        },
        data(){
            return{
                options: [
                    { text: '5 Integrantes', value: '5' },
                    { text: '11 Integrantes', value: '11' },
                ]
            }
        }
    }
</script>
