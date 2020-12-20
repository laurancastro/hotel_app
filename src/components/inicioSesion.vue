<template>
    <div id="myForm">
         <form @submit="doLogin" method="POST">
          <h3>Iniciar Sesión</h3>

          <label for="email">Email: </label>
            <input type="email" name="email" id="email" required v-model="datosUser.email">
          <label for="password">Contraseña: </label>
            <input type="password" name="password" id="password" 
                    required v-model="datosUser.clave">
          <hr>
          <input type="submit" value="Iniciar Sesión">
        </form>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios)

    export default {
        name: "iniciarSesion",
        data(){
            return {
                datosUser: {
                    email:"",
                    clave:"",
                }
            }
        },
        methods: {
            doLogin(e){
                this.axios.post("http://127.0.0.1:8000/usuarios/auth/", this.datosUser)
                .then((result)=>{
                    //this.posts.detalles = JSON.stringify(result.data)
                    //window.location("../reserva/hacerReserva")
                    if (result.data.Autenticado == true) {
                            localStorage.setItem('isAuth', true)
                            localStorage.setItem('isAuth2', false)
                            localStorage.setItem('currentEmail', this.datosUser.email)
                            window.location = "../perfil/"
                    }
                    if (result.data.Autenticado == false) {
                        alert("Email o contraseña incorrecta")
                    }
                })
                .catch(error=>{
                    console.log(error.response)
                    alert(error.response.data.detail);
                })
                e.preventDefault();
            },
        }
    }
</script>