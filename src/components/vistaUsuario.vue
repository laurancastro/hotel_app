<template>
    <div>
        <form>
          <button type="submit" v-on:click="verReservas">Ver Reservas</button>
        </form>
        <form>
          <button type="submit" v-on:click="verDatos">Ver datos</button>
        </form>

        <table id="tabla" width="85%" v-if="visibleReservas">
            <colgroup>
                <col span="1" style="width: 10%;">
                <col span="1" style="width: 90%;">
            </colgroup>
            <tr>
                <th>Número</th>
                <th>Detalles</th>
            </tr>
            <tr>
                <td>1</td>
                <td><span>{{data1}}</span></td>
            </tr>
            <tr>
                <td>2</td>
                <td><span>{{data2}}</span></td>
            </tr>
            <tr>
                <td>3</td>
                <td><span>{{data3}}</span></td>
            </tr>
            <tr>
                <td>4</td>
                <td><span>{{data4}}</span></td>
            </tr>
            <tr>
                <td>5</td>
                <td><span>{{data5}}</span></td>
            </tr>

        </table>

        <div v-if="visibleDatos" id="Ver">
            <p>Nombres: <span>{{datosUser.nombres}}</span><br>
            Apellidos: <span> {{datosUser.apellidos}}</span><br>
            Teléfono: <span> {{datosUser.telefono}}</span><br>
            País: <span> {{datosUser.pais}}</span><br>
            Ciudad: <span> {{datosUser.ciudad}}</span><br>
            Dirección: <span>{{datosUser.direccion}}</span></p><br>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios)

    export default {
        name: "vistaUsuario",
        data(){
            return {
                emailUser:"",
                reservas:{},
                data1:"",
                data2:"",
                data3:"",
                data4:"",
                data5:"",
                visibleReservas: false,
                visibleDatos: false,
                datosUser:{
                        nombres: "",
                        apellidos: "",
                        telefono: "",
                        pais: "",
                        ciudad: "",
                        direccion: "",
                }
            }
        },
        methods: {
            verReservas(e){
                this.axios.get("http://127.0.0.1:8000/perfil/reservas/" + localStorage.getItem('currentEmail'))
                .then((result)=>{
                    //this.posts.detalles = JSON.stringify(result.data)
                    //window.location("../reserva/hacerReserva")
                    this.visibleReservas = true
                    this.visibleDatos = false
                    console.log(result.data)
                    this.reservas = result.data
                    this.data1 = result.data.a1
                    this.data2 = result.data.a2
                    this.data3 = result.data.a3
                    this.data4 = result.data.a4
                    this.data5 = result.data.a5
                })
                .catch(error=>{
                    console.log(error.response)
                    alert(error.response.data.detail);
                })
                e.preventDefault();
            },
            verDatos(e){
                this.axios.get("http://127.0.0.1:8000/usuarios/" + localStorage.getItem('currentEmail'))
                .then((result)=>{
                    this.datosUser.nombres = result.data.nombres
                    this.datosUser.apellidos = result.data.apellidos
                    this.datosUser.telefono = result.data.telefono
                    this.datosUser.pais = result.data.pais
                    this.datosUser.ciudad = result.data.ciudad
                    this.datosUser.direccion = result.data.direccion
                    this.visibleReservas = false
                    this.visibleDatos = true
                })
                .catch(error=>{
                    console.log(error.response)
                    alert(error.response.data.detail);
                })
                e.preventDefault();
            }
        }
    }
</script>

<style>
    table, th, td {
        border: 1px solid black;
        background-color: #f3f3f3d8;
        font-family: "bahnschrift light";
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    tr:hover {
        background-color: black;
    }
    th {
        background-color: #2f8ca395;
    }
    #Ver{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Bahnschrift Light";
        background-color: #f3f3f3d8
    }
    #Ver h1{
        font-size: 25px;
        color: #0d1620;
        font-family: "Bahnschrift Light", "Bahnschrift Light";
    }
    #Ver p{
        font-size: 22px;
        color: #283747;
        text-align: justify;
        
    }
    #Ver h3{
        font-size: 7px;
        color: #354a61;
    }

    #Ver span{
        color: #2592ad;
        font-weight: normal ;
        font-family: "Bahnschrift Light","Bahnschrift Light" ;
        
    }
</style>