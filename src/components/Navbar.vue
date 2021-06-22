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
                <a class="nav-link" href="#">Inicio</a>
              </router-link>
            </li>
            <li v-if="!getIsUserLogged" class="nav-item">
              <router-link to="/inscripcion">
                <a class="nav-link" href="#">Inscripción</a>
              </router-link>
            </li>
            <li v-if="getIsUserLogged" class="nav-item">
              <router-link to="/perfil">
                <a class="nav-link" href="#">Perfil</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/area-comun">
                <a class="nav-link" href="#">Área Común</a>
              </router-link>
            </li>
            <li v-if="getIsUserLogged" class="nav-item">
              <router-link to="/textos">
                <a class="nav-link" href="#">Mis textos</a>
              </router-link>
            </li>
            <li v-if="!getIsUserLogged" class="nav-item">
              <router-link to="/login">
                <a class="nav-link" href="#">Login</a>
              </router-link>
            </li>
            <li v-if="getIsUserLogged" class="nav-item">
                <button type="button" @click="logout" class="btn btn-link">Log out</button>
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
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      logout(){
        sessionStorage.clear();
        this.$store.dispatch('validateUserSession');
      }
    },
    computed: {
      getIsUserLogged(){
        return this.$store.state.isUserLogged
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

/* Provide sufficient contrast against white background */
a {
  color: #0366d6;
}

a:hover {
  text-decoration: none !important;
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
