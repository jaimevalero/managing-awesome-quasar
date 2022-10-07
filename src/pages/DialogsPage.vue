<template>
  <q-page class="q-pa-md no-padding">

    <q-intersection
      class="q-pa-xs no-padding"
      v-for="item in categories"
      :key="item.category"
    >
      <SingleCategory v-bind="item" />
    </q-intersection>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";
import SingleCategory from "src/components/SingleCategory.vue";

export default defineComponent({
  name: "DialogsPage",
  computed: {
    login_normalized: function () {
      var login;
      try {
        login = this.$router.currentRoute._value.params.id;
        console.log(login);
      } catch (error) {
        console.log(error);
        login = "borja";
      }
      return login;
    },
  },
  components: { SingleCategory },
  data() {
    return {
      categories: [],
    };
  },
  created() {
    console.log("0");

    axios
      .get(
        //"http://127.0.0.1:8888/v1/analize-user/?token=fb1d3b71-2c1e-49cb-b04b-46534534ef0a&login=" + this.login_normalized
        "https://epg-estudio-orga.apps.ocp-epg.tid.es/v1/analize-user/?token=fb1d3b71-2c1e-49cb-b04b-46534534ef0a&login=" + this.login_normalized
      )
      .then((response) => {
        this.categories = response.data.categories;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  setup() {
    const $q = useQuasar();

    function prompt() {
      $q.dialog({
        title: "Prompt",
        message: "What is your name?",
        prompt: {
          model: "",
          type: "text", // optional
        },
        cancel: true,
        persistent: true,
      })
        .onOk((data) => {
          // console.log('>>>> OK, received', data)
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    return { alert, confirm, prompt };
  },
});
</script>
