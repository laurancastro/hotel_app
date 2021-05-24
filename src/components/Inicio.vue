<template>
    <div  id="myForm">
        <form @submit="postData" method="POST">
          <h3>Antes de reservar: Comprueba la disponibilidad. </h3>

          <label for="fechaLlegada">Fecha de llegada: </label>
            <input type="date" name="fechaLlegada" id="fechaLlegada" value='2021-01-01' 
                    min="2020-12-15" required v-model="posts.fechaLlegada">
          <label for="FechaSalida">Fecha de salida: </label>
            <input type="date" name="FechaSalida" id="FechaSalida" value='2021-01-01' 
                    min="2020-12-15" required v-model="posts.fechaSalida">
          <hr>

          <label for="habitacion">Habitacion</label>
              <select name="habitacion" id="habitacion" required v-model="posts.habitacion"> 
                <option value="Estándar">Estándar</option>
                <option value="Doble">Doble</option>
                <option value="Suite">Suite</option>
              </select>
          <hr>

          <label for="numeroPersonas">Número de personas</label>
            <select name="numeroPersonas" id="numeroPersonas" v-model="posts.numeroPersonas">
              <option value=1>1</option>
              <option value=2>2</option>
              <option value=3>3</option>
              <option value=4>4</option>
              <option value=5>5</option>
              <option value=6>6</option>
            </select>
          <hr>

          <input type="submit" value="Reservar">
        </form>
      </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios)

    export default {
        name: "reservaPost",
        data(){
            return {
                posts: {
                    idReserva: 1,
                    fechaReserva: '2020-12-09 21:30:48.620822',
                    fechaLlegada: null,
                    fechaSalida: null,
                    habitacion: null,
                    numeroPersonas: null,
                    nombres: "str",
                    apellidos: "str",
                    email: "str",
                    telefono: 99999,
                    tipoDocumento: "NN",
                    numeroDocumento: 12345,
                    pais: "str",
                    ciudad: "str",
                    direccion: "str"
                }
            }
        },
        methods: {
            postData(e){
                this.axios.post("https://hotel-api-grupo13.herokuapp.com/reserva/disponibilidad", this.posts)
                .then((result)=>{
                    //this.posts.detalles = JSON.stringify(result.data)
                    //window.location("../reserva/hacerReserva")
                    if (result.status == 200) {
                            alert("Tenemos disponibilidad para la fecha indicada. \nDa click en aceptar para continuar con la reserva.");
                            window.location = "../hacer-reserva/reservar" 
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
