import { getAllUsers } from "../../../../client.js";
export default {
  name: "Admin",
  components: {},
  props: [],
  data() {
    return {
      users: [],
    };
  },
  computed: {},
  async mounted() {
    const res = await getAllUsers();
    this.users = res.data;
    console.log(this.users);
  },
  methods: {},
};
