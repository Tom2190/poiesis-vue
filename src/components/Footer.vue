<template>
  <footer class="border-top footer text-muted">
    <div class="container">
      <a
        class="link-ig"
        href="https://www.instagram.com/taller.escritura.poiesis"
        target="_blank"
      ></a>
      <a class="link-email" href=""></a>
    </div>
  </footer>
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

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.footer {
  width: 100%;
  white-space: nowrap;
  background-color: #4eb7bc;
}

.footer .container {
  display: flex;
  align-items: center;
  padding: 5px 0;
}

footer a {
  margin-right: 20px;
  display: inline-block;
  background-repeat: no-repeat;
}

footer .link-ig {
  background-image: url("../assets/logo-instagram.svg");
  background-size: contain;
  width: 35px;
  height: 35px;
}

footer .link-email {
  background-image: url("../assets/logo-email.svg");
  background-size: contain;
  width: 45px;
  height: 45px;
}

@media only screen and (max-width: 600px) {
  .footer .container {
    padding: 5px 10px;
  }
}
</style>
