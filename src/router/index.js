import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Lead from '../views/Leads/details'

Vue.use(VueRouter)
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    redirect: "/Home/dashboard",
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard.vue'),
        redirect: "/Home/dashboard/leads",
        children: [{
          path: 'leads',
          name: 'leads',
          component: () => import(/* webpackChunkName: "about" */ '../views/Leads/details.vue')
        }, {
          path: 'tasks',
          name: 'tasks',
          component: () => import(/* webpackChunkName: "about" */ '../views/Contacts/details.vue')
        },]
      },
      {
        path: 'Leads',
        name: 'Leads',
        component: () => import(/* webpackChunkName: "about" */ '../views/Leads/leads.vue'),
        redirect: "/Home/Leads/Leads1",
        children: [
          {
            path: 'Leads1',
            name: 'Leads1',
            component: () => import(/* webpackChunkName: "about" */ '../views/Leads/table_root.vue'),
            redirect: "/Home/Leads/Leads1/table",
            children: [
              {
                path: 'details',
                name: 'details',
                component: () => import(/* webpackChunkName: "about" */ '../views/Leads/details.vue')
              },
              {
                path: 'table',
                name: 'table',
                component: () => import(/* webpackChunkName: "about" */ '../views/Leads/table.vue')
              }
            ],
          },
        ],
      },
      {
        path: 'Contacts',
        name: 'Contacts',
        component: () => import(/* webpackChunkName: "about" */ '../views/Contacts/contacts.vue'),
        redirect: "/Home/Contacts/Contacts1",
        children: [
          {
            path: 'Contacts1',
            name: 'Contacts1',
            component: () => import(/* webpackChunkName: "about" */ '../views/Contacts/table_root.vue'),
            redirect: "/Home/Contacts/Contacts1/table",
            children: [
              {
                path: 'table',
                name: 'table',
                component: () => import(/* webpackChunkName: "about" */ '../views/Contacts/table.vue')
              },
              {
                path: 'details',
                name: 'details',
                component: () => import(/* webpackChunkName: "about" */ '../views/Contacts/details.vue')
              },
            ],
          },
        ],
      },
      {
        path: 'Users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "about" */ '../views/users/users.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    redirect: {
      name: "Home"
    }

  },
]
const originalReplace = VueRouter.prototype.push;
VueRouter.prototype.push = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
