<template>
  <apexchart
    height="300"
    type="donut"
    :options="options"
    :series="series"
  ></apexchart>
</template>

<script>
import { defineComponent } from "vue";
import { getCssVar } from "quasar";
//console.log("pepe0");

export default defineComponent({
  name: "ApexDonut",
  props: {
    title: {
      type: String,
    },
    skills: {
      type: Object,
    },
    series: {
      type: Object,
    },
  },
  computed: {
    values_normalized: function () {
      //console.log("pepe3 skills");
      var my_values = [];
      var i = 0;
      for (const [key, value] of Object.entries(this.skills)) {
        i = i + 1;
        if (i <= 15) {
          my_values.push(value);
        }
      }
      //console.log("pepe4 skills");
      //console.log(my_values);
      return my_values;
    },
    labels_normalized: function () {
      //console.log("pepe1 skills");
      var my_labels;
      try {
        my_labels = Object.keys(this.skills).slice(0, 16);
      } catch (error) {
        console.log(error);
      }

      // console.log(my_labels);
      //console.log("pepe2 skills");

      return my_labels;
    },
  },

  beforeMount() {
    //console.log("AboutPage.beforeMount()");
    this.options.labels = this.labels_normalized;
  },
  mounted() {
    //console.log("AboutPage.mounted()");
  },

  data() {
    return {
      options: {
        title: {
          text: this.title,
          align: "left",
        },
        chart: {
          id: "apex-donut",
        },

        markers: {
          size: 10,
          hover: {
            sizeOffset: 6,
          },
        },
        // xaxis: {
        //   categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        // },
        labels: ["Apple", "Mango", "Orange", "Watermelon"],
      },
      //series: [30, 40, 45, 500],
    };
  },
});
</script>
