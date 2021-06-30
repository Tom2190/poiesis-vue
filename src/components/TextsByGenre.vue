<template>
  <section class="two-section-container">
    <div class="hero-image">
      <div class="hero-text">
        <div>
          <h1 class="font-abril">{{ this.$route.params.genre | formatGenre }}</h1>
        </div>
      </div>
    </div>
    
  

    <div class="bottom-section">
      
        <div class="barra">
          <div class="d-flex bd-highlight mb-3 flex-sm-row flex-column buscar">
            <input
                      class="form-control searchbar-input buscar"
                      v-model="criterioDeBusqueda"
                      type="search"
                      placeholder="Buscar por titulo"
                      aria-label="Search"
                    />
            <a href="#" class="searchbar-clear"></a>
            <button name="agregar" class="boton btn btn-info">Agregar nuevo texto</button>
          </div>
        </div>
   
      <div class="col">
        <div class="row">
          <div
            class="col-3 column card"
            v-for="(item, index) in filteredList()"
            :key="index"
            @click="redirectToDetailText(item.id)"
          >
            <h4 class="card-title">{{ item.title }}</h4>
            <p class="card-text">{{ item.userName }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  @click="redirectToTexto(texto)" -->
</template>

<script>
// import { mdbIcon, mdbFormInline, mdbInput } from "mdbvue";
export default {
  name: "texts-by-genre",
  components: {
    // mdbIcon,
    // mdbFormInline,
    // mdbInput,
  },
  props: [],

  data() {
    return {
      result: null,
      genre: "",
      criterioDeBusqueda: "",
    };
  },
  computed: {},
  async mounted() {
    let genre = this.$route.params.genre;
    await this.getTexts(genre);
  },

  methods: {
    async getTexts(genre) {
      let responseData = await this.axios.get(
        `http://localhost:3000/texts?page=1&genre=${genre}`
      );
      if (responseData.data) {
        console.log(responseData.data);
        this.result = responseData.data.content;
        //console.log(this.result);
      }
    },

    filteredList() {
      if (this.result) {
        return this.result.filter((post) => {
          return `${post.title}${post.userName}`
            .toLowerCase()
            .includes(this.criterioDeBusqueda.toLowerCase());
        });
      };
    },

    redirectToDetailText(id) {
      this.$router.push({ path: `/textos/${id}`})
    }

  },

  filters: {
  formatGenre: function (genre) {
    const genres =  { 
      poetry : "Poesia",
      non_fiction : "No Ficción",
      fiction : "Ficción"
    }
    return genres[genre]
  }
}
};
</script>

<style scoped>
.container {
  background-color: #ac87d1;
  color: white;
  border-radius: 10px;
  margin-left: 25px;
  margin-bottom: 25px;
}

* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 5px 10px 0px 20px;
  margin-left: 80px;
  margin-top: 20px;
}

/* Remove extra left and right margins, due to padding in columns */
.row {
  margin: 0 -5px;
  padding: 10px 15px;
}

/* Clear floats after the columns */
/*
.row:after {
  content: "";
  display: table;
  clear: both;
}
*/
/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #ac87d1;
  color: white;
  margin-top: 30px;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 800px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
    margin-left: 0px;
  }
 
}

.header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.boton{
  color: white;
  width: 300px;
  margin-left: 150px;
}

.barra{
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px 100px 5px;
}

</style>
