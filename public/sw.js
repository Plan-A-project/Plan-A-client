if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),f={module:{uri:t},exports:i,require:r};s[t]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0b308cfb-03086d3b01e313f4.js",revision:"03086d3b01e313f4"},{url:"/_next/static/chunks/0c428ae2-9c2042dabf68726d.js",revision:"9c2042dabf68726d"},{url:"/_next/static/chunks/1105-dd235e243900c771.js",revision:"dd235e243900c771"},{url:"/_next/static/chunks/1616-f0d71d3d09aee102.js",revision:"f0d71d3d09aee102"},{url:"/_next/static/chunks/1888-4a76e74403cccd48.js",revision:"4a76e74403cccd48"},{url:"/_next/static/chunks/1bfc9850-586df46726b14017.js",revision:"586df46726b14017"},{url:"/_next/static/chunks/252f366e-3cf1b25bca090bd8.js",revision:"3cf1b25bca090bd8"},{url:"/_next/static/chunks/3345-ab3c844575afceb2.js",revision:"ab3c844575afceb2"},{url:"/_next/static/chunks/346-99994b3d61ebeae7.js",revision:"99994b3d61ebeae7"},{url:"/_next/static/chunks/3529-603f878a262ea930.js",revision:"603f878a262ea930"},{url:"/_next/static/chunks/4405-35512329d19fd0f6.js",revision:"35512329d19fd0f6"},{url:"/_next/static/chunks/4704-e694feeb186fa32a.js",revision:"e694feeb186fa32a"},{url:"/_next/static/chunks/5264-328eabfa079e3197.js",revision:"328eabfa079e3197"},{url:"/_next/static/chunks/5471-804744ed13bb9a47.js",revision:"804744ed13bb9a47"},{url:"/_next/static/chunks/5675-f060b2b5f79fab40.js",revision:"f060b2b5f79fab40"},{url:"/_next/static/chunks/7032-fade3989bb9998b5.js",revision:"fade3989bb9998b5"},{url:"/_next/static/chunks/8496-62787f11344d45dd.js",revision:"62787f11344d45dd"},{url:"/_next/static/chunks/9949-1c0271f76cd47567.js",revision:"1c0271f76cd47567"},{url:"/_next/static/chunks/9b380ffa-cd4eb3ed4497b9b3.js",revision:"cd4eb3ed4497b9b3"},{url:"/_next/static/chunks/ae51ba48-fd83e889856b3113.js",revision:"fd83e889856b3113"},{url:"/_next/static/chunks/bee240a3-e937b29a5b0f945c.js",revision:"e937b29a5b0f945c"},{url:"/_next/static/chunks/d7eeaac4-4665cf0b2168266b.js",revision:"4665cf0b2168266b"},{url:"/_next/static/chunks/framework-3671d8951bf44e4e.js",revision:"3671d8951bf44e4e"},{url:"/_next/static/chunks/main-9e02d68d686c8726.js",revision:"9e02d68d686c8726"},{url:"/_next/static/chunks/pages/_app-8cafd62b86013567.js",revision:"8cafd62b86013567"},{url:"/_next/static/chunks/pages/_error-bd1da5a6907513b5.js",revision:"bd1da5a6907513b5"},{url:"/_next/static/chunks/pages/board-8f44cb09dbbbdfb3.js",revision:"8f44cb09dbbbdfb3"},{url:"/_next/static/chunks/pages/board/activity-ccfddc45ff48e750.js",revision:"ccfddc45ff48e750"},{url:"/_next/static/chunks/pages/board/anonymous-288cb97f29204194.js",revision:"288cb97f29204194"},{url:"/_next/static/chunks/pages/board/anonymous/tab-28eb61ff828b87dd.js",revision:"28eb61ff828b87dd"},{url:"/_next/static/chunks/pages/board/anonymous/write-0f6b4cea9a6f0258.js",revision:"0f6b4cea9a6f0258"},{url:"/_next/static/chunks/pages/board/club-ee17a1e2b9676f06.js",revision:"ee17a1e2b9676f06"},{url:"/_next/static/chunks/pages/board/form-95bac2ff943b954c.js",revision:"95bac2ff943b954c"},{url:"/_next/static/chunks/pages/board/free-e2183c3409a70e20.js",revision:"e2183c3409a70e20"},{url:"/_next/static/chunks/pages/board/recruit-afb63dafc4d32ff0.js",revision:"afb63dafc4d32ff0"},{url:"/_next/static/chunks/pages/certificationCenter-cf320501878b9f74.js",revision:"cf320501878b9f74"},{url:"/_next/static/chunks/pages/certificationCenter/company-de5dcf7b800b2ac4.js",revision:"de5dcf7b800b2ac4"},{url:"/_next/static/chunks/pages/certificationCenter/student-961d12a6334d5be2.js",revision:"961d12a6334d5be2"},{url:"/_next/static/chunks/pages/certificationCenter/student/%5BstudentEmail%5D-64766e21a20f2f85.js",revision:"64766e21a20f2f85"},{url:"/_next/static/chunks/pages/certificationCenter/studentA-832937d3c38cfb34.js",revision:"832937d3c38cfb34"},{url:"/_next/static/chunks/pages/certificationCenter/studentGraduate-368d9a3cd87579ae.js",revision:"368d9a3cd87579ae"},{url:"/_next/static/chunks/pages/components/AccountChangeItem-d63019d271c6c904.js",revision:"d63019d271c6c904"},{url:"/_next/static/chunks/pages/components/CertificationCategoryButton-af703d74afacc023.js",revision:"af703d74afacc023"},{url:"/_next/static/chunks/pages/components/CustomButton-c238bfc656c1307a.js",revision:"c238bfc656c1307a"},{url:"/_next/static/chunks/pages/components/CustomTag-613f17aacf0a6604.js",revision:"613f17aacf0a6604"},{url:"/_next/static/chunks/pages/components/DarkModeButton-395d664aa4c267b6.js",revision:"395d664aa4c267b6"},{url:"/_next/static/chunks/pages/components/Footer-83b163cbce6e1847.js",revision:"83b163cbce6e1847"},{url:"/_next/static/chunks/pages/components/Header-8a7678aa79ad8dea.js",revision:"8a7678aa79ad8dea"},{url:"/_next/static/chunks/pages/components/Layout-91fa7e5f0b68f453.js",revision:"91fa7e5f0b68f453"},{url:"/_next/static/chunks/pages/components/MyComment-718e0e754bb486df.js",revision:"718e0e754bb486df"},{url:"/_next/static/chunks/pages/components/MyPost-afa3b17d92379c89.js",revision:"afa3b17d92379c89"},{url:"/_next/static/chunks/pages/index-f77b2c7e700e0cfb.js",revision:"f77b2c7e700e0cfb"},{url:"/_next/static/chunks/pages/login-913fbe08ddcf9440.js",revision:"913fbe08ddcf9440"},{url:"/_next/static/chunks/pages/login/company-7608033dedbe6053.js",revision:"7608033dedbe6053"},{url:"/_next/static/chunks/pages/myPage-7ad6c4f420e20c9a.js",revision:"7ad6c4f420e20c9a"},{url:"/_next/static/chunks/pages/myPage/changeAccount-b1a0affb97d74a95.js",revision:"b1a0affb97d74a95"},{url:"/_next/static/chunks/pages/myPage/managePosts-fd256e41fc611ddd.js",revision:"fd256e41fc611ddd"},{url:"/_next/static/chunks/pages/posting/%5BboardId%5D/%5BpostId%5D-1c05fb8bf4944cea.js",revision:"1c05fb8bf4944cea"},{url:"/_next/static/chunks/pages/signup-34f22d28f3ce8220.js",revision:"34f22d28f3ce8220"},{url:"/_next/static/chunks/pages/signup/company-b49814616ba38b5b.js",revision:"b49814616ba38b5b"},{url:"/_next/static/chunks/pages/signup/company/complete-79eb48d4a2694f4c.js",revision:"79eb48d4a2694f4c"},{url:"/_next/static/chunks/pages/signup/complete-7f1fbc00df25bb1e.js",revision:"7f1fbc00df25bb1e"},{url:"/_next/static/chunks/pages/timetable-c197b46dc4bf65a0.js",revision:"c197b46dc4bf65a0"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d36b50b5fb8708d9.js",revision:"d36b50b5fb8708d9"},{url:"/_next/static/css/876d048b5dab7c28.css",revision:"876d048b5dab7c28"},{url:"/_next/static/css/a93b4edcd2955a73.css",revision:"a93b4edcd2955a73"},{url:"/_next/static/css/ae4ed9c503fd1e33.css",revision:"ae4ed9c503fd1e33"},{url:"/_next/static/e-RtXRXkUa6Ovf_V01Zaf/_buildManifest.js",revision:"f9b6aa133e678f259b8c1a22b6424e9b"},{url:"/_next/static/e-RtXRXkUa6Ovf_V01Zaf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-icon-192x192.png",revision:"4f102be6a3707069f284f01e00b9d45b"},{url:"/apple-icon.png",revision:"05de1a4f6362121fa4405409dedaa864"},{url:"/assets/2.svg",revision:"e8dc92ffa7772f0498d2836bebbe5ebb"},{url:"/assets/3.svg",revision:"4b7ad1ddf39f036c178aff00a92ccb62"},{url:"/assets/4.svg",revision:"97cb1e75014b7f99e156a87fa4f898a8"},{url:"/assets/5.svg",revision:"f5d8a2e3d5bdfd26227fc9a4714735a5"},{url:"/assets/6.svg",revision:"85be9fa4c9d3b38c4575e2fce88dcaa4"},{url:"/assets/Icon.jpg",revision:"993a5b8a03ce3da6ced1876f7f2f8eb2"},{url:"/assets/back.svg",revision:"d8a48500e44869e13ef59da4a84b0b86"},{url:"/assets/bang.svg",revision:"1983fe0758d184e6117cd2b6345406fb"},{url:"/assets/banner.png",revision:"f5d2512139e28aaa5b10ce5664ac9106"},{url:"/assets/boards/activity.png",revision:"84b893d28b0bd59ff52f484d2205b9fb"},{url:"/assets/boards/club.png",revision:"f6fb606d778ea5581d47c4c9a9cbd431"},{url:"/assets/boards/free.png",revision:"f51ff68df6ed74d9a5744b890e3f8462"},{url:"/assets/boards/recruit.png",revision:"e500a8ae0817b59d06b3e4a10565fb49"},{url:"/assets/coverBack.svg",revision:"03654f96712fc970f126478de4b4c40c"},{url:"/assets/coverBack2.svg",revision:"517064b44344fe98dd4936b55fc10cac"},{url:"/assets/coverBack3.svg",revision:"f3937e7b75b84e0d3c04c6328259eb98"},{url:"/assets/elearning.png",revision:"fa5a399375121a58949a0a2b6c551ac5"},{url:"/assets/icon-520.png",revision:"7db275af45dc029a6fc231dec1fdccbe"},{url:"/assets/logo-uni.png",revision:"13723250c464ae813df7cf4746261745"},{url:"/assets/rightArrow.svg",revision:"ac0b2bd3f5468d389267f0fa048dede3"},{url:"/assets/search.svg",revision:"07553f4a6b5dcf992140227e4af92ced"},{url:"/favicon-16x16.png",revision:"13117851680b6c46f8e941875ea9e94f"},{url:"/favicon-32x32.png",revision:"f532dd49226bd62687a321ceabac6193"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/Pretendard-Medium.woff2",revision:"146472533da4d370f600334864179b5b"},{url:"/fonts/Pretendard-Regular.woff2",revision:"bac296f1fd0973251e94406b8d328847"},{url:"/fonts/Pretendard-SemiBold.woff2",revision:"b1e912aa560e4d0e6537e42babb7f112"},{url:"/fonts/style.css",revision:"ee7ba53016ca065915af27849c754513"},{url:"/manifest.json",revision:"da7814a671c371d9eef5b2635970f542"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
