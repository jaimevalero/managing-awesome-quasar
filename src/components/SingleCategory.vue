<template>
  <div class="container no-padding">
    <div class="row flex-center q-pt-none q-pd-none">
      <div class="col-10 q-pa-sm titulo-categoria">
        <span class="text-h3">{{ category_normalized }}</span>
      </div>
      <div class="col-grow q-pa-sm titulo-categoria">
        <span class="text-4">{{ salary_normalized }}</span>
      </div>
    </div>
    <div class="container no-padding">
      <div class="row no-padding items-center">
        <div class="col-10">
          <q-linear-progress
            :label="percentage"
            :value="ownership"
          ></q-linear-progress>
        </div>
        <div class="col-1 justify-right q-pa-sm percent">
          <span class="text-5" percent justify-right>{{ percentage }}</span>
        </div>
      </div>
    </div>

    <div class="container no-padding">
      <h6>Skills that you already have:</h6>

      <div class="row">
        <div
          class="col-auto"
          v-for="item in skill_owned_labels"
          :key="item.category"
          :href="`https://jaimevalero.github.io/managing-awesome-lists/var/topics/-${item.category}`"
        >
          <q-badge class="topic-tag">
            {{ item }}
          </q-badge>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-12">
          <h6>Skills that you do not have:</h6>
          <q-card>
            <apex-donut
              :skills="skills_not_owned"
              :series="skill_not_owner_values"
            />
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
import { useRouter } from "vue-router";

const ApexDonut = defineAsyncComponent(() =>
  import("src/components/ApexDonut.vue")
);

export default defineComponent({
  name: "SingleCategory",
  components: { ApexDonut },
  props: {
    category: {
      type: String,
      required: true,
    },
    ownership: {
      type: Number,
      required: true,
      default: 0,
    },
    salary: {
      type: Number,
      required: true,
      default: 0,
    },
    skills_owned: {
      type: Object,
    },
    skills_not_owned: {
      type: Object,
    },
  },
  computed: {
    category_normalized: function () {
      return this.category.replaceAll("+", " ");
    },
    percentage: function () {
      return parseFloat(this.ownership * 100).toFixed(2) + "%";
    },
    salary_normalized: function () {
      return "$" + this.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    skill_not_owner_values: function () {
      var my_values = [];
      //console.log(Object.prototype.toString.call(this.skills_not_owned));
      var i = 0;
      for (const [key, value] of Object.entries(this.skills_not_owned)) {
        if (i <= 15) {
          i++;
          my_values.push(value);
        }
      }

      //console.log(my_values);
      return my_values;
    },
    skill_owned_labels: function () {
      var my_values_labels = [];

      for (const [key, value] of Object.entries(this.skills_owned)) {
        my_values_labels.push(key);
      }
      return my_values_labels;
    },
  },
});
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
h4 text-4 {
  color: gold;
}
h5 {
  text-align: right;
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

.titulo-categoria {
  min-height: 10px;
  max-height: 60px;
}
</style>
