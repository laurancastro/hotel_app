<template>
    <div id="VerReserva">

        <h1>Estos son los detalles de la reserva:</h1>
        <p>Id de la reserva: <span>{{idReserva}}</span><br>
        Fecha de la reserva: <span> {{fechaReserva}}</span><br>
        Fecha de llegada: <span>{{fechaLlegada}}</span><br>
        Fecha de salida: <span> {{fechaSalida}}</span><br>
        Habitación: <span>{{habitacion}}</span><br>
        Número de personas: <span> {{numeroPersonas}}</span><br>
        Nombres: <span>{{nombres}}</span><br>
        Apellidos: <span> {{apellidos}}</span><br>
        Email: <span>{{email}}</span><br>
        Teléfono: <span> {{telefono}}</span><br>
        Identificación: <span>{{tipoDocumento}} {{numeroDocumento}}</span><br>
        Dirección: <span>{{direccion}}, {{ciudad}}, {{pais}}</span></p><br>

    </div>

</template>

<script>
    import axios from 'axios';
    export default {
        name: 'VerReserva',
        data: function (){
            return {
                idReserva: 0,
                fechaReserva: '2020-12-09 21:30:48.628622',
                fechaLlegada: null,
                fechaSalida: null,
                habitacion: null,
                numeroPersonas: null,
                nombres: null,
                apellidos: null,
                email: null,
                telefono: null,
                tipoDocumento: null,
                numeroDocumento: null,
                pais: null,
                ciudad: null,
                direccion: null
                
            }
        },
        created: function(){
            this.idReserva = this.$route.params.idReserva
            let self = this
      
            axios.get("https://hotel-api-grupo13.herokuapp.com/reserva/" + this.idReserva)
                .then((result) => {
                    self.idReserva = result.data.idReserva
                    self.fechaReserva = result.data.fechaReserva
                    self.fechaLlegada = result.data.fechaLlegada
                    self.fechaSalida = result.data.fechaSalida
                    self.habitacion = result.data.habitacion
                    self.numeroPersonas = result.data.numeroPersonas
                    self.nombres = result.data.nombres
                    self.apellidos = result.data.apellidos
                    self.email = result.data.email
                    self.telefono = result.data.telefono
                    self.tipoDocumento = result.data.tipoDocumento
                    self.numeroDocumento = result.data.numeroDocumento
                    self.pais = result.data.pais
                    self.ciudad = result.data.ciudad
                    self.direccion = result.data.direccion
                })
                .catch((error) => {
                    alert(error.response.data.detail);
                    //alert("ERROR Servidor");
                });
    }
}
</script>

<style>
    #VerReserva{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Bahnschrift Light";
        background-color: #f3f3f3d8
}

    #VerReserva h1{
        font-size: 25px;
        color: #0d1620;
        font-family: "Bahnschrift Light", "Bahnschrift Light";
    
    }

    #VerReserva p{
        font-size: 22px;
        color: #283747;
        text-align: justify;
        
    }
    #VerReserva h3{
        font-size: 7px;
        color: #354a61;
    }

    #VerReserva span{
        color: #2592ad;
        font-weight: normal ;
        font-family: "Bahnschrift Light","Bahnschrift Light" ;
        
    }
</style>



