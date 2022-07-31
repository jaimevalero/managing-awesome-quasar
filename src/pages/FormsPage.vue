<template>
  <h3>FormsPage</h3>

  <q-page class="flex">
    <div class="q-pa-xs" v-for="item in items" :key="item.full_name">
      <single-repo v-bind="item"></single-repo>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { Notify } from "quasar";

import SingleRepo from "src/components/SingleRepo.vue";

//Notify.create("Danger, Will Robinson! Danger!");

export default defineComponent({
  name: "FormsPage",
  components: { SingleRepo },

  setup() {
    var items = require("src/assets/topics/javascript.json");

    return {
      items,
    };
  },
});

// const repo_data = {
//   full_name: "vuejs/vue",
//   description:
//     "Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
//   topics: ["framework", "frontend", "javascript", "vue"],
//   created_at: "2013-07-29T03:24:51Z",
//   pushed_at: "2021-03-30T18:07:13Z",
//   stargazers_count: 181207,
//   language: "JavaScript",
// };
</script>
