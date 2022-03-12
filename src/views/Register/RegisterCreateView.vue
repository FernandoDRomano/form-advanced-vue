<template>
    <div>
        <form-data 
            :form-data="formData"
            @submitForm="submitForm"
            classBtn="bg-green-600"
            btnText="Crear Registro"
            title="Crear Registro">
        </form-data>
    </div>
</template>

<script>
    import FormData from '@/components/Register/Form/RegisterForm.vue'
    import { mapActions } from 'vuex'
    
    export default {
        name: 'RegisterCreateView',
        components:{
            FormData
        },
        data(){
            return{
                formData:{
                    data_personal:{
                        name: '',
                        last_name: '',
                    },
                    activity:{
                        beginning: null,
                        name: ''
                    },
                    description:{
                        team_name: '',
                        team_cuantity: '',
                        details: ''
                    },
                    terms: false
                }
            }
        },
        methods:{
            ...mapActions('register', ['addRegister']),
            async submitForm(){
                await this.addRegister(this.formData)
                this.$router.push({
                    name: 'registro'
                })
            }
        }
    }
</script>
