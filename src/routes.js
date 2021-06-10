import Vue from "vue";
import VueRouter from "vue-router";

import Inicio from "./components/Inicio/index.vue";
import Textos from "./components/Textos/index.vue";
import Inscripcion from "./components/Inscripcion/index.vue";
import AreaComun from "./components/AreaComun/index.vue";
import Login from "./components/Login/index.vue";
import Perfil from "./components/Perfil/index.vue";
import DetalleTexto from "./components/DetalleTexto.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/inicio" },
    { path: "/inicio", component: Inicio },
    { path: "/inscripcion", component: Inscripcion },
    { path: "/perfil", component: Perfil },
    { path: "/area-comun", component: AreaComun },
    { path: "/textos", component: Textos },
    { path: "/textos/:idTexto", component: DetalleTexto },
    { path: "/login", component: Login },
  ],
});
