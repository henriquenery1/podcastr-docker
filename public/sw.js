if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-4ae45ca6d0f28c4504d3.js",revision:"iEAfqsWKQLg8OVk9LV2DK"},{url:"/_next/static/chunks/main-70d73a3d77b8c53f77e3.js",revision:"iEAfqsWKQLg8OVk9LV2DK"},{url:"/_next/static/chunks/pages/404-26a9d0fb6d200e9e2e69.js",revision:"iEAfqsWKQLg8OVk9LV2DK"},{url:"/_next/static/chunks/pages/_app-0b021a7f74bc4c7e5721.js",revision:"iEAfqsWKQLg8OVk9LV2DK"},{url:"/_next/static/chunks/pages/_error-e69890b6db18dcbc6fa4.js",revision:"iEAfqsWKQLg8OVk9LV2DK"},{url:"/_next/static/chunks/pages/dashboard-fc0c8863248e231a2cc2.js",revision:"iEAfqsWKQLg8OVk9LV2DK"},{url:"/_next/static/chunks/pages/episodes/%5Bslug%5D-2391432952ece4310c47.js",revision:"iEAfqsWKQLg8OVk9LV2DK"},{url:"/_next/static/chunks/pages/index-c4b3dd445b1169de7436.js",revision:"iEAfqsWKQLg8OVk9LV2DK"},{url:"/_next/static/chunks/polyfills-eef578260fd80f8fff94.js",revision:"iEAfqsWKQLg8OVk9LV2DK"},{url:"/_next/static/chunks/webpack-189c53927ffd3caf09c3.js",revision:"iEAfqsWKQLg8OVk9LV2DK"},{url:"/_next/static/css/7aa67573e161884225b5.css",revision:"iEAfqsWKQLg8OVk9LV2DK"},{url:"/_next/static/iEAfqsWKQLg8OVk9LV2DK/_buildManifest.js",revision:"iEAfqsWKQLg8OVk9LV2DK"},{url:"/_next/static/iEAfqsWKQLg8OVk9LV2DK/_ssgManifest.js",revision:"iEAfqsWKQLg8OVk9LV2DK"},{url:"/apple-icon.png",revision:"07717d5e7c78398ab549fac81db49a19"},{url:"/favicon.png",revision:"9a10a0c57853a065708f39c0cf7c8640"},{url:"/icon-1024x1024.png",revision:"07717d5e7c78398ab549fac81db49a19"},{url:"/icon-128x128.png",revision:"f944a36fa089827baff0c85f2265e5a6"},{url:"/icon-256x256.png",revision:"84bbba49f8419fbf82a2870291fc48f7"},{url:"/icon-512x512.png",revision:"1a3728b6addda79f67debdb58168f110"},{url:"/icons/arrow-left.svg",revision:"a4bec8983393a6650eeadc70ceaca3f1"},{url:"/icons/logo.svg",revision:"270fed2f85e264e3b1b678bb7fb3f2fd"},{url:"/icons/pause.svg",revision:"54841e81896727b41392f30ac032a7be"},{url:"/icons/play-green.svg",revision:"de07138a15303202044cb5e780d3fdd3"},{url:"/icons/play-next.svg",revision:"25a2b47e3cda80ad6285c6725bf9d5ba"},{url:"/icons/play-previous.svg",revision:"85b6ed81bd274cf318272535025f002b"},{url:"/icons/play.svg",revision:"4639f696f322c696dc52f91fdf2f6fcc"},{url:"/icons/playing.svg",revision:"2f05f6b73a93700697b0491d1b77370a"},{url:"/icons/repeat.svg",revision:"f61d9bb4e9c66d07ecb06fc5844a52c8"},{url:"/icons/shuffle.svg",revision:"34540ba61de3ff9c3fff2af2c9cad007"},{url:"/icons/simple-logo.svg",revision:"0c79b230b0426331b1ff2784a8962da8"},{url:"/images/blur.svg",revision:"d8d1af2d619e2ff01139f1fa7d33f32a"},{url:"/images/template.svg",revision:"9913325820ee5137b7aad8f2a6c09a3b"},{url:"/manifest.json",revision:"9c3e03c78752efb34024a04fefcc758e"},{url:"/robots.txt",revision:"3a830b976af1533d0385101e643439ff"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
