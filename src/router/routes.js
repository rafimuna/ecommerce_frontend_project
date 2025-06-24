const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Public Pages
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'login', name: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', name: 'register', component: () => import('pages/RegisterPage.vue') },
      {
        path: 'product/:id',
        name: 'product-details',
        component: () => import('pages/ProductPage.vue'),
      },
      { path: 'cart', name: 'cart', component: () => import('pages/CartPage.vue') },
      { path: 'checkout', name: 'checkout', component: () => import('pages/CheckoutPage.vue') },

      // User Dashboard
      { path: 'user', name: 'user-dashboard', component: () => import('pages/UserDashboard.vue') },
      {
        path: 'orders',
        name: 'order-history',
        component: () => import('pages/OrderHistoryPage.vue'),
      },

      // Admin Dashboard
      {
        path: 'admin',
        name: 'admin-dashboard',
        component: () => import('pages/AdminDashboard.vue'),
      },
    ],
  },

  // 404 fallback route (always last)
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
