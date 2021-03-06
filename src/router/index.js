import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/admin/Login'
import Admin from '@/admin/admin'
const adminIndex = resolve => require(['@/admin/welcome'], resolve);
const adminArticle = resolve => require(['@/admin/adminArticle'], resolve);
const adminArticleList = resolve => require(['@/admin/adminArticleList'], resolve);
const Change = resolve => require(['@/admin/change'], resolve);
const uploadPicture = resolve => require(['@/admin/uploadPicture'], resolve);
const Index = resolve => require(['@/client/index'], resolve);
const Blog = resolve => require(['@/client/list'], resolve);
const Detail = resolve => require(['@/client/detail'], resolve);
const Resume = resolve => require(['@/client/resume'], resolve);
const Picture = resolve => require(['@/client/picture'], resolve);
const About = resolve => require(['@/client/about'], resolve);

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: './',
  routes: [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/picture',
    name: 'Picture',
    component: Picture
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect: { name: "adminIndex" },
    children: [
      { path: 'welcome', name: 'adminIndex', component: adminIndex },
      { path: 'adminArticle', name: 'adminArticle', component: adminArticle },
      { path: 'adminArticleList', name: 'adminArticleList', component: adminArticleList },
      { path: 'change', name: 'Change', component: Change },
      { path: 'uploadPicture', name: 'uploadPicture', component: uploadPicture }
    ]
  }]
})