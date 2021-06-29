import CrearTextoForm from "../../../CrearTextoForm.vue";
import EditarPerfil from "../../../EditarPerfil.vue";
import { getUser } from "../../../../client.js";
export default {
  name: "Perfil",
  components: {
    CrearTextoForm,
    EditarPerfil,
  },
  props: [],
  data() {
    return {
      buttons: [
        {
          id: "crear-texto",
          text: "Crear nuevo texto",
        },
        {
          id: "editar-perfil",
          text: "Editar perfil",
        },
        {
          id: "cambiar-password",
          text: "Cambiar contraseña",
        },
      ],
      view: "crear-texto",
      user: {},
    };
  },
  async mounted() {
    await this.getUserFromToken();
  },
  methods: {
    getButtonClass(id) {
      if (id === this.view) {
        return "btn btn-poiesis";
      } else {
        return "btn btn-outline-poiesis";
      }
    },
    onChangeView(id) {
      this.view = id;
    },
    async getUserFromToken() {
      const res = await getUser();
      this.user = res.data;
      console.log(res.data);
    },
  },
  computed: {},
};
