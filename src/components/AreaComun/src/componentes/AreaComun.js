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
    redirectToGenre(genre){
      this.$router.push(`/area-comun/${genre}`)
    }
  },
};
