import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../components/SignIn.vue"
import SignUp from "../components/SignUp.vue"
import Questionnaire from "../components/Questionnaire.vue";
import QuestionnaireResult from "../components/QuestionnaireResult.vue"
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
    component: SignIn
  },
  {
    path: "/SignUp",
    name: SignUp,
    component:SignUp
  },

  {
    path:"/questionnaire",
    name:Questionnaire,
    component: Questionnaire
  },
  {
    path:"/questionnaire-result-page",
    name:QuestionnaireResult,
    component: QuestionnaireResult
  },
  {
    path: '/sub_club_selection',
    name: 'QueSelectClub',
    component: QueSelectClub
  },
  {
    path: '/join_more_sub_clubs',
    name: 'JoinMoreSubClubs',
    component: JoinMoreSubClubs
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
