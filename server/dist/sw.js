importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02dfd100040be22aa710.js",
    "revision": "0fc3f3ad55599297bb31cb51900a3b4a"
  },
  {
    "url": "/_nuxt/52d5836fd592e7e2f886.js",
    "revision": "69a2886bcee03c74b7d59526295f2da5"
  },
  {
    "url": "/_nuxt/5d977fe46e6e37230efb.js",
    "revision": "eb50fb6e2310a27de2c25748df9ed17f"
  },
  {
    "url": "/_nuxt/73175a481ccb2c782ce7.js",
    "revision": "14416388a66abd7ceaebad4ceb97ed19"
  },
  {
    "url": "/_nuxt/8adeb6befc8f1e30f901.js",
    "revision": "b2f04140af58abaecf1d289fbc446720"
  },
  {
    "url": "/_nuxt/aaa90b771eb1b939a54c.js",
    "revision": "179280750b08faf225339ad6293b56a6"
  },
  {
    "url": "/_nuxt/cd99dcb8d1de13727fd0.js",
    "revision": "30e16d76b23b19173a9968803e1cc54e"
  },
  {
    "url": "/_nuxt/d133271109891b7bf0a9.js",
    "revision": "47795a496ccf38cf2dfc26a323df7bdd"
  },
  {
    "url": "/_nuxt/d914c1e46fbf59df5e5f.js",
    "revision": "18ed170ea01123b7a833df1ff49afea6"
  }
], {
  "cacheId": "client",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
