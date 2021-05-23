import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import Questionnaire from "../components/Questionnaire.vue";
import QuestionnaireResult from "../components/QuestionnaireResult.vue";
import EntryPage from "../views/EntryPage.vue"
import SubClubPage from "../views/SubClubPage.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/SignIn",
    name: SignIn,
    component:SignIn
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
    path:"/entryPage",
    name:EntryPage,
    component: EntryPage
  },
    {
    path: "/subclubPage/:subclubname",
    name:SubClubPage,
    component: SubClubPage
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
