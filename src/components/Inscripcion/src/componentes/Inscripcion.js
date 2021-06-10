export default {
  name: "Formulario",
  components: {},
  props: [],
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      nombreLengthMin: 3,
      nombreLengthMax: 15,
      edadMin: 18,
      edadMax: 120,
      url: "https://60a5969fc0c1fd00175f40c0.mockapi.io/api/users",
    };
  },
  computed: {},
  mounted() {},
  methods: {
    getInicialData() {
      return {
        name: "",
        age: "",
        email: "",
      };
    },
    async postUsuario() {
      try {
        await this.axios.post(this.url, this.formData, {
          "content-type": "application/json",
        });
        this.formData = this.getInicialData();
        this.formState._reset();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
