<template>
    <div class="px-3 sm:px-6 py-3 sm:py-4 my-4 bg-white border rounded-md">
        <h3 class="text-center sm:text-left font-light text-xl mb-2 md:mb-3">Datos Personales</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-8">
            <ValidationProvider rules="required" v-slot="{ errors, valid }" class="mb-2 md:mb-0">
                <label class="text-sm lg:text-base md:block md:mb-1" for="name">Nombre</label>
                <input 
                    :class="[errors.length ? 'border-red-400' : '', valid ? 'border-green-400' : '']" 
                    class="border w-full px-4 lg:px-6 py-1 lg:py-2 rounded-md bg-gray-100 outline-none" 
                    v-model="data_personal.name" 
                    type="text" 
                    name="name" 
                    placeholder="Ingrese su nombre">
                
                <span class="text-red-600 text-xs mt-1 font-light">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors, valid }" class="mb-2 md:mb-0">
                <label class="text-sm lg:text-base md:block md:mb-1" for="last_name">Apellido</label>
                <input 
                    :class="[errors.length ? 'border-red-400' : '', valid ? 'border-green-400' : '']" 
                    class="border w-full px-4 lg:px-6 py-1 lg:py-2 rounded-md bg-gray-100 outline-none" 
                    v-model="data_personal.last_name" 
                    type="text" 
                    name="last_name" 
                    placeholder="Ingrese su Apellido">
                
                <span class="text-red-600 text-xs mt-1 font-light">{{ errors[0] }}</span>
            </ValidationProvider>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DataPersonal',
        props:{
            data_personal:{
                required: true,
                type: Object
            }
        }
    }
</script>
