
export default {
  basePath: 'https://sachkumarathunga.github.io/Expense-Tracker',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
