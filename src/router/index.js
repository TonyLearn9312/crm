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
            redirect: "/Home/Leads/Leads1/leadsList",
            children: [
              {
                path: 'leadsDetails',
                name: 'leadsDetails',
                component: () => import(/* webpackChunkName: "about" */ '../views/Leads/details.vue')
              },
              {
                path: 'leadsList',
                name: 'leadsList',
                component: () => import(/* webpackChunkName: "about" */ '../views/Leads/list.vue')
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
            redirect: "/Home/Contacts/Contacts1/list",
            children: [
              {
                path: 'list',
                name: 'list',
                component: () => import(/* webpackChunkName: "about" */ '../views/Contacts/list.vue')
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
        component: () => import(/* webpackChunkName: "about" */ '../views/users/users.vue'),
        redirect: "/Home/Users/Users1",
        children: [
          {
            path: 'Users1',
            name: 'Users1',
            component: () => import(/* webpackChunkName: "about" */ '../views/users/table_root.vue'),
            redirect: "/Home/Users/Users1/UsersList",
            children: [
              {
                path: 'UsersList',
                name: 'UsersList',
                component: () => import(/* webpackChunkName: "about" */ '../views/users/list.vue')
              },
              {
                path: 'UsersDetails',
                name: 'UsersDetails',
                component: () => import(/* webpackChunkName: "about" */ '../views/users/details.vue')
              },
            ],
          },
        ],
      },
      {
        path: 'groups',
        name: 'groups',
        component: () => import(/* webpackChunkName: "about" */ '../views/groups/groups.vue'),
        redirect: "/Home/groups/groups1",
        children: [
          {
            path: 'groups1',
            name: 'groups1',
            component: () => import(/* webpackChunkName: "about" */ '../views/groups/list_root.vue'),
            redirect: "/Home/Users/groups1/groupsList",
            children: [
              {
                path: 'groupsList',
                name: 'groupsList',
                component: () => import(/* webpackChunkName: "about" */ '../views/groups/lists.vue')
              },
              {
                path: 'profile',
                name: 'profile',
                component: () => import(/* webpackChunkName: "about" */ '../views/profile/profile.vue')
              }
              // {
              //   path: 'UsersDetails',
              //   name: 'UsersDetails',
              //   component: () => import(/* webpackChunkName: "about" */ '../views/users/details.vue')
              // },
            ],
          },
        ],
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
