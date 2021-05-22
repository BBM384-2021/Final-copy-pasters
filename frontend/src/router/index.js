import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../components/SignIn.vue"
import SignUp from "../components/SignUp.vue"
import Questionnaire from "../components/Questionnaire.vue";
import QuestionnaireResult from "../components/QuestionnaireResult.vue"
import EntryPage from "../views/EntryPage.vue"
import SubClubPage from "../views/SubClubPage.vue"

Vue.use(VueRouter);

const routes = [
  {
    path:"/questionnaire",
    name:Questionnaire,
    component: () =>
      import( "../components/Questionnaire.vue")
  },

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
  {
    path: "/SignIn",
    name: SignIn,
    component:() =>
      import("../components/SignIn.vue")
  },

  {
    path: "/SignUp",
    name: SignUp,
    component:() =>
      import("../components/SignUp.vue")
  },

  {
    path:"/questionnaire",
    name:Questionnaire,
    component: () =>
      import( "../components/Questionnaire.vue")
  },

  {
    path:"/questionnaire-result-page",
    name:QuestionnaireResult,
    component: () =>
      import( "../components/QuestionnaireResult.vue")
  },

  {
    path:"/entryPage",
    name:EntryPage,
    component: () =>
      import( "../views/EntryPage.vue")
  },

  {
    path: "/subclubPage/:subclubname",
    name:SubClubPage,
    component: () =>
      import("../views/SubClubPage.vue")
  },

  
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
