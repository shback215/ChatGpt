
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1826, hash: '75ce20304915825c1b333e9eff5b5d0937a08309f27027e49c7b2df08a6da4ca', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: '3026cccb2ef7a9e2b1f3b6b4bbd5c7370989ae096eb01c999b741ec10fadf8fd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3630, hash: 'a51af3a272714f22c976fb90a63bce4030283d8401f866c254f12a5839d38eea', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-62W6XVJN.css': {size: 4150, hash: 'xO66MyteEEE', text: () => import('./assets-chunks/styles-62W6XVJN_css.mjs').then(m => m.default)}
  },
};
