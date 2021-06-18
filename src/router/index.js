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
    redirect:"/Home/Leads",
    children: [
      {
        path: 'Leads',
        name: 'Leads',
        component: () => import(/* webpackChunkName: "about" */ '../views/Leads/leads.vue'),
        redirect: "/Home/Leads/details",
        children: [
          {
            path: 'table',
            name: 'table',
            component: () => import(/* webpackChunkName: "about" */ '../views/Leads/table.vue')
          },
          {
            path: 'details',
            name: 'details',
            component: () => import(/* webpackChunkName: "about" */ '../views/Leads/details.vue')
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
