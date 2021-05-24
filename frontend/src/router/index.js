import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../components/SignIn.vue"
import SignUp from "../components/SignUp.vue"
import Questionnaire from "../components/Questionnaire.vue";
import QuestionnaireResult from "../components/QuestionnaireResult.vue"
import QueSelectClub from '../views/QueSelectClub.vue'


Vue.use(VueRouter);
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from "../components/Home/SignIn.vue";
import SignUp from "../components/Home/SignUp.vue";
import QueSelectClub from '../views/QueSelectClub.vue'
import Questionnaire from '../views/Questionnaire.vue'
import QuestionnaireResult from '../views/QuestionnaireResult.vue'
import JoinMoreSubClubs from '../views/JoinMoreSubClubs.vue'
import EntryPage from '../views/EntryPage.vue'
import SubClubPage from "../views/SubClubPage.vue"
import SupportPage from '../views/SupportPage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign_in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/sign_up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/sub_club_selection',
    name: 'QueSelectClub',
    component: QueSelectClub
  },
  {
    path: '/questionnaire',
    name: 'Questionnaire',
    component: Questionnaire
  },
  {
    path: '/sub_club_selection',
    name: 'QueSelectClub',
    component: QueSelectClub
  },

  {
    path: '/questionnaire_result',
    name: 'QuestionnaireResult',
    component: QuestionnaireResult
  },
  {
    path: '/join_more_sub_clubs',
    name: 'JoinMoreSubClubs',
    component: JoinMoreSubClubs
  },
  {
    path: '/entry_page',
    name: 'EntryPage',
    component: EntryPage
  },
  {
    path: '/sub_club_page/:subclubname',
    name: 'SubClubPage',
    component: SubClubPage
  },
  {
    path: '/support_page',
    name: 'SupportPage',
    component: SupportPage
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
