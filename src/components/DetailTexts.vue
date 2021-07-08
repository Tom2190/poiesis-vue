<template>
  <section>
    <div class="hero-image ficcion">
      <div class="hero-text">
        <div>
          <h1 class="font-abril">{{ result.title }}</h1>
        </div>
      </div>
    </div>

    <div class="container mt-4 mb-4">
      <div class="row">
        <div class="col-md-10 center">
          <h6>
            <strong>{{ result.userName }}</strong>
          </h6>
          <p>Fecha de creación: {{ result.createdAt | formatDate }}</p>
          <div class="seccion-texto">
            <pre>
            {{ result.content }}
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
import moment from "moment"
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
    methods: {
     async getText(id) {
      const res= await this.axios.get(
        `http://localhost:3000/texts/detail?textId=${id}`
      );
      this.result = res.data;

     },
    },
     filters: {
       formatDate: function(date){
        return moment(date).locale('es').format('L')
       }
     }
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
