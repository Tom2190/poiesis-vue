import { getTextsByUser } from "../../../../client.js";
import Loader from "../../../Loader.vue";
export default {
  name: "Textos",
  components: {
    Loader,
  },
  props: [],
  data() {
    return {
      result: [],
      criterioDeBusqueda: "",
      isLoading: false,
    };
  },
  computed: {},
  async mounted() {
    this.isLoading = true;
    const res = await this.getTextsByUser();
    this.result = res.data;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
  methods: {
    async getTextsByUser() {
      return await getTextsByUser();
    },
    filteredList() {
      if (this.result.length > 0) {
        return this.result.filter((post) => {
          return `${post.title}`
            .toLowerCase()
            .includes(this.criterioDeBusqueda.toLowerCase());
        });
      } else {
        return this.result;
      }
    },
  },
};
