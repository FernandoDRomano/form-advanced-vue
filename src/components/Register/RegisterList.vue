<template>
  <div class="">
    <table v-if="registers.length" class="min-w-max w-full table-auto shadow-lg">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 text-left">Nombre</th>
          <th class="py-3 px-6 text-left">Actividad</th>
          <th class="py-3 px-6 text-center">Acciones</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <register-item 
            v-for="register in registers" 
            :key="register.id"
            :register="register">
        </register-item>
      </tbody>
    </table>

    <div v-else class="py-4 border bg-white rounded-md shadow-md">
        <h3 class="text-center font-medium">No existen registros creados aún</h3>
    </div>
  </div>
</template>

<script>
import RegisterItem from "./RegisterItem.vue";

export default {
  name: "RegisterList",
  props: {
    registers: {
      type: Array,
      required: true,
    },
  },
  components: {
    RegisterItem,
  },
};
</script>
