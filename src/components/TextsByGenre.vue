<template>
    <div>
        {{ this.$route.params.genre }}
    </div>
</template>



<script>
    export default {
        name: "TextsByGenre",
        components: {},
        props: [],
    
        data() {
        return {
            url: `http://localhost:3000/texts?page=1&genre=fiction`,
            textos: []
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
            
            }  
        },

        
    };
</script>
