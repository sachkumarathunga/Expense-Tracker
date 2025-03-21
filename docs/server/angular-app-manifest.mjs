
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Expenses-Tracker/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Expenses-Tracker/dashboard",
    "route": "/Expenses-Tracker"
  },
  {
    "renderMode": 2,
    "route": "/Expenses-Tracker/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/Expenses-Tracker/add-transaction"
  },
  {
    "renderMode": 2,
    "route": "/Expenses-Tracker/transactions"
  },
  {
    "renderMode": 2,
    "route": "/Expenses-Tracker/transaction-history"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23687, hash: '9758281574eaddec2400127c4f0403256e4e9d33817f9d6d0a023c91be5036e6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17261, hash: '269b3dadac14ae2ce293c0a8d73cfdea90967524475cf758458495830337395f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'transactions/index.html': {size: 28581, hash: '8d9ffef85eb539c1a962e8fc250602383f6b9613a3309593c404e3a31b69627c', text: () => import('./assets-chunks/transactions_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 29821, hash: '058bb4c3bb509b45fc8bce22021535b54acdca40593885a465f0a2b7911f318e', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'add-transaction/index.html': {size: 30782, hash: '400617839520b450d3157e321efc427bf87db7b8a29eb2c8afe8520daeac61fd', text: () => import('./assets-chunks/add-transaction_index_html.mjs').then(m => m.default)},
    'transaction-history/index.html': {size: 29951, hash: '5c482e0dafd0f5018c1ec50f1d2496c07cc5a604c7c3b9f1e714742de14f3eae', text: () => import('./assets-chunks/transaction-history_index_html.mjs').then(m => m.default)},
    'styles-WNKDDIZJ.css': {size: 6979, hash: 'AsSxQJi0uyE', text: () => import('./assets-chunks/styles-WNKDDIZJ_css.mjs').then(m => m.default)}
  },
};
