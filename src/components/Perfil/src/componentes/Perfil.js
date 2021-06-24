import CrearTextoForm from "../../../CrearTextoForm.vue"
import EditarPerfil from "../../src/componentes/EditarPerfil.vue"

export default {
  name: "Perfil",
  components: {
    CrearTextoForm,
    EditarPerfil
  },
  props: [],
  data() {
    return {
      buttons: [{
        id: "crear-texto",
        text: "Crear nuevo texto"
      }, 
      {
        id: "editar-perfil",
        text: "Editar perfil"
      }, 
      {
        id: "cambiar-password",
        text: "Cambiar contraseña"
      }],
      view: "crear-texto"
    };
  },
  mounted() {},
  methods: {
    getButtonClass(id)  {
      if (id === this.view) {
        return "btn btn-poiesis"
      } else {
        return "btn btn-outline-poiesis"
      }
    },
    onChangeView(id) {
      this.view = id
    }
  },
  computed: {

  },
};
