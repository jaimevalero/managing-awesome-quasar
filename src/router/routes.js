const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "typography",
        name: "typography",
        component: () => import("src/pages/TypographyPage.vue"),
      },
      {
        path: "users/:id",
        name: "users",
        component: () => import("src/pages/DialogsPage.vue"),
      },
      {
        path: "suggestions/:id",
        name: "suggestions",
        component: () => import("src/pages/SuggestionsPage.vue"),
      },
      {
        path: "forms",
        name: "forms",
        component: () => import("src/pages/FormsPage.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("src/pages/AboutPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/ErrorNotFound.vue"),
  },
];

export default routes;
