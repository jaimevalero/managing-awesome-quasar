<template>
  <q-page class="q-pa-md">
    <span class="text-h2 col-12">Suggestions</span>

    <div class="container no-padding">
      <span class="text-h5 col-12">Skills that you already have:</span>

      <div class="row">
        <div
          class="col-auto"
          v-for="item in skills_learned_normalized"
          :key="item"
          :href="`https://jaimevalero.github.io/managing-awesome-lists/var/topics/-${item}`"
        >
          <q-badge class="topic-tag">
            {{ item }}
          </q-badge>
        </div>
      </div>
    </div>
  <br>
    <span class="text-h5 col-12">Skills that you may learn:</span>
    <br />
    <div class="label bg-secondary text-white">
      <span class="text-h6 col-12">
      <i class="las la-info-circle"/>

      Skills that you do not know, with an estimation of how much your average
      market value would increase if you learn them.
    </span>
    </div>
    <br>
    <div
      class="q-pa-xs"
      v-for="item in skills_to_learn_normalized"
      :key="item.id"
      style="min-height: 150 px"
    >
      <div class="container">
        <div class="row items-center">
          <div class="col-9">
            <q-linear-progress
              :label="item.id"
              :value="item.value_normalized"
              color="gold"
              style="max-height: 100px"
            ></q-linear-progress>
          </div>
          <div class="col-3 percent">
            <span class="text-6 justify-center topic-tag">{{ item.id }}</span>

            <span class="text-5 justify-right dolars">{{ item.dolars }} </span>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import useUI from "../composables/useUI";
import axios from "axios";
export default defineComponent({
  name: "SuggestionsPage",
  setup() {
    const { sideMenuOpen, toggleSideMenu } = useUI();

    return {
      toggleSideMenu,
      sideMenuOpen,
    };
  },
  computed: {
    login_normalized: function () {
      var login;
      try {
        login = this.$router.currentRoute._value.params.id;
        //console.log(login);
      } catch (error) {
        console.log(error);
        //login = "borja";
      }
      return login;
    },
  },
  data() {
    return {
      skills_to_learn_normalized: [],
      skills_learned_normalized: [],
    };
  },
  created() {
    //console.log("0");

    axios
      .get(
        "http://localhost:8888/v1/analize-user/?token=fb1d3b71-2c1e-49cb-b04b-46534534ef0a&login=" + this.login_normalized
      )
      .then((response) => {
        var my_values_to_learn_normalized = [];
        var i = 0;
        let maxKey,
          maxValue = 0;

        for (const [key, value] of Object.entries(
          response.data.skills_to_learn
        )) {
          if (value > maxValue) {
            maxValue = value;
            maxKey = key;
          }
        }

        console.log("maxValue: ");
        console.log(maxValue);
        for (const [key, value] of Object.entries(
          response.data.skills_to_learn
        )) {
          if (i <= 15) {
            i++;
            my_values_to_learn_normalized.push({
              id: key,
              value: value,
              value_normalized: value / maxValue,
              dolars:
                "$" +
                Math.ceil(value)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            });
          }
        }
        this.skills_learned_normalized = Object.keys(
          response.data.skills_already_learned
        );
        this.skills_to_learn_normalized = my_values_to_learn_normalized;
        console.log(this.skills_to_learn_normalized);
      });
  },
});
</script>

<style>
.dolars {
  color: gold;
  margin-right: 12px;
  text-align: right;
  border-radius: 2px;
  font-size: 20px;
}
.topic-tag {
  display: inline-block;
  padding: 0.2em 0.2em;
  margin: 0 0.3em 0.3em 0;
  white-space: nowrap;
  background-color: #f1f8ff;
  border-radius: 2px;
  color: #0366d6;
}
</style>
