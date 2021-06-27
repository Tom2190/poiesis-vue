export default {
  name: "AreaComun",
  components: {},
  props: [],
  data() {
    return {
      url: `http://localhost:3000/texts?page=1&genre=fiction`,
      textos: [],
      genre: " "
    };
  },
  computed: {},
  async mounted() {
  
  },
  methods: {
    redirectToGenre(genre){
      this.$router.push(`/area-comun/${genre}`)
      
    },
    
  },
};
