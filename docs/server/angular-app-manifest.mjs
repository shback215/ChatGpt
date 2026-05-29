
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ChatGpt/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ChatGpt"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1833, hash: '4518ae3b9cb788b801b4a9143476f4360ab3adf84570c7e2f2b419b2ebe18908', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 953, hash: '63f1f9deb9f1724ac218b516bb59cd5f361af2e0982e08aec3dfb53d196134df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3637, hash: 'c47609a4e30bbb89ba1f5710d1a929e29362cdb6e524866ea768bbdfbef038e8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-62W6XVJN.css': {size: 4150, hash: 'xO66MyteEEE', text: () => import('./assets-chunks/styles-62W6XVJN_css.mjs').then(m => m.default)}
  },
};
