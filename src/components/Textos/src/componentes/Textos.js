import { getTextsByUser } from "../../../../client.js";
export default {
  name: "Textos",
  components: {},
  props: [],
  data() {
    return {
      result: null,
      criterioDeBusqueda: "",
    };
  },
  computed: {},
  async mounted() {
    const res = await this.getTextsByUser();
    this.result = res.data;
  },
  methods: {
    async getTextsByUser() {
      return await getTextsByUser();
    },
    filteredList() {
      if (this.result) {
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
