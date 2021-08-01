<template>
    <ValidationObserver v-slot="{invalid, handleSubmit}">
        <form @submit.prevent="handleSubmit(submitForm)" class="border px-4 md:px-8 pt-6 pb-4 md:pt-10 md:pb-6 rounded-lg shadow-md mb-8 md:mb-0">
            <h2 class="text-center font-medium text-2xl mb-4">{{ title }}</h2>
            <data-personal :data_personal="formData.data_personal"></data-personal>
            <data-activity :activity="formData.activity" @changeActivity="changeActivity"></data-activity>
            <component :is="getComponent" :description="formData.description"></component>
            <ValidationProvider :rules="{ required: { allowFalse: false } }" v-slot="{ errors }" class="flex items-center">
                    <input 
                        v-model="formData.terms" 
                        type="checkbox" 
                        name="terms" 
                        id="terms" 
                        class="mr-3 h-4 w-4 md:h-5 md:w-5">
                    <label for="terms" :class="[errors.length ? 'text-red-600' : '']" >
                        Aceptar los terminos y condiciones
                    </label>
            </ValidationProvider>
            <div class="flex justify-center mt-3">
                <button 
                    :disabled="invalid" 
                    :class="classBtn"
                    class="px-5 md:px-10 py-2 md:py-3 uppercase rounded-md text-white transition-colors duration-300 ease-in-out disabled:opacity-50" 
                    type="submit">
                    {{ btnText }}
                </button>
            </div>
        </form>
    </ValidationObserver>
</template>

<script>
    import DataPersonal from './DataPersonal.vue'
    import DataActivity from './DataActivity.vue'
    import DataFootball from './DataFootball.vue'
    import DataBasquet from './DataBasquet.vue'
    import DataRugby from './DataRugby.vue'

    export default {
        name: 'RegisterForm',
        components:{
            DataPersonal,
            DataActivity, 
            DataFootball,
            DataBasquet,
            DataRugby
        },
        props:{
            formData:{
                required: true,
                type: Object
            },
            title:{
                type: String,
                required: true
            },
            btnText:{
                type: String,
                required: true
            },
            classBtn:{
                type: String,
                required: true,
                default: 'bg-green-500'
            }
        },
        data(){
            return{
                isComponent: ''
            }
        },
        methods:{
            changeActivity(){
                this.formData.description.team_name = this.formData.description.team_cuantity = this.formData.description.details = ''
            },
            submitForm(){
                this.$emit('submitForm')
            }
        },
        computed:{
            getComponent(){
                switch (this.formData.activity.name) {
                    case 'futbol':
                        return 'DataFootball'

                    case 'basquet':
                        return 'DataBasquet'

                    case 'rugby':
                        return 'DataRugby'
                }
            }
        }
    }
</script>
