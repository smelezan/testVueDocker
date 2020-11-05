
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import HomeComponent from './components/HomeComponent.vue';
import CreateIssueComponent from './components/Issues/CreateIssueComponent.vue';
import IndexIssueComponent from './components/Issues/IndexIssueComponent.vue';
import EditIssueComponent from './components/Issues/EditIssueComponent.vue';
import CreateTaskComponent from './components/Tasks/CreateTaskComponent.vue';
import IndexTaskComponent from './components/Tasks/IndexTaskComponent.vue';
import EditTaskComponent from './components/Tasks/EditTaskComponent.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
      name: 'createIssue',
      path: '/create-issue',
      component: CreateIssueComponent
  },
  {
      name: 'issues',
      path: '/issues',
      component: IndexIssueComponent
  },
  {
      name: 'editIssue',
      path: '/edit/Issue/:id',
      component: EditIssueComponent
  },
  {
      name: 'createTask',
      path: '/create-task',
      component: CreateTaskComponent
  },
  {
      name: 'tasks',
      path: '/tasks',
      component: IndexTaskComponent
  },
  {
      name: 'editTask',
      path: '/edit/Task/:id',
      component: EditTaskComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');