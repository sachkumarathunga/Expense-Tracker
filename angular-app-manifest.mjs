
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sachkumarathunga.github.io/Expense-Tracker/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Expense-Tracker/dashboard",
    "route": "/Expense-Tracker"
  },
  {
    "renderMode": 2,
    "route": "/Expense-Tracker/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/Expense-Tracker/add-transaction"
  },
  {
    "renderMode": 2,
    "route": "/Expense-Tracker/transactions"
  },
  {
    "renderMode": 2,
    "route": "/Expense-Tracker/transaction-history"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23794, hash: '641b63a1a1e9c4112cc88e61b086ca8973f7538262faa369f8c1e0f6fa66b391', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17369, hash: '054838503503251cefebbb84cd609eb87547be9dfc13152dcd2aca34d7b22fba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'add-transaction/index.html': {size: 33679, hash: 'b684e4dbdbba9b5ff671d3d573f07c85d047ff975d23bc91ead1791cba378781', text: () => import('./assets-chunks/add-transaction_index_html.mjs').then(m => m.default)},
    'transactions/index.html': {size: 31189, hash: '0a5e4c6055a5620a704a33c640e2596534c9acb85cc87e373d395ffbb9087d36', text: () => import('./assets-chunks/transactions_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 33033, hash: '6deb57949b5807ad9d90700f59280ba7df76f6f290787e1f6069819160eaade8', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'transaction-history/index.html': {size: 32568, hash: '6b33ebe6a6ca411d9fde40d2e28d65c4b685c5b181e153f36b02a7b5eebca972', text: () => import('./assets-chunks/transaction-history_index_html.mjs').then(m => m.default)},
    'styles-WNKDDIZJ.css': {size: 6979, hash: 'AsSxQJi0uyE', text: () => import('./assets-chunks/styles-WNKDDIZJ_css.mjs').then(m => m.default)}
  },
};
