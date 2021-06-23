export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      url: 'http://localhost:3000/login',
      formData : this.getInicialData(),
      formState: {}
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

    getInicialData() {
      return {
        email: '',
        password: ''
      }
    },

    async enviar() {
      const user =  {...this.formData}
      console.log(user);
      try {
        const res = await this.axios.post(this.url, user);
        const token = res.data.token;
        console.log(token);
        sessionStorage.setItem('userSession', token);
        // const testToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InduUDVZMDVpcTdLNE51TEZOMHFTIiwiaWF0IjoxNjI0MzIzNjE4fQ.XxN09oUdxS-AGiXNMH8JJ6q8H9BoKxyrOzYDpmogZWk"
        // sessionStorage.setItem('userSession', testToken);
        this.$store.dispatch('validateUserSession');
        this.$router.push({path:"/inicio"})
      } catch (error) {
        console.log("ERROR!", error);
      }

      this.formData = this.getInicialData()
      this.formState._reset()
    }
  }
}