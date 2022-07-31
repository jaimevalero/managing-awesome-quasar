<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page>
    <div class="row q-mb-md">
      <div class="col bg-primary"></div>
      <div class="col bg-secondary"></div>
      <div class="col bg-accent"></div>
    </div>
    <div class="row q-mb-md">
      <div class="col bg-primary"></div>
      <div class="col col-6 bg-secondary"></div>
      <div class="col bg-accent"></div>
    </div>

    <q-separator spaced />
    <div class="row q-mb-md justify-between">
      <div class="col-12 col-sn-6 col-md-4 bg-primary"></div>
      <div class="col-12 col-sn-6 col-md-4 bg-secondary"></div>
    </div>
    <q-separator spaced />
    <div class="row q-mb-md justify-between">
      <div class="col-12 col-sn-6 col-md-4 bg-primary"></div>
      <div class="col-12 col-sn-6 col-md-4 bg-secondary"></div>
    </div>
    <q-separator spaced />

    <div class="row justify-between">
      <div class="sqare-box bg-primary"></div>
      <div class="sqare-box bg-secondary"></div>
      <div class="sqare-box bg-accent"></div>
    </div>
    <q-separator spaced />
    <div class="row justify-around">
      <div class="sqare-box bg-primary"></div>
      <div class="sqare-box bg-secondary"></div>
      <div class="sqare-box bg-accent"></div>
    </div>
    <q-separator spaced />
    <div class="column q-mb-md items-center bg-dark">
      <div class="sqare-box bg-primary"></div>
      <div class="sqare-box bg-secondary"></div>
      <div class="sqare-box bg-accent"></div>
    </div>
    <q-separator spaced />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TypographyPage",
});
</script>

<style scoped>
.col,
.col-4,
.col-6,
.col-12 {
  height: 50px;
}

.sqare-box {
  height: 50px;
  width: 50px;
}
</style>
