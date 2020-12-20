import vueRouter from 'vue-router'

import reservaPost from './components/reservaPost'
import Inicio from './components/Inicio'
import VerReserva from './components/VerReserva'
import inicioSesion from './components/inicioSesion'
import vistaUsuario from './components/vistaUsuario'

import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: Inicio
        },
        {
            path: '/Inicio',
            name: "inicio",
            component: Inicio
        },
        {
            path: '/hacer-reserva/reservar',
            name: "reservar",
            component: reservaPost
        },
        {
            path: '/reserva/:idReserva',
            name: "ver_reserva",
            component: VerReserva
        },
        {
            path: '/login',
            name: "login",
            component: inicioSesion
        },
        {
            path: '/perfil',
            name: "perfil",
            component: vistaUsuario
        },
    ]
})
export default router