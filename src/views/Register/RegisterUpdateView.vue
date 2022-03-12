<template>
    <div>
        <form-data 
            v-if="show"
            :form-data="formData"
            @submitForm="submitForm"
            classBtn="bg-yellow-600"
            btnText="Actualizar Registro"
            title="Editar Registro">
        </form-data>
    </div>
</template>

<script>
    import FormData from '@/components/Register/Form/RegisterForm.vue'
    import { mapActions, mapState } from 'vuex'

    export default {
        name: 'RegisterUpdateView',
        components:{
            FormData
        },
        data(){
            return{
                formData: null,
                show: false
            }
        },
        async mounted(){
            await this.setSelectedRegister({id: this.$route.params.id})
            this.formData = this.selectedRegister

            //Formateo la fecha para asignarle al datepicker en el form
            const date = this.formData.activity.beginning.split('/')
            const newDate = `${date[2]}/${date[1]}/${date[0]}`
            this.formData.activity.beginning = new Date(newDate)

            this.show = true
        },
        computed:{
            ...mapState('register', ['selectedRegister'])
        },
        methods:{
            ...mapActions('register', ['updateRegister', 'setSelectedRegister']),
            updateFormatDate(){
                if(this.formData.activity.beginning){
                    const date = this.activity.beginning.split('/')
                    this.formData.activity.beginning = `${date[2]}/${date[1]}/${date[0]}`
                }
            },
            async submitForm(){
                await this.updateRegister(this.formData)
                this.$router.push({
                    name: 'registro'
                })
            }
        }
    }
</script>
