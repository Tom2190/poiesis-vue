export default {
  name: 'src-componentes-inscripcion',
  components: {},
  props: [],
  data () {
    return {
      url: 'http://localhost:3000/signup',
      formData : this.getInicialData(),
      formState: {},
      nombreLengthMin : 3,
      nombreLengthMax: 10,
      dniLength: 8,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        name: '',
        lastName: '',
        email: '',
        password: '',
        chosenDateTime: '',
        writingFrequency: '',
        writingGenre: '',
        phone: '',
        dni: '',
      }
    },

    async enviar() {
      const user =  {...this.formData}
      console.log(user);
      try {
        const res = await this.axios.post(this.url, user);
        const token = res.data.token;
        sessionStorage.setItem('userSession', token);
        // const testToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InduUDVZMDVpcTdLNE51TEZOMHFTIiwiaWF0IjoxNjI0MzIzNjE4fQ.XxN09oUdxS-AGiXNMH8JJ6q8H9BoKxyrOzYDpmogZWk"
        // sessionStorage.setItem('userSession', testToken);
        await this.$store.dispatch('validateUserSession');
        await this.$router.push({path:"/inicio"});
      } catch (error) {
        console.log("ERROR!", error);
      }

      this.formData = this.getInicialData()
      this.formState._reset()
    }
  }
}


