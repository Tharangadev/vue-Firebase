<template>
    <b-col cols="12" sm="5" class="mt-5">
        <b-card header-tag="header" footer-tag="footer">
            <h6 slot="header" class="mb-0">Reset email</h6>
            <b-card-text>
                <b-form @submit.prevent="sendemail">
                    <b-form-group>
                        <b-form-input placeholder="Enter your Email" type="email" v-model="resetemail"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-button variant="primary" type="submit" >Reset</b-button>
                    </b-form-group>
                </b-form>
            </b-card-text>
            <em slot="footer" class="footer-block d-flex justify-content-around">

            </em>
        </b-card>
    </b-col>
</template>

<script>
import firebase from "firebase"
let auth=firebase.auth()    
export default {
        name: "resetemail",
        data(){
            return{
                resetemail:""
            }
        },
        methods:{
            sendemail(){
let self=this
if(this.resetemail!=undefined && this.resetemail!=""){
auth.sendPasswordResetEmail(this.resetemail).then(function(){

              self.$store.dispatch('sucessAlert','password reset mail was sent')
self.$router.push('/login')
}).catch(function(err){
       self.$store.dispatch("addError",err.message);
})
}else
{
       self.$store.dispatch("addError", "Please fill the required feilds");
}
            }
        }
    }
</script>

<style scoped>

</style>
