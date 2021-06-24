<template>
  <div class="crear-texto">
    <vue-form
      :state="formState"
      @submit.prevent="crearTexto()"
      class="text-start"
    >
      <div class="row">
        <div class="col-6">
          <validate tag="div">
            <label for="title">Título:</label>
            <input
              type="text"
              id="title"
              name="title"
              class="form-control"
              v-model="formData.title"
              required
              :minlength="nombreLengthMin"
              :maxlength="nombreLengthMax"
            />
            <field-messages name="title" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
              <div slot="minlength" class="alert alert-danger mt-1">
                Se deben ingresar como mínimo {{ nombreLengthMin }} caracteres
              </div>
              <div
                v-if="formData.title.length == nombreLengthMax"
                class="alert alert-danger mt-1"
              >
                Máximo de caracteres ({{ nombreLengthMax }}) alcanzados
              </div>
            </field-messages>
          </validate>
        </div>
        <div class="col-6">
          <validate>
            <label for="genre">Género:</label>
            <select
              class="form-select"
              id="genre"
              name="genre"
              v-model="formData.genre"
              required
            >
              <option
                v-for="(genre, i) in genres"
                :key="genre.value"
                :value="genre.value"
                :selected="formData.genre === genre.value"
                :disabled="i === 0"
              >
                {{ genre.label }}
              </option>
            </select>
          </validate>
        </div>
      </div>
      <div>
        <div class="form-check form-switch mt-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="hasPdf"
            name="hasPdf"
            v-model="formData.hasPdf"
          />
          <label class="form-check-label" for="hasPdf">Adjuntar PDF</label>
        </div>
      </div>
      <div class="mt-3">
        <div v-if="!formData.hasPdf">
          <validate>
            <label for="content" class="form-label">Contenido</label>
            <textarea
              class="form-control"
              id="content"
              name="content"
              v-model="formData.content"
              rows="6"
            ></textarea>
            <field-messages name="content" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
            </field-messages>
          </validate>
        </div>
        <div v-else>
          <validate>
            <label for="demo" class="form-label">Elegir archivo:</label>
            <input
              class="form-control"
              type="file"
              id="demo"
              name="demo"
              @change="getFile"
            />
            <field-messages name="demo" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
            </field-messages>
          </validate>
        </div>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          class="btn btn-poiesis my-4"
          :disabled="formState.$invalid"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </vue-form>
  </div>
</template>

<script lang="js">
  export default  {
    name: 'CrearTextoForm',
    props: [],
    mounted () {

    },
    data () {
      return {
      formData : this.getInicialData(),
      formState: {},
      genres: [
        {value: "", label: "Seleccionar una opción"},
        {value: "fiction", label: "Ficción"},
        {value:"non_fiction", label: "No ficción"},
        {value: "poetry", label: "Poesía"}
      ],
      nombreLengthMin : 3,
      nombreLengthMax: 50,
      }
    },
    methods: {
        getInicialData() {
            return {
                title: "",
                genre: "",
                hasPdf: false,
                content: "",
                demo: null
            }
        },
        getFile(event){
            console.log(event.target.files);
            this.formData.demo = event.target.files[0]
        },
        async crearTexto() {

          console.log({...this.formData})
          const {
            title,
            genre,
            hasPdf,
            content,
            demo
          } = this.formData
          let form = new FormData();
          form.append("title", title);
          form.append("genre", genre);
          form.append("hasPdf", hasPdf);
          form.append("content", content);
          form.append("demo", demo);
          console.log(form)
          const token = sessionStorage.getItem('userSession')
          try {
            const resPost = await this.axios({
              method: "post",
              url: "http://localhost:3000/texts",
              data: form,
              headers: {
                "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
                "x-access-token": token,
              },
            });
            console.log("crear texto res:", resPost.data);
          } catch (err) {
            console.log(err.message);
          }
          this.formData = this.getInicialData()
          this.formState._reset()
        }
    },

}
</script>

<style scoped lang="css"></style>
