import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-a-contract',
    name: 'CreateAContract',
    component: () =>
      import(
        /* webpackChunkName: "CreateAContract" */ '../views/CreateAContract.vue'
      )
  },
  {
    path: '/compliance-documents',
    name: 'ComplianceDocuments',
    component: () =>
      import(
        /* webpackChunkName: "ComplianceDocuments" */ '../views/ComplianceDocuments.vue'
      )
  },
  {
    path: '/invoices',
    name: 'Invoices',
    component: () =>
      import(/* webpackChunkName: "Invoices" */ '../views/Invoices.vue')
  },
  {
    path: '/taxes',
    name: 'Taxes',
    component: () =>
      import(/* webpackChunkName: "Taxes" */ '../views/Taxes.vue')
  },
  {
    path: '/transaction-history',
    name: 'TransactionHistory',
    component: () =>
      import(
        /* webpackChunkName: "TransactionHistory" */ '../views/TransactionHistory.vue'
      )
  },
  {
    path: '/insurance',
    name: 'Insurance',
    component: () =>
      import(/* webpackChunkName: "Insurance" */ '../views/Insurance.vue')
  },
  {
    path: '/deel-advance',
    name: 'DeelAdvance',
    component: () =>
      import(/* webpackChunkName: "DeelAdvance" */ '../views/DeelAdvance.vue')
  },
  {
    path: '/perks',
    name: 'Perks',
    component: () =>
      import(/* webpackChunkName: "Perks" */ '../views/Perks.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
