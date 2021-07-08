<template>
  <section>
    <div class="hero-image ficcion">
      <div class="hero-text">
        <div>
          <h1 class="font-abril">{{ this.$route.params.idTexto }}</h1>
          <h1 class="font-abril">{{ this.result.title }}</h1>
        </div>
      </div>
    </div>

    <div class="container mt-4 mb-4">
      <div class="row">
        <div class="col-md-10 center">
          <h6><strong>Nombre autor</strong></h6>
          <p>fecha</p>
          <div class="seccion-texto">
            <pre>
            Texto...
            
            </pre>
          </div>
        </div>
        <!--
        <div class="col-md-2">
          <a class="btn btn-info d-block mb-3">Editar</a>
          <a class="btn btn-danger d-block">Borrar</a>
        </div>-->
      </div>
    </div>
  </section>
</template>

<script lang="js">


  export default  {
    name: 'DetailTexts',
    props: [],
    async mounted() {
      let id = this.$route.params.idTexto;
      await this.getText(id);
    },
    data () {
      return {
        result: { },
        idTexto: "",
      }
    },
    computed: {

    },

    methods: {


     async getText(id) {
      const { texto } = await this.axios.get(
        `http://localhost:3000/texts/detail?textId=${id}`
      );

      this.result = texto.data.title;
      console.log(this.result);

    },
    },



}
</script>

<style scoped lang="css">
.hero-image.ficcion {
  background-image: url("../assets/fondo-ficcion.jpg");
  background-position: 50% 95%;
}
.hero-image.ficcion .hero-text {
  background-color: rgba(133, 78, 188, 0.68);
}
</style>
