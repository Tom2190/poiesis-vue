import CambiarContrasenia from "../../../CambiarContrasenia.vue";
import CrearTextoForm from "../../../CrearTextoForm.vue";
import EditarPerfil from "../../../EditarPerfil.vue";
import Loader from "../../../Loader.vue";
import { getUser } from "../../../../client.js";

export default {
  name: "Perfil",
  components: {
    CrearTextoForm,
    EditarPerfil,
    CambiarContrasenia,
    Loader,
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
      isLoading: false,
    };
  },
  async mounted() {
    this.isLoading = true;
    const res = await this.getUserFromToken();
    this.user = res.data;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    console.log(res.data);
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
      const user = await getUser();
      return user;
    },
  },
  computed: {},
};
