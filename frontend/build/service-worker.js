// eslint
'use strict'
var precacheConfig = [
    ['/index.html', 'ddad27fdda3a3bd5407fa4652cdaa187'],
    ['/static/js/0.2430c33b.chunk.js', '4897eb488669ac94a1bf5429568077bf'],
    ['/static/js/main.5d91af7e.js', '9399b8a4cd62bf002f724b06c784a8b6'],
  ],
  cacheName =
    'sw-precache-v3-sw-precache-webpack-plugin-' +
    (self.registration ? self.registration.scope : ''),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function (e, t) {
    e = new URL(e)
    return '/' === e.pathname.slice(-1) && (e.pathname += t), e.toString()
  },
  cleanResponse = function (t) {
    return t.redirected
      ? ('body' in t ? Promise.resolve(t.body) : t.blob()).then(function (e) {
          return new Response(e, {
            headers: t.headers,
            status: t.status,
            statusText: t.statusText,
          })
        })
      : Promise.resolve(t)
  },
  createCacheKey = function (e, t, n, r) {
    e = new URL(e)
    return (
      (r && e.pathname.match(r)) ||
        (e.search +=
          (e.search ? '&' : '') +
          encodeURIComponent(t) +
          '=' +
          encodeURIComponent(n)),
      e.toString()
    )
  },
  isPathWhitelisted = function (e, t) {
    if (0 === e.length) return !0
    var n = new URL(t).pathname
    return e.some(function (e) {
      return n.match(e)
    })
  },
  stripIgnoredUrlParameters = function (e, n) {
    e = new URL(e)
    return (
      (e.hash = ''),
      (e.search = e.search
        .slice(1)
        .split('&')
        .map(function (e) {
          return e.split('=')
        })
        .filter(function (t) {
          return n.every(function (e) {
            return !e.test(t[0])
          })
        })
        .map(function (e) {
          return e.join('=')
        })
        .join('&')),
      e.toString()
    )
  },
  hashParamName = '_sw-precache',
  urlsToCacheKeys = new Map(
    precacheConfig.map(function (e) {
      var t = e[0],
        e = e[1],
        t = new URL(t, self.location),
        e = createCacheKey(t, hashParamName, e, /\.\w{8}\./)
      return [t.toString(), e]
    })
  )
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function (e) {
      return e.map(function (e) {
        return e.url
      })
    })
    .then(function (e) {
      return new Set(e)
    })
}
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function (r) {
        return setOfCachedUrls(r).then(function (n) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function (t) {
              if (!n.has(t)) {
                var e = new Request(t, { credentials: 'same-origin' })
                return fetch(e).then(function (e) {
                  if (!e.ok)
                    throw new Error(
                      'Request for ' +
                        t +
                        ' returned a response with status ' +
                        e.status
                    )
                  return cleanResponse(e).then(function (e) {
                    return r.put(t, e)
                  })
                })
              }
            })
          )
        })
      })
      .then(function () {
        return self.skipWaiting()
      })
  )
}),
  self.addEventListener('activate', function (e) {
    var n = new Set(urlsToCacheKeys.values())
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function (t) {
          return t.keys().then(function (e) {
            return Promise.all(
              e.map(function (e) {
                if (!n.has(e.url)) return t.delete(e)
              })
            )
          })
        })
        .then(function () {
          return self.clients.claim()
        })
    )
  }),
  self.addEventListener('fetch', function (t) {
    var n, e, r
    'GET' === t.request.method &&
      ((n = stripIgnoredUrlParameters(
        t.request.url,
        ignoreUrlParametersMatching
      )),
      (r = 'index.html'),
      (e = urlsToCacheKeys.has(n)) ||
        ((n = addDirectoryIndex(n, r)), (e = urlsToCacheKeys.has(n))),
      (r = '/index.html'),
      !e &&
        'navigate' === t.request.mode &&
        isPathWhitelisted(['^(?!\\/__).*'], t.request.url) &&
        ((n = new URL(r, self.location).toString()),
        (e = urlsToCacheKeys.has(n))),
      e &&
        t.respondWith(
          caches
            .open(cacheName)
            .then(function (e) {
              return e.match(urlsToCacheKeys.get(n)).then(function (e) {
                if (e) return e
                throw Error('The cached response that was expected is missing.')
              })
            })
            .catch(function (e) {
              return (
                console.warn(
                  'Couldn\'t serve response for "%s" from cache: %O',
                  t.request.url,
                  e
                ),
                fetch(t.request)
              )
            })
        ))
  })
