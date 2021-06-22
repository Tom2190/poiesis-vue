export default {
  name: "AreaComun",
  components: {},
  props: [],
  data() {
    return {
      url: `http://localhost:3000/texts?page=1&genre=fiction`,
      textos: []
    };
  },
  computed: {},
  async mounted() {
    await this.getTexts()
  },
  methods: {
    async getTexts() {
      console.log('getUsuarios')
      
        try {
          let respuesta = await this.axios(this.url)
          console.log('AXIOS GET',respuesta.data)
          this.textos = respuesta.data
        }
        catch(error) {
          console.log(error)
        }
    }
  },
};
