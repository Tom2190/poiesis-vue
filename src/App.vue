<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  async mounted() {
    await this.$store.dispatch("validateUserSession");
    if (this.getIsUserLogged) {
      console.log("Estas logeado!");
    } else {
      console.log("No estas logeado!");
    }
  },
  computed: {
    getIsUserLogged() {
      return this.$store.state.isUserLogged;
    },
  },
};
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}
body {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

main {
  flex: 1;
  overflow: auto;
}

.card-container {
  background: #ffffff;
  box-shadow: 5px 7px 10px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  text-align: center;
  width: 100%;
}

.full-height {
  height: 100%;
}

.font-abril {
  font-family: "Abril Fatface", cursive;
}

.font-arvo {
  font-family: "Arvo", serif;
}

.mayusc {
  text-transform: capitalize;
}

input:disabled {
  cursor: not-allowed;
}

pre {
  white-space: pre-line;
}

textarea {
  max-height: 500px;
}

.col-texto {
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding-bottom: 2%;
}

.hero-image img {
  width: 200px;
}

.hero-image {
  background-image: url(./assets/background-coffee.jpg);
  height: 300px;
  background-position: 50% 20%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  width: 100%;
  height: 100%;
  background-color: rgba(78, 183, 188, 0.76);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .hero-image {
    height: 230px;
  }

  .hero-image img {
    width: 150px;
  }
}

.cover-img-bg {
  background-image: url(./assets/background-coffee.jpg);
  flex: 1;
  background-repeat: no-repeat;
  background-size: cover;
}

.blue-overlay {
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 40px 15px;
  width: 100%;
  height: 100%;
  background-color: rgba(78, 183, 188, 0.76);
}

.btn.btn-poiesis {
  background-color: #4eb7bc;
  border-color: rgb(255, 255, 255);
  color: #ffffff;
  border-radius: 10px;
}

.btn.btn-poiesis:hover {
  background-color: #469fa4;
  color: white;
}

.btn.btn-outline-poiesis {
  background-color: #ffffff;
  border-color: #4eb7bc;
  color: #4eb7bc;
  border-radius: 10px;
}

.btn.btn-outline-poiesis:hover {
  background-color: #4eb7bc;
  border-color: rgb(255, 255, 255);
  color: #ffffff;
  border-radius: 10px;
}
</style>
