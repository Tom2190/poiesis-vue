<template>
  <header>
    <nav
      class="
        navbar navbar-expand-sm navbar-toggleable-sm navbar-light
        bg-white
        border-bottom
      "
    >
      <div class="container">
        <a
          class="navbar-brand"
          aria-label="Logo image that takes you to home"
        ></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/inicio">
                <a :class="getCssClass('inicio')" href="#">Inicio</a>
              </router-link>
            </li>
            <li v-if="!getIsUserLogged" class="nav-item">
              <router-link to="/inscripcion">
                <a :class="getCssClass('inscripcion')" href="#">Inscripción</a>
              </router-link>
            </li>
            <li v-if="getIsUserLogged" class="nav-item">
              <router-link to="/perfil">
                <a :class="getCssClass('perfil')" href="#">Perfil</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/area-comun">
                <a :class="getCssClass('area-comun')" href="#">Área Común</a>
              </router-link>
            </li>
            <li v-if="getIsUserLogged" class="nav-item">
              <router-link to="/textos">
                <a :class="getCssClass('textos')" href="#">Mis textos</a>
              </router-link>
            </li>
            <li v-if="!getIsUserLogged" class="nav-item">
              <router-link to="/login">
                <a :class="getCssClass('login')" href="#">Login</a>
              </router-link>
            </li>
            <li v-if="getIsUserLogged" class="nav-item">
              <button type="button" @click="logout" class="btn btn-poiesis">
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    data () {
      return {
        currentRoute: "inicio"
      }
    },
    mounted () {
      this.currentRoute = this.$router.currentRoute.path;
    },
    methods: {
      logout(){
        sessionStorage.clear();
        this.$store.dispatch('validateUserSession');
        this.$router.push({path:"/inicio"})
      },
      getCssClass(route) {
        return this.currentRoute.includes(route) ? "nav-link poiesis-text-color" : "nav-link"
      }
    },
    watch: {
      $route(to) {
        this.currentRoute = to.path
      }
    },
    computed: {
      getIsUserLogged(){
        return this.$store.state.isUserLogged
      },
      getCurrentRoute() {
        return this.$router.currentRoute.path
      }
    }
}
</script>

<style scoped lang="css">
a.navbar-brand {
  white-space: normal;
  text-align: center;
  word-break: break-all;
  display: block;
  width: 80px;
  height: 45px;
  background-size: contain;
  background-image: url(../assets/logo-green.svg);
  background-repeat: no-repeat;
}

.btn-primary {
  color: #fff;
  background-color: #1b6ec2;
  border-color: #1861ac;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #1b6ec2;
  border-color: #1861ac;
}
</style>
