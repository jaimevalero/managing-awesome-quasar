<template>
  <!-- <q-layout view="lHh Lpr lFf"> -->
  <q-layout view="hHh LpR lFf">
    <q-header elevated class="bg-primary text-white">

      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-ellipsis-v"
          aria-label="Menu"
          @click="toggleSideMenu"
        />

        <!-- <a href="">
    <q-img
      src="https://lamby.custominktech.com/assets/github-white-d730bb8cb18839116dcbd219f33f6e7b1cd43633e0fbaa3c2a39c12ccd56a164.png"
      spinner-color="white"
      style="height: 30px; max-width: 30px"
    />
  </a> -->

        <q-toolbar-title>
          <router-link to="/" class="text-white text-bold" style="text-decoration: none;">
          IT roles for you
          </router-link>
          </q-toolbar-title>


        <div class="flex">
          <q-form   v-on:submit="changeFormAction" >

            <input id="text-search"   placeholder="github username"  v-model="store.vital" />
            <q-btn icon="las la-search" label="Search" type="submit" color="secondary"/>
          </q-form>

        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      behavior="desktop"
      width="180"
      elevated
    >
      <q-list>
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { linksList } from "src/assets/link-list";
import { defineComponent } from "vue";

import useUI from "../composables/useUI";
var store = {vital:''};

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },
  data() {
    return {
      message: "",
      store : store
    };
  },
  methods: {
    changeFormAction:  function() {
      console.log("ruta0");
      console.log(window.location.href);
      console.log("ruta1");
      console.log(this.store.vital);
      console.log("ruta2");
      console.log(this.$router);
      console.log("ruta3");
      console.log(this.$router.currentRoute);
      this.$router.push({ name: 'users', params: { "id": this.store.vital } })
    }
  },
  setup() {
    const { sideMenuOpen, toggleSideMenu } = useUI();

    return {
      linksList,
      toggleSideMenu,
      sideMenuOpen,
    };
  },

});
</script>

<style scoped>
.q-btn {
  margin-left: 15px;
}
</style>
