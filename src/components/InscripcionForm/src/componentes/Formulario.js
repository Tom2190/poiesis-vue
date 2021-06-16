
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState: {},
      nombreLengthMin : 3,
      nombreLengthMax: 10,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

    getInicialData() {
      return {
        nombre: '',
        apellido: '',
        phoneNumber: '',
        writingGenre: '',
        email: '',
        password: '',
        dni: '',
        readingFrequency: '',
        electionDate: '',
        experience: '',
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


