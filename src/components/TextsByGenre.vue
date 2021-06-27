<template>
    <section>
        <div class="hero-image">
        <div class="hero-text">
            <div>
                <h1 class="font-abril">{{ this.$route.params.genre }}</h1>
            </div>
        </div>
    </div> 
    
  
    <div class="row earchbar-input">
      <input class="form-control mr-sm-2 column" v-model="criterioDeBusqueda" type="search" placeholder="Buscar por titulo" aria-label="Search" />
      <a href="#" class="searchbar-clear"></a>
    </div>

    <br>
    <div>
        <div class="row">
            <div class="col-3 column card"  v-for="(item, index) in filteredList()" :key= "index">
                <h4 class="card-title" >{{ item.title }}</h4>
                <p class="card-text">{{ item.userId }}</p>
            </div>
        </div>
    </div>

    
    </section>       
    <!--  @click="redirectToTexto(texto)" -->   
</template>



<script>
    import { mdbIcon, mdbFormInline, mdbInput } from 'mdbvue';
    export default {
        name: "TextsByGenre",
        components: {
            mdbIcon,
            mdbFormInline,
            mdbInput
        },
        props: [],
        
        
        
    
        data() {
        return {
            result: null,
            genre: "",
            criterioDeBusqueda: '',
            };
        },
        computed: {},
            async mounted() {
            let genre = this.$route.params.genre 
            await this.getTexts(genre)
            },


        methods: {
            async getTexts(genre) {  
                let responseData = await this.axios.get(`http://localhost:3000/texts?page=1&genre=${genre}`)
                if (responseData.data) {
                    console.log(responseData.data);  
                    this.result = responseData.data.content;
                    //console.log(this.result);                  
               }  
                
            },  

            filteredList() {
              if(this.result){
                return this.result.filter((post) => {
                return `${post.title}`.toLowerCase().includes(this.criterioDeBusqueda.toLowerCase())
                })
              }
            }
        }
    };
</script>

<style scoped>

.container{
    background-color: #AC87D1;
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
  padding: 0 10px;
  margin-left: 80px;
  margin-top: 20px;
}

/* Remove extra left and right margins, due to padding in columns */
.row {
    margin: 0 -5px;
    padding: 10px 15px;
}


/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;

}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #AC87D1;
  color: white;
  margin-top: 30px;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 700px) {
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




</style>
