import Vue from 'vue'

const miMixinGlobal = {
    computed: {
        getIsUserLogged() {
            return this.$store.state.isUserLogged;
        },
    },
}

Vue.mixin(miMixinGlobal)