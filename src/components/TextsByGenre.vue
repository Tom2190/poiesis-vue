<template>
    <section>
        <div class="hero-image">
        <div class="hero-text">
            <div>
                <h1 class="font-abril">{{ this.$route.params.genre }}</h1>
                
            </div>
        </div>
    </div> 
    <br>
    <div>
        <div class="row">
        <div class="column">
            <div class="card">
                <h5 class=""> AUTOR </h5>
                <p> NOMBRE DEL CUENTO </p>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <h5 class=""> AUTOR </h5>
                <p> NOMBRE DEL CUENTO </p>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <h5 class=""> AUTOR </h5>
                <p> NOMBRE DEL CUENTO </p>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <h5 class=""> AUTOR </h5>
                <p> NOMBRE DEL CUENTO </p>
            </div>
        </div>

    </div>
    </div>

        
    </section>          
</template>



<script>
    export default {
        name: "TextsByGenre",
        components: {},
        props: [],
    
        data() {
        return {
            url: `http://localhost:3000/texts?page=1&genre=fiction}`,
            responseData: [],
            genre: ""
            };
        },
        computed: {},
            async mounted() {
            const genre = this.$route.params.genre 
            await this.getTexts(genre)
            
            },
        methods: {
            
            async getTexts(genre) {
                
                let responseData = await this.axios.get(`http://localhost:3000/texts?page=1&genre=${genre}`)
                console.log(responseData.data);   
                //textos =  responseData.data    
            }  
        },

        


    };
</script>

<style scoped>

.container{
    background-color: #AC87D1;
    color: white;
    border-radius: 10px;
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
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

</style>
