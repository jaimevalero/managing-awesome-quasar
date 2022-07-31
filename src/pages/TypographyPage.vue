<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page class="flex q-pa-md">
    <span class="text-h1">Tipography</span>
    <q-btn
      @click="toggleSideMenu"
      label="Abrir menu lateral"
      color="primary"
      class="q-mq-md"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import useUI from "../composables/useUI";

export default defineComponent({
  name: "TypographyPage",
  setup() {
    const { sideMenuOpen, toggleSideMenu } = useUI();

    return {
      toggleSideMenu,
      sideMenuOpen,
    };
  },
});
</script>
