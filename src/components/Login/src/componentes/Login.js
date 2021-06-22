export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
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

    enviar() {
      //... -> SPREAD Operator
      console.log({...this.formData})

      this.formData = this.getInicialData()
      this.formState._reset()
    }
  }
}