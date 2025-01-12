export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>Home Page</title>
  <base href="/FirstApp/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>@charset "UTF-8";:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text-emphasis:#052c65;--bs-secondary-text-emphasis:#2b2f32;--bs-success-text-emphasis:#0a3622;--bs-info-text-emphasis:#055160;--bs-warning-text-emphasis:#664d03;--bs-danger-text-emphasis:#58151c;--bs-light-text-emphasis:#495057;--bs-dark-text-emphasis:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#e2e3e5;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#c4c8cb;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:rgba(33, 37, 41, .75);--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:rgba(33, 37, 41, .5);--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-heading-color:inherit;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-highlight-color:#212529;--bs-highlight-bg:#fff3cd;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0, 0, 0, .175);--bs-border-radius:.375rem;--bs-border-radius-sm:.25rem;--bs-border-radius-lg:.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15);--bs-box-shadow-sm:0 .125rem .25rem rgba(0, 0, 0, .075);--bs-box-shadow-lg:0 1rem 3rem rgba(0, 0, 0, .175);--bs-box-shadow-inset:inset 0 1px 2px rgba(0, 0, 0, .075);--bs-focus-ring-width:.25rem;--bs-focus-ring-opacity:.25;--bs-focus-ring-color:rgba(13, 110, 253, .25);--bs-form-valid-color:#198754;--bs-form-valid-border-color:#198754;--bs-form-invalid-color:#dc3545;--bs-form-invalid-border-color:#dc3545}*,:after,:before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}h1,h3,h4{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2;color:var(--bs-heading-color)}h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){h1{font-size:2.5rem}}h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){h3{font-size:1.75rem}}h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){h4{font-size:1.5rem}}p{margin-top:0;margin-bottom:1rem}ul{padding-left:2rem}ul{margin-top:0;margin-bottom:1rem}a{color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));text-decoration:underline}a:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb)}img{vertical-align:middle}input,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}[type=submit]{-webkit-appearance:button}[type=submit]:not(:disabled){cursor:pointer}textarea{resize:vertical}.container{--bs-gutter-x:1.5rem;--bs-gutter-y:0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}@media (min-width:1400px){.container{max-width:1320px}}:root{--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}.nav-link{display:block;padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);text-decoration:none;background:0 0;border:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:var(--bs-nav-link-hover-color)}.nav-link:focus-visible{outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.nav-link:disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}.navbar{--bs-navbar-padding-x:0;--bs-navbar-padding-y:.5rem;--bs-navbar-color:rgba(var(--bs-emphasis-color-rgb), .65);--bs-navbar-hover-color:rgba(var(--bs-emphasis-color-rgb), .8);--bs-navbar-disabled-color:rgba(var(--bs-emphasis-color-rgb), .3);--bs-navbar-active-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-padding-y:.3125rem;--bs-navbar-brand-margin-end:1rem;--bs-navbar-brand-font-size:1.25rem;--bs-navbar-brand-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-hover-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-nav-link-padding-x:.5rem;--bs-navbar-toggler-padding-y:.25rem;--bs-navbar-toggler-padding-x:.75rem;--bs-navbar-toggler-font-size:1.25rem;--bs-navbar-toggler-icon-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");--bs-navbar-toggler-border-color:rgba(var(--bs-emphasis-color-rgb), .15);--bs-navbar-toggler-border-radius:var(--bs-border-radius);--bs-navbar-toggler-focus-width:.25rem;--bs-navbar-toggler-transition:box-shadow .15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}.rounded{border-radius:var(--bs-border-radius)!important}
</style><link rel="stylesheet" href="styles-DZ6UBGXD.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-DZ6UBGXD.css"></noscript><style ng-app-id="ng">*[_ngcontent-ng-c4274021568]{font-family:arial}body[_ngcontent-ng-c4274021568]{background:#f2f2f2}.navbar[_ngcontent-ng-c4274021568]{width:100%;height:60px;padding:12px 32px;margin:auto;background:#fabc3f}.logo[_ngcontent-ng-c4274021568]{width:50px;float:left}.logo[_ngcontent-ng-c4274021568]   img[_ngcontent-ng-c4274021568]{width:50px}ul[_ngcontent-ng-c4274021568]{float:right}li[_ngcontent-ng-c4274021568]{display:inline-block;padding:0 16px;line-height:30px;cursor:pointer;border-radius:8px}li[_ngcontent-ng-c4274021568]:hover{background:#000;color:#fabc3f}</style><style ng-app-id="ng">*[_ngcontent-ng-c1805335480]{margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#fff}footer[_ngcontent-ng-c1805335480]{background:#343434;padding-top:50px}.container[_ngcontent-ng-c1805335480]{width:1140px;margin:auto;display:flex;justify-content:center}.footer-content[_ngcontent-ng-c1805335480]{width:33.3%}h3[_ngcontent-ng-c1805335480]{font-size:28px;margin-bottom:15px;text-align:center}.footer-content[_ngcontent-ng-c1805335480]   p[_ngcontent-ng-c1805335480]{width:190px;margin:auto;padding:7px}.footer-content[_ngcontent-ng-c1805335480]   ul[_ngcontent-ng-c1805335480]{text-align:center}.list[_ngcontent-ng-c1805335480]{padding:0}.list[_ngcontent-ng-c1805335480]   li[_ngcontent-ng-c1805335480]{width:auto;text-align:center;list-style-type:none;padding:7px;position:relative}.list[_ngcontent-ng-c1805335480]   li[_ngcontent-ng-c1805335480]:before{content:"";position:absolute;transform:translate(-50%,-50%);left:50%;top:100%;width:0;height:2px;background:#fabc3f;transition-duration:.5s}.list[_ngcontent-ng-c1805335480]   li[_ngcontent-ng-c1805335480]:hover:before{width:70px}.social-icons[_ngcontent-ng-c1805335480]{text-align:center;padding:0}.social-icons[_ngcontent-ng-c1805335480]   li[_ngcontent-ng-c1805335480]{display:inline-block;text-align:center;padding:5px}.social-icons[_ngcontent-ng-c1805335480]   i[_ngcontent-ng-c1805335480]{color:#fff;font-size:25px}a[_ngcontent-ng-c1805335480]{text-decoration:none}a[_ngcontent-ng-c1805335480]:hover, .social-icons[_ngcontent-ng-c1805335480]   i[_ngcontent-ng-c1805335480]:hover{color:#fabc3f}.bottom-bar[_ngcontent-ng-c1805335480]{background:#fabc3f;text-align:center;padding:10px 0;margin-top:50px}.bottom-bar[_ngcontent-ng-c1805335480]   p[_ngcontent-ng-c1805335480]{color:#343434;margin:0;font-size:16px;padding:7px}</style><style ng-app-id="ng">*[_ngcontent-ng-c3285987257]{margin:0;padding:0;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif}.container[_ngcontent-ng-c3285987257]{display:flex;justify-content:center;align-items:center;background:url(/contact.webp) no-repeat center/cover}.container[_ngcontent-ng-c3285987257]   form[_ngcontent-ng-c3285987257]{width:670px;height:600px;display:flex;justify-content:center;border-radius:15px;background:#ffffff1a;-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px);flex-wrap:wrap}.container[_ngcontent-ng-c3285987257]   form[_ngcontent-ng-c3285987257]   h1[_ngcontent-ng-c3285987257]{color:#fff;font-weight:700;line-height:2;margin-top:20px;width:500px;text-align:center}.container[_ngcontent-ng-c3285987257]   form[_ngcontent-ng-c3285987257]   input[_ngcontent-ng-c3285987257]{width:300px;height:50px;padding-left:10px;outline:none;border:none;font-size:20px;margin-bottom:10px;background:none;border-bottom:2px solid #fff;color:#fff}.container[_ngcontent-ng-c3285987257]   form[_ngcontent-ng-c3285987257]   input[_ngcontent-ng-c3285987257]::placeholder{color:#fff}.container[_ngcontent-ng-c3285987257]   form[_ngcontent-ng-c3285987257]   #lastName[_ngcontent-ng-c3285987257], .container[_ngcontent-ng-c3285987257]   form[_ngcontent-ng-c3285987257]   #mobile[_ngcontent-ng-c3285987257]{margin-left:20px}.container[_ngcontent-ng-c3285987257]   form[_ngcontent-ng-c3285987257]   h4[_ngcontent-ng-c3285987257]{color:#fff;font-weight:300;width:600px;margin-top:20px}.container[_ngcontent-ng-c3285987257]   form[_ngcontent-ng-c3285987257]   textarea[_ngcontent-ng-c3285987257]{background:none;border:none;border-bottom:2px solid #fff;color:#fff;font-weight:200;font-size:20px;padding:10px;outline:none;min-height:90px;max-height:90px;min-width:620px;max-width:620px}.container[_ngcontent-ng-c3285987257]   form[_ngcontent-ng-c3285987257]   h4[_ngcontent-ng-c3285987257]{font-size:20px}.container[_ngcontent-ng-c3285987257]   form[_ngcontent-ng-c3285987257]   #button[_ngcontent-ng-c3285987257]{border:none;background:#fff;border-radius:5px;margin-top:20px;font-weight:600;font-size:24px;color:#000;width:200px;height:60px;padding:0;margin-bottom:30px;transition:.3s}.container[_ngcontent-ng-c3285987257]   form[_ngcontent-ng-c3285987257]   #button[_ngcontent-ng-c3285987257]:hover{background:#000;color:#fff;transition:.5s ease-in-out}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="19.0.5" ngh="1" ng-server-context="ssg"><app-navbar _nghost-ng-c4274021568 ngh="0"><div _ngcontent-ng-c4274021568 class="navbar"><div _ngcontent-ng-c4274021568 class="logo"><img _ngcontent-ng-c4274021568 src="/logo.png" alt></div><ul _ngcontent-ng-c4274021568><li _ngcontent-ng-c4274021568 class="nav-item"><a _ngcontent-ng-c4274021568 routerlink="home" routerlinkactive=" rounded" class="nav-link rounded" href="/FirstApp/home" jsaction="click:;">Home</a></li><li _ngcontent-ng-c4274021568 class="nav-item"><a _ngcontent-ng-c4274021568 routerlink="about" routerlinkactive=" rounded" class="nav-link" href="/FirstApp/about" jsaction="click:;">About</a></li><li _ngcontent-ng-c4274021568 class="nav-item"><a _ngcontent-ng-c4274021568 routerlink="portfolio" routerlinkactive=" rounded" class="nav-link" href="/FirstApp/portfolio" jsaction="click:;">Portfolio</a></li></ul></div></app-navbar><router-outlet></router-outlet><app-home _nghost-ng-c3285987257 ngh="0"><div _ngcontent-ng-c3285987257 class="container"><form _ngcontent-ng-c3285987257><h1 _ngcontent-ng-c3285987257>Contact Us</h1><input _ngcontent-ng-c3285987257 type="text" id="firstName" placeholder="First Name" required><input _ngcontent-ng-c3285987257 type="text" id="lastName" placeholder="Last Name" required><input _ngcontent-ng-c3285987257 type="email" id="email" placeholder="Email" required><input _ngcontent-ng-c3285987257 type="text" id="mobile" placeholder="Mobile" required><h4 _ngcontent-ng-c3285987257>Type Your Message Here...</h4><textarea _ngcontent-ng-c3285987257 required></textarea><input _ngcontent-ng-c3285987257 type="submit" value="Send" id="button"></form></div></app-home><!----><app-footer _nghost-ng-c1805335480 ngh="0"><footer _ngcontent-ng-c1805335480><div _ngcontent-ng-c1805335480 class="container"><div _ngcontent-ng-c1805335480 class="footer-content"><h3 _ngcontent-ng-c1805335480>Contact Us</h3><p _ngcontent-ng-c1805335480>Email:Infoexample.com</p><p _ngcontent-ng-c1805335480>Phone:+121 56556 565556</p><p _ngcontent-ng-c1805335480>Address:Your Address 123 street</p></div><div _ngcontent-ng-c1805335480 class="footer-content"><h3 _ngcontent-ng-c1805335480>Quick Links</h3><ul _ngcontent-ng-c1805335480 class="list"><li _ngcontent-ng-c1805335480><a _ngcontent-ng-c1805335480 href>Home</a></li><li _ngcontent-ng-c1805335480><a _ngcontent-ng-c1805335480 href>About</a></li><li _ngcontent-ng-c1805335480><a _ngcontent-ng-c1805335480 href>Portfolio</a></li></ul></div><div _ngcontent-ng-c1805335480 class="footer-content"><h3 _ngcontent-ng-c1805335480>Follow Us</h3><ul _ngcontent-ng-c1805335480 class="social-icons"><li _ngcontent-ng-c1805335480><a _ngcontent-ng-c1805335480 href><i _ngcontent-ng-c1805335480 class="fa-brands fa-facebook"></i></a></li><li _ngcontent-ng-c1805335480><a _ngcontent-ng-c1805335480 href><i _ngcontent-ng-c1805335480 class="fab fa-twitter"></i></a></li><li _ngcontent-ng-c1805335480><a _ngcontent-ng-c1805335480 href><i _ngcontent-ng-c1805335480 class="fab fa-instagram"></i></a></li><li _ngcontent-ng-c1805335480><a _ngcontent-ng-c1805335480 href><i _ngcontent-ng-c1805335480 class="fab fa-linkedin"></i></a></li></ul></div></div><div _ngcontent-ng-c1805335480 class="bottom-bar"><p _ngcontent-ng-c1805335480>© 2023 your company . All rights reserved</p></div></footer></app-footer></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-FMM4EPUA.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"c":{"1":[{"i":"c3285987257","r":1}]}}]}</script></body></html>`;