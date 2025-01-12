
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/FirstApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/FirstApp"
  },
  {
    "renderMode": 2,
    "route": "/FirstApp/home"
  },
  {
    "renderMode": 2,
    "route": "/FirstApp/about"
  },
  {
    "renderMode": 2,
    "route": "/FirstApp/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/FirstApp/**"
  }
],
  assets: {
    'index.csr.html': {size: 4935, hash: 'dfb67295548c17347a0cfe914c432cb046269a1a1501257cdfe2bb4417c54809', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: '028d50bee0e8e58faac0d85c7be0465d07ff5129a133abc2e01209c8ad85c6ee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 17093, hash: 'c1edb992f64868872c9a8c0f560d8c4e06f0ddc103889b0b0d810a162e1f7f96', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 15623, hash: '43e7ee46a56ab13ec0f30c5ddcd94417570beb772a590331557bbdf726a63f55', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 17034, hash: 'b8a4a49d03c8237fdf28cbc249cac4d25feec0bb85ec2317bd132c7e0a80b20e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 16452, hash: '7890b16561c484b2c0ede4eb2d8a7bc176b9974558a0e1de6720c2a0b8a083b0', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
