<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page>
    <div class="row q-mb-md">
      <h2>About : What is this page ?</h2>
      This page is an analizer of it IT roles, to offer suggestions about positions and skill for a <a href="githhub.com">github user</a>.
      <q-separator spaced />

      <h3>How does it calculate the skills of a user ? </h3>
      For a given github user, we vectorize it by downloading his last repositories.<br/>
      For each repo, we parse its description, and readme page against a tecnologies list.<br/>
      By doing that, we transform each user into a point a in N-dimensional space - 1041 dimension actually - Where each dimension is the relative weight of how often the skill is found in the tecnologies list.
      <q-separator spaced />

      <h3>Where does those salaries data come from ?</h3>
      The salaries come from various sources : public dataset of salaries, websites like glassdoor.
      <q-separator spaced />

      <h3>How does it calculate the skill of a category ? </h3>
      With the category list, we use the github.com api to download a users list which that specific title in his description field.<br/>
      So, we get a cluster of users for each category, the vectorize them and calculate the most frequent skills.<br/>
      <q-separator spaced />

      <h3>How does it calculate the increment for a given skill  ? </h3>
      We calculate the weight of each skill in every category multiplied by its related salary. The we calculate the average.






    </div>

  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutPage",
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
