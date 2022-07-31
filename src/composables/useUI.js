import { computed } from "vue";
import { useStore } from "vuex";

export const useUI = () => {
  const store = useStore();

  return {
    // SideMenu options
    // sideMenuOpen: computed(() => store.getters["ui/isSideMenuOpen"]),
    sideMenuOpen: computed({
      get() {
        return store.getters["ui/isSideMenuOpen"];
      },
      set(val) {
        console.log({ val });
      },
    }),
    toggleSideMenu() {
      store.commit("ui/toggleSideMenu");
    },
  };
};

export default useUI;
