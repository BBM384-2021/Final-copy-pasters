import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../components/SignIn.vue"
import SignUp from "../components/SignUp.vue"
import Questionnaire from "../components/Questionnaire.vue";
import QuestionnaireResult from "../components/QuestionnaireResult.vue"
import QueSelectClub from '../views/QueSelectClub.vue'


Vue.use(VueRouter);

const routes = [
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
    path: '/sub_club_selection',
    name: 'QueSelectClub',
    component: QueSelectClub
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
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
