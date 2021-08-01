<template>
    <div class="px-3 sm:px-6 py-3 sm:py-4 my-4 bg-white border rounded-md">
        <h3 class="text-center sm:text-left font-light text-xl mb-2 md:mb-3">Basquet</h3>
        <div class="grid grid-cols-1 md:gap-4 lg:gap-8">
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
            <div class="mb-2 md:mb-0">
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
        name: 'DataBasquet',
        props:{
            description:{
                required: true,
                type: Object
            }
        }
    }
</script>
