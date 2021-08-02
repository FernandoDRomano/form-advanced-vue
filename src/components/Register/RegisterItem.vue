<template>
  <tr class="bg-white border-b border-gray-200 hover:bg-gray-100">
    <td class="py-3 px-2 md:px-6 text-left whitespace-nowrap">
      <div class="flex items-center">
        <span class="font-medium">{{ getFullName }}</span>
      </div>
    </td>
    <td class="py-3 px-2 md:px-6 text-left hidden sm:table-cell">
      <span> {{ getActivity }} </span>
    </td>
    <td class="py-3 px-2 md:px-6 text-left hidden lg:table-cell">
      <span> {{ getNameTeam }} </span>
    </td>
    <td class="py-3 px-2 md:px-6 text-center">
      <div class="flex item-center justify-center">
        <div @click="showFormUpdate" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 md:h-5 w-4 md:w-5 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>

        <div @click="deleteRegister" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 md:h-5 w-4 md:w-5 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>

        <div @click="showRegister" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 md:h-5 w-4 md:w-5 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "RegisterItem",
  props: {
    register: {
      type: Object,
      required: true,
    },
  },
  computed:{
    getFullName(){
      return `${this.register.data_personal.last_name}, ${this.register.data_personal.name}`;
    },
    getActivity(){
      return `${this.register.activity.name.toUpperCase()}`
    },
    getNameTeam(){
      return `${this.register.description.team_name}`
    }
  },
  methods:{
    ...mapActions({
      _deleteRegister: 'register/deleteRegister'
    }),
    async deleteRegister(){
      await this._deleteRegister(this.register)
    },
    showFormUpdate(){
      this.$router.push({
        name: 'registro-actualizar',
        params:{
          id: this.register.id
        }
      })
    },
    showRegister(){
      this.$emit('showRegister', this.register.id)
    }
  }
};
</script>
