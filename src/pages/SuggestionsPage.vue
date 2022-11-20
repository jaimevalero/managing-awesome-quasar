<template>
  <q-page class="q-pa-md">
    <span class="text-h2 col-12">Suggestions</span>

    <div class="container no-padding">
      <span class="text-h5 col-12">Skills that you already have:</span>

      <div class="row">
        <q-intersection

          class="col-auto"
          v-for="item in skills_learned_normalized_all"
          :key="item"
          :href="`https://jaimevalero.github.io/managing-awesome-lists/var/topics/${item}`"
        >

          <q-checkbox
          v-bind:id="item"
          v-bind:val="item"
          v-model="skills_learned_normalized"
          @click="remove_skill">


      <q-label  class="topic-tag">{{item}}</q-label>
    </q-checkbox>
        </q-intersection>

      </div>
      <!-- <br><br> -->
        <!-- <span>Checked names: {{ skills_learned_normalized }}</span> -->
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
          <div class="col-3 percent" >
            <span class="text-6 justify-center topic-tag" >{{ item.id }}</span>
            <span class="text-5 justify-right dolars" >{{ item.dolars }} </span>

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
var qs = require('qs');



function askBackend(response) {
  var my_values_to_learn_normalized=[];
  var i=0;
  let maxKey, maxValue=0;

  for(const [key, value] of Object.entries(
    response.data.skills_to_learn
  )) {
    if(value>maxValue) {
      maxValue=value;
      maxKey=key;
    }
  }
  for(const [key, value] of Object.entries(
    response.data.skills_to_learn
  )) {
    if(i<=12) {
      i++;
      my_values_to_learn_normalized.push({
        id: key,
        value: value,
        value_normalized: value/maxValue,
        dolars: "$"+
          Math.ceil(value)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      });
    }
  }
  return my_values_to_learn_normalized;
}
export default defineComponent({
  name: "SuggestionsPage",
  setup(props, context) {
    const { sideMenuOpen, toggleSideMenu } = useUI();

    return {
      toggleSideMenu,
      sideMenuOpen,

    };
  },
  methods : {
    remove_skill() {
        const a = 0;
        var ignored_skills =  this.skills_learned_normalized_all.concat(this.skills_learned_normalized).filter(item => !this.skills_learned_normalized_all.includes(item) || !this.skills_learned_normalized.includes(item))
        axios.get(
          //'http://127.0.0.1:8888/v1/analize-user/', {
            "https://epg-estudio-orga.apps.ocp-epg.tid.es/v1/analize-user/", {
          params: {
            token: "fb1d3b71-2c1e-49cb-b04b-46534534ef0a",
            login : this.login_normalized ,
            ignored_skills:  ignored_skills
          },
          paramsSerializer: params => {
            return qs.stringify(params)
          }
        }).then((response) => {
              var my_values_to_learn_normalized=askBackend(response);
              this.skills_learned_normalized = Object.keys(
                response.data.skills_already_learned
              );
              this.skills_to_learn_normalized = my_values_to_learn_normalized;
            });

      }
  },
  computed: {
    login_normalized: function () {
      var login;
      try {
        login = this.$router.currentRoute.value.params.id;
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
      skills_learned_normalized_all: [],
      skills_unselected_by_user: []
    };
  },
  created() {
    axios
      .get(
        //"http://127.0.0.1:8888/v1/analize-user/?token=fb1d3b71-2c1e-49cb-b04b-46534534ef0a&login=" + this.login_normalized
        "https://epg-estudio-orga.apps.ocp-epg.tid.es/v1/analize-user/?token=fb1d3b71-2c1e-49cb-b04b-46534534ef0a&login=" + this.login_normalized
        )
      .then((response) => {
        var my_values_to_learn_normalized=askBackend(response);
        this.skills_learned_normalized = Object.keys(
          response.data.skills_already_learned
        );
        this.skills_learned_normalized_all = Object.keys(
          response.data.skills_already_learned
        );
        this.skills_to_learn_normalized = my_values_to_learn_normalized;
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
.topic-tag  {
  border-radius: 16px ;
  display: inline-block;
  padding: 0.4em 0.4em;
  margin: 0 0.6em 0.6em 0;
  white-space: nowrap;
  background-color: #f1f8ff;
  color: #0366d6;
}

q-linear-progress {
  color: blue-10;
}
</style>


