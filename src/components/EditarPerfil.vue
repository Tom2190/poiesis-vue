<template>
  <section class="editar-perfil">
    <div class="container mt-5 mb-5 ">
      <!--FORM-->
      <div class="jumbotron">
        <vue-form :state="formState" @submit.prevent="enviar()">
          <div class="row">
            <div class="col-md">
              <!-- ------------------------------------------------------------------------ -->
              <!-- Campo nombre -->
              <validate tag="div">
                <label for="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control"
                  autocomplete="on"
                  v-model.trim="formData.name"
                  required
                  :minlength="nombreLengthMin"
                  :maxlength="nombreLengthMax"
                  no-espacios
                />
                <!-- Carteles de validación de campo -->
                <field-messages name="name" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                    Campo requerido
                  </div>
                  <div slot="no-espacios" class="alert alert-danger mt-1">
                    No se permiten espacios intermedios en este campo
                  </div>
                  <div slot="minlength" class="alert alert-danger mt-1">
                    Se deben ingresar como mínimo
                    {{ nombreLengthMin }} caracteres
                  </div>
                  <div
                    v-if="formData.name.length == nombreLengthMax"
                    class="alert alert-danger mt-1"
                  >
                    Máximo de caracteres ({{ nombreLengthMax }}) alcanzados
                  </div>
                </field-messages>
              </validate>
              <br />

              <!-- ------------------------------------------------------------------------ -->
              <!-- Campo lastName -->
              <validate tag="div">
                <label for="lastName">Apellido:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  class="form-control"
                  autocomplete="on"
                  v-model.trim="formData.lastName"
                  required
                />
                <!-- Carteles de validación de campo -->
                <field-messages name="lastName" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                    Campo requerido
                  </div>
                </field-messages>
              </validate>
              <br />

              <!-- ------------------------------------------------------------------------ -->
              <!-- Campo Celular -->
              <validate tag="div">
                <label for="phone">Celular:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  class="form-control"
                  autocomplete="on"
                  v-model.trim="formData.phone"
                  required
                />
                <!-- Carteles de validación de campo -->
                <field-messages name="phone" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                    Campo requerido
                  </div>
                </field-messages>
              </validate>
              <br />
              <validate tag="div">
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  name="email"
                  autocomplete="off"
                  v-model.trim="formData.email"
                  disabled="true"
                />
              </validate>
              <br />
            </div>

            <div class="col-md">
              <!-- ------------------------------------------------------------------------ -->
              <!-- Campo password -->
              <validate tag="div">
                <label for="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  name="password"
                  autocomplete="on"
                  v-model.trim="formData.password"
                  disabled="true"
                />
                <!-- Carteles de validación de campo -->
                <field-messages name="password" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                    Campo requerido
                  </div>
                </field-messages>
              </validate>
              <br />

              <!-- ------------------------------------------------------------------------ -->
              <!-- Campo dni -->
              <validate tag="div">
                <label for="dni">DNI:</label>
                <input
                  type="text"
                  id="dni"
                  class="form-control"
                  name="dni"
                  autocomplete="on"
                  v-model.trim="formData.dni"
                  disabled="true"
                />
                <!-- Carteles de validación de campo -->
                <field-messages name="dni" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                    Campo requerido
                  </div>
                </field-messages>
              </validate>
              <br />
              <!-- ------------------------------------------------------------------------ -->
              <!-- Campo Genero de Escritura Predilecto -->
              <validate tag="div">
                <label for="writingGenre"
                  >Género de escritura predilecto:</label
                >
                <br />
                <select
                  id="writingGenre"
                  name="writingGenre"
                  class="form-control"
                  autocomplete="on"
                  v-model.trim="formData.writingGenre"
                  required
                >
                  <option disabled value="">Seleccione un género</option>
                  <option value="fiction">Ficción</option>
                  <option value="non_fiction">No ficción</option>
                  <option value="poetry">Poesía</option>
                </select>
                <!-- Carteles de validación de campo -->
                <field-messages name="writingGenre" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                    Campo requerido
                  </div>
                </field-messages>
              </validate>
              <br />
              <!-- ------------------------------------------------------------------------ -->
              <!-- Campo Frecuencia de Lectura -->
              <validate tag="div">
                <label for="writingFrequency">Frecuencia de lectura:</label>
                <br />
                <select
                  id="writingFrequency"
                  name="writingFrequency"
                  class="form-control"
                  autocomplete="on"
                  v-model.trim="formData.writingFrequency"
                  required
                >
                  <option disabled value="">Seleccione una frecuencia</option>
                  <option value="little">Poca</option>
                  <option value="normal">Media</option>
                  <option value="lot">Mucha</option>
                </select>
                <!-- Carteles de validación de campo -->
                <field-messages name="writingFrequency" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                    Campo requerido
                  </div>
                </field-messages>
              </validate>
              <br />
            </div>
          </div>
          <!-- ------------------------------------------------------------------------ -->
          <!-- ------------------------------------------------------------------------ -->
          <div class="d-grid gap-2 col-md-3 col-sm-12 mx-auto">
            <button
              class="btn btn-poiesis my-4"
              :disabled="formState.$invalid"
              type="submit"
            >
              Editar usuario
            </button>
          </div>
        </vue-form>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import { getUser, updateUser } from "../client.js";
export default {
name: 'src-componentes-editarPerfil',
components: {},
props: ["user"],
data () {
    return {
    formData : this.getInicialData(),
    formState: {},
    nombreLengthMin : 3,
    nombreLengthMax: 10,
    }
},
computed: {

},
methods: {
    getInicialData() {
    return {
        name: this.user.name,
        lastName: this.user.lastName,
        email: this.user.email,
        password: this.user.password,
        chosenDateTime: this.user.chosenDateTime,
        writingFrequency: this.user.writingFrequency,
        writingGenre: this.user.writingGenre,
        phone: this.user.phone,
        dni: this.user.dni,
    }
    },
    async getUser() {
        return await getUser()
    },
    async enviar() {
        const updatedUser =  {...this.formData}
        console.log(updatedUser);
        try {
            await updateUser(updatedUser)
            console.log("Updated user")
        } catch (error) {
            console.log("¡ERROR!", error);
        }
        this.formData = this.getInicialData()
        this.formState._reset()
    }
}
}
</script>

<style scoped lang="css">
.jumbotron {
  background-color: white;
  border-radius: 0;
}

hr {
  background-color: #1f2e46;
}

pre {
  color: #1f2e46;
}
</style>
