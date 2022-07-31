<template>
  <q-card class="my-card">
    <a :href="repo_url" target="_blank">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="titulo_repo absolute-bottom text-h5">{{ full_name }}</div>
      </q-img>
    </a>
    <q-card-section>
      {{ description }}
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section class="flex">
      <div class="row">
        <div class="col">{{ language }}</div>
        <div class="stars">
          <i class="las la-star col"></i> {{ stargazers_count }}
        </div>
      </div>

      <div class="row-pa-sm flex" v-for="topic in topics" :key="topic">
        <div class="col-2 topic-tag">{{ topic }}</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "SingleRepo",
  props: {
    full_name: {
      type: String,
      required: true,
    },
    stargazers_count: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      default: "",
    },
    created_at: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: "",
    },
    topics: {
      type: Array,
    },
    image_url: {
      type: String,
      default: "",
    },
  },
  computed: {
    repo_url: function () {
      return "https://github.com/" + this.full_name;
    },
  },
});
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
.titulo_repo {
  color: gold;
}

.topic-tag {
  display: inline-block;
  padding: 0.2em 0.2em;
  margin: 0 0.3em 0.3em 0;
  white-space: nowrap;
  background-color: #f1f8ff;
  border-radius: 2px;
  font-color: #0366d6;
  color: #0366d6;
}

.stars {
  align-content: right;
  text-align: right;
  padding-left: 60px;
}
</style>
