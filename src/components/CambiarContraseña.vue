<template>
  <div>
    <vue-form :state="formState" @submit.prevent="enviar()">
      <div class="row">
        <div class="col-md">
          <validate tag="div">
            <b><label for="email">Ingrese su email:</label></b>
            <input
              type="email"
              id="email"
              class="form-control"
              name="email"
              autocomplete="on"
              v-model.trim="formData.email"
              required
            />
            <field-messages name="email" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
              <div slot="email" class="alert alert-danger mt-1">
                Email no válido
              </div>
            </field-messages>
          </validate>
          <br />

          <validate tag="div">
            <b><label for="password">Contraseña:</label></b>
            <input
              type="password"
              id="password"
              class="form-control"
              name="password"
              autocomplete="on"
              v-model.trim="formData.password"
              required
            />
            <field-messages name="password" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
            </field-messages>
          </validate>
          <br />
        </div>
      </div>

      <button
        class="btn btn-poiesis my-4 center"
        :disabled="formState.$invalid"
        type="submit"
      >
        Ingresar
      </button>

      <u><div class="recuperar">Recuperar contraseña</div></u>
    </vue-form>
  </div>
</template>

<script>
import client from '../client.js'

export default {
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
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
      const user = { ...this.formData };
      console.log(user);
      try {
        await client.updatePassword(user)
        console.log("updated password");
      } catch (error) {
        console.log("ERROR!", error);
      }

      this.formData = this.getInicialData();
      this.formState._reset();
    },
  },
};
</script>

<style>
</style>