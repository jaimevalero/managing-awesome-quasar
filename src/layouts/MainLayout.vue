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

        <q-toolbar-title>IT roles for you</q-toolbar-title>

        <div><input v-model="text" placeholder="github username" /></div>
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
        <q-item-label header> Essential Links </q-item-label>

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

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },
  data() {
    return {
      message: "",
    };
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
