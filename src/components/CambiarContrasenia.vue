<template>
<div class="container p-5 my-5" :style="{maxWidth:'500px'}">
  <div>
    <vue-form :state="formState" @submit.prevent="enviar()">
      <div class="row">
        <div class="col-md">
          <validate tag="div">
            <b><label for="currentPassword" class="d-flex mb-2">Contraseña actual:</label></b>
            <input
              type="password"
              id="currentPassword"
              class="form-control"
              name="currentPassword"
              autocomplete="on"
              v-model.trim="formData.currentPassword"
              required
            />
            <field-messages name="currentPassword" show="$dirty">
              <div slot="required" class="alert alert-danger mt-2">
                Campo requerido
              </div>
            </field-messages>
          </validate>
          <br />

          <validate tag="div">
            <b><label for="newPassword" class="d-flex mb-2">Nueva contraseña:</label></b>
              <input
                :type="!showPassword ? 'password' : 'text'"
                id="newPassword"
                class="form-control"
                name="newPassword"
                autocomplete="on"
                v-model.trim="formData.newPassword"
                required
              />
              
              <a @click="handleShowPassword()" class="notunderlined" v-if="!showPassword">
                <img src="@/assets/eyeInvisible.png" width="22" height="22">
              </a>

              <a @click="handleShowPassword()" class="notunderlined" v-if="showPassword">
                <img src="@/assets/eye.png" width="22" height="22">
              </a>

            <field-messages name="newPassword" show="$dirty">
              <div slot="required" class="alert alert-danger mt-2">
                Campo requerido
              </div>
            </field-messages>
          </validate>
          
        </div>
      </div>

      <button
        class="btn btn-poiesis mt-5 center"
        :disabled="formState.$invalid"
        type="submit"
      >
        Guardar
      </button>

    </vue-form>
  </div>
</div>
</template>

<script>
import {updatePassword} from '../client.js'

export default {
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      showPassword: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    getInicialData() {
      return {
        currentPassword:"",
        newPassword: "",
      };
    },

    async enviar() {
      const password = { ...this.formData };
      console.log(password);
      try {
        await updatePassword(password);
        console.log("updated password");
      } catch (error) {
        console.log("ERROR!", error);
      }

      this.formData = this.getInicialData();
      this.formState._reset();
    },

    handleShowPassword(){
      this.showPassword = !this.showPassword
    }

  },

};
</script>

<style>
</style>