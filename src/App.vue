<template>
  <div id="app">
    <div class="header">
        <a href="../Inicio">
          <img src="./assets/Logo-hotel.png">
        </a>
    
      <nav>
        <form>
          <input type="text" placeholder="Id de reserva" name="idReserva" 
              pattern="[0-9]{1,15}" required v-model="idres">
          <button type="submit" v-on:click="verReserva">Buscar reserva</button>
        </form>
          <!-- <button v-on:click="login" v-if="is_auth == 'false'"> Iniciar Sesión </button> -->
          <!-- <button v-on:click="cerrarSesion" v-if="is_auth2 == 'false'"> Cerrar Sesión </button> -->
      </nav>
    </div>

    <div class="main-component">
      <router-view></router-view>   
    </div>

        <div class="footer">
      <h2>Desarrollado para Misión TIC 2022. Todos los derechos reservados ©</h2>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {


  name: 'App',

  components: {},

  data: function(){
    return {
      idres: this.$refs.idres,
      is_auth: localStorage.getItem('isAuth') || true,
      is_auth2: localStorage.getItem('isAuth2') || false,
      current_email: localStorage.getItem('currentEmail')
    }
  },
  methods: {
    init: function(){
      if(this.$route.name != "root"){
        this.$router.push({name: "root"})
      }
    },
    login: function(){
      if(this.$route.name != "login"){
        this.$router.push({name: "login"})
      }
    },
    verReserva: function(){
      console.log("El valor de idres es: " + this.idres)
      if(this.idres != undefined)
        //axios.get("http://localhost:8000/reserva/" + this.idres).then((result)=>{});
        this.$router.push({name: "ver_reserva", params:{idReserva:this.idres}})
      else
        alert("Ingrese un número de reserva");
      },
    cerrarSesion: function(){
      localStorage.setItem('isAuth', false)
      localStorage.setItem('isAuth2', true)
      localStorage.setItem('currentEmail', "")
      localStorage.setItem('count',"")
      console.log(typeof this.is_auth)
      console.log(this.is_auth2)
      window.location = "../Inicio/"
    },
  },
  beforeCreate: function(){
    localStorage.setItem('count', localStorage.getItem('count')+1)
    if (localStorage.getItem('count') == "1"){
      localStorage.setItem('isAuth', false)
    }
  }
}
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0; 
	padding: 0;
}

 body {
    margin: 0 0 0 0;
    background-color: #e5e5e5;
    width: 100%; 
  }
  .header{
    width: 100%;
    background-color: #ffffff ;
    color:#E5E7E9 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "bahnschrift light";
  }


  .header img {
   height: 100%; 
  
  }
  
  .header a {
   display:block;
   height: 80px; 
    margin-left:15px;
  }
  
  
  #app {
    display: grid;
    grid-template-rows: 90px 1fr 70px;
    height: 100vh;
  }
  
  .header form {
    padding: 10px;
    display: flex; 
    flex-direction: column;
  }
  
  #app > div.header > nav > form > input[type=text]  {
    width: 130px;
    color: #464545;
    background: #fffffff3;
    border: 2px solid  #ebf6f8d7;
    border-radius: 8px;
    padding: 8px 5px;
    outline: none; 
    transition: background-color .3s;
    
  }
  .header nav {
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items:  center;
    font-size: 2rem;
  }
  .header nav button{
    color: #333333;
    background: #c2f1ff;
    border: 2px solid  #0c7f9cd7;
    border-radius: 8px;
    padding: 8px 10px;
    transition: background-color .3s;
  }
  .header nav button:hover{
    color: black;
    background: #F5F7F9;
    border: 1px solid  #2f8ca3b0;
  }
  .main-component{
    display:flex; 
    justify-content: center;
    flex-wrap: wrap;	
    width: 100%;
    margin: 0%;
    padding: 0%; 
    background-image: url('./assets/hotel_fondo.jpg');
     background-position: center;
     background-size:cover;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 980;
    height: 7vh;
    min-height: 60px;
    background-color: #fffffffb;
    color: #E5E7E9;
  }
  .footer h2{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: "Helvetica" ;
    font-size: 1rem;
    color: #2f8ca3b0;
  }

    #myForm {
        font-family: "Bahnschrift Light";     
        display:flex; 
        align-items: center;
        text-align: center;
    
    }
    
    #myForm h3 {
        margin-bottom: 15px; 
    
    }
    
    #myForm form {
      display: flex; 
      flex-direction: column;
      background-color: #f3f3f3d8;
      padding: 20px;
    }
    
    #myForm form div {
      display: flex; 
      justify-content: space-between;
     
       padding-top: 5px;
       padding-bottom: 12px; 
       border-bottom: 1px solid #9cb7d169;
       
      
    }
   #myForm form div input, #myForm form select {
    width: 130px; 
    
   }
   
   
    input[type=submit]{
        background-color: #2f8ca3b0;
        border: none;
        color: white;
        padding: 10px 30px;
         cursor: pointer;
        font-weight: bold;
        width: 130px;
        margin: 0 auto; 
       margin-top: 10px;
  }

 @media (min-width: 600px) {
  #myForm {
    padding: 50px;
  }
	.main-component{
  	width: 100%;
	}
	.header nav {
  	height: 100%;
    width: 40%;
  }
  .header form {
    flex-direction: row;
  }
  	
		#myForm form {
   
      padding: 100px;
    }
}
	
@media  (min-width: 800px) {
	.main-component {
		width: 100%; 
		margin-left: auto; 
		margin-right: auto;}
		}
	
</style>
