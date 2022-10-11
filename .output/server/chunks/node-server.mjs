globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import { promises } from 'fs';
import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{"strapi":{"url":"http://localhost:1337","prefix":"/api","version":"v4","cookie":{},"auth":{},"cookieName":"strapi_jwt"}},"strapi":{"url":"http://localhost:1337","prefix":"/api","version":"v4","cookie":{},"auth":{},"cookieName":"strapi_jwt"}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    description: "",
    data: error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error2) => {
    console.error("[nitro] Error while generating error response", error2);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/manifest.json": {
    "type": "application/json",
    "etag": "\"162b-aZBlxmkyHyUYE6+TiZutWUOkoOE\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/manifest.json"
  },
  "/img/invest-arrow.png": {
    "type": "image/png",
    "etag": "\"1e831-G3n4pwDoKEiZKoRJfvecksSGNbA\"",
    "mtime": "2022-10-09T19:49:55.056Z",
    "path": "../public/img/invest-arrow.png"
  },
  "/svg/camera.svg": {
    "type": "image/svg+xml",
    "etag": "\"435-fajj1fVol+DpWNYfUuXl7ypS9YA\"",
    "mtime": "2022-09-12T02:52:51.753Z",
    "path": "../public/svg/camera.svg"
  },
  "/svg/helmet.svg": {
    "type": "image/svg+xml",
    "etag": "\"3b3-IUvA5gZPHU+lv3Yx2xOIlDOLOWM\"",
    "mtime": "2022-10-09T02:20:36.410Z",
    "path": "../public/svg/helmet.svg"
  },
  "/svg/umbrella.svg": {
    "type": "image/svg+xml",
    "etag": "\"449-fbfksxuF7SHpwCJuqy0/44xQpeA\"",
    "mtime": "2022-09-12T02:53:10.304Z",
    "path": "../public/svg/umbrella.svg"
  },
  "/svg/wrench.svg": {
    "type": "image/svg+xml",
    "etag": "\"236-5psaLInZhu5cikJ+sIaHCQRVVxY\"",
    "mtime": "2022-09-12T02:53:01.003Z",
    "path": "../public/svg/wrench.svg"
  },
  "/_nuxt/about.4171a613.mjs": {
    "type": "application/javascript",
    "etag": "\"f1-1Y8rbOHIraxFx10mnYDaKJm1atY\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/about.4171a613.mjs"
  },
  "/_nuxt/ArrowIcon.fe3927a0.mjs": {
    "type": "application/javascript",
    "etag": "\"1be-PxLiBccdwkQjsq9LUPrChRzf8EQ\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/ArrowIcon.fe3927a0.mjs"
  },
  "/_nuxt/contacts.491d28ae.mjs": {
    "type": "application/javascript",
    "etag": "\"f1-1Y8rbOHIraxFx10mnYDaKJm1atY\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/contacts.491d28ae.mjs"
  },
  "/_nuxt/default.07cb889c.mjs": {
    "type": "application/javascript",
    "etag": "\"2347-ETo5WEWFWeGeqaXaC6KibjW8dqM\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/default.07cb889c.mjs"
  },
  "/_nuxt/default.d29eb844.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1103-PxWfX60HrewTEWAn36qGt7Bsw2Q\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/default.d29eb844.css"
  },
  "/_nuxt/entry.59cd9547.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d27e-ozxGgJE7DID6AXtBOjk2sh8SyZo\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/entry.59cd9547.css"
  },
  "/_nuxt/entry.776af509.mjs": {
    "type": "application/javascript",
    "etag": "\"6746c-AQ7CH3DzpQ8GMDwUfANqHmLyQdY\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/entry.776af509.mjs"
  },
  "/_nuxt/error-404.0606b97f.mjs": {
    "type": "application/javascript",
    "etag": "\"8a0-QxoST5BdQXCsg+bCIrB1Bf/d6As\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/error-404.0606b97f.mjs"
  },
  "/_nuxt/error-404.7729cee9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e34-qomFKLEnDzFbIPwCfuxqIb18mQU\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/error-404.7729cee9.css"
  },
  "/_nuxt/error-500.08851880.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7a4-PsPGHWWrltFH34P9Q5DnkUTUhRE\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/error-500.08851880.css"
  },
  "/_nuxt/error-500.c5b61767.mjs": {
    "type": "application/javascript",
    "etag": "\"752-Pun/Y+wryouMwSdRqItJRixZVdw\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/error-500.c5b61767.mjs"
  },
  "/_nuxt/error-component.2789517f.mjs": {
    "type": "application/javascript",
    "etag": "\"44f-Y5UMqj9/5HjixCby0JK2TUxmCSc\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/error-component.2789517f.mjs"
  },
  "/_nuxt/Eurostile-Extended-Black.22deb378.woff": {
    "type": "font/woff",
    "etag": "\"167b4-fzDBmUiwu1GLQKpx2OwCSgpgUSM\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/Eurostile-Extended-Black.22deb378.woff"
  },
  "/_nuxt/Eurostile-Extended-Black.51ad889f.woff2": {
    "type": "font/woff2",
    "etag": "\"143a8-hbuombkuVp6TLwOrxWu5EPfkPOU\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/Eurostile-Extended-Black.51ad889f.woff2"
  },
  "/_nuxt/helveticaneuecyr-bold.0520dad4.woff2": {
    "type": "font/woff2",
    "etag": "\"2a60-11ph4odBZPNNwXtlmSH+TWYSlsI\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/helveticaneuecyr-bold.0520dad4.woff2"
  },
  "/_nuxt/helveticaneuecyr-bold.b51e10af.woff": {
    "type": "font/woff",
    "etag": "\"3964-BLLfXIdgoRylyW68GLmrEPFA37I\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/helveticaneuecyr-bold.b51e10af.woff"
  },
  "/_nuxt/helveticaneuecyr-medium.6d300602.woff": {
    "type": "font/woff",
    "etag": "\"39fc-a1YfWjnlPVGeR706zzkGPTi/MIY\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/helveticaneuecyr-medium.6d300602.woff"
  },
  "/_nuxt/helveticaneuecyr-medium.8bf481cd.woff2": {
    "type": "font/woff2",
    "etag": "\"2ac4-ATwROIaHFE/qrjnQImpZ1u0JrPk\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/helveticaneuecyr-medium.8bf481cd.woff2"
  },
  "/_nuxt/helveticaneuecyr-roman.63d9f12c.woff2": {
    "type": "font/woff2",
    "etag": "\"2bc0-nq1J3ZId/HuHwvnOLmVuPxoov4s\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/helveticaneuecyr-roman.63d9f12c.woff2"
  },
  "/_nuxt/helveticaneuecyr-roman.815eeadc.woff": {
    "type": "font/woff",
    "etag": "\"3aac-yXGaUhFzS7NU6eOSNyY4wF4yxUc\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/helveticaneuecyr-roman.815eeadc.woff"
  },
  "/_nuxt/index.5d327662.mjs": {
    "type": "application/javascript",
    "etag": "\"1abbe-hdPGvGm4Puu0IJmXhS1dYACKUAY\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/index.5d327662.mjs"
  },
  "/_nuxt/index.e56a2b37.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"203b-q7daU7KUJzT3d9Ugald/iwYM6ck\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/index.e56a2b37.css"
  },
  "/_nuxt/partner.b118449d.mjs": {
    "type": "application/javascript",
    "etag": "\"f1-yV1BY30dkBRP2y+0bd7BOkdbB5w\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/partner.b118449d.mjs"
  },
  "/_nuxt/rules.56e6498d.mjs": {
    "type": "application/javascript",
    "etag": "\"f1-AMcHF0yrwHNaTOlqFOZHInyF4Es\"",
    "mtime": "2022-10-11T18:51:23.172Z",
    "path": "../public/_nuxt/rules.56e6498d.mjs"
  },
  "/img/offer/bike.png": {
    "type": "image/png",
    "etag": "\"1389d-AL2vIt2FvJakCxoGpFVynPIddIk\"",
    "mtime": "2022-10-08T16:09:21.608Z",
    "path": "../public/img/offer/bike.png"
  },
  "/img/offer/offer-bg.png": {
    "type": "image/png",
    "etag": "\"247d3b-H4zSb8fg0tp8sIugAdmhLxVPYkU\"",
    "mtime": "2022-09-01T14:53:40.181Z",
    "path": "../public/img/offer/offer-bg.png"
  },
  "/img/offer/order-bike.png": {
    "type": "image/png",
    "etag": "\"4f23a-W7tNzK+QBD91WFjOqYqiIF18Bn0\"",
    "mtime": "2022-09-12T02:39:06.587Z",
    "path": "../public/img/offer/order-bike.png"
  },
  "/img/partner/offer-bike.png": {
    "type": "image/png",
    "etag": "\"6c36b-ugdREKQJT3OxxF5wU+Dr9c2691w\"",
    "mtime": "2022-10-10T01:19:57.981Z",
    "path": "../public/img/partner/offer-bike.png"
  },
  "/svg/services/bike.svg": {
    "type": "image/svg+xml",
    "etag": "\"b0a-tVol/oF73l9ipaVjrQKWCztUHlU\"",
    "mtime": "2022-10-09T02:19:45.742Z",
    "path": "../public/svg/services/bike.svg"
  },
  "/svg/services/carrepair.svg": {
    "type": "image/svg+xml",
    "etag": "\"b10-qXZkm+97Ot6xRVWznSqP+yerouo\"",
    "mtime": "2022-10-09T02:20:10.363Z",
    "path": "../public/svg/services/carrepair.svg"
  },
  "/svg/services/clothes.svg": {
    "type": "image/svg+xml",
    "etag": "\"813-IX2k23nnsCu1Aie4O87R2DxNQq8\"",
    "mtime": "2022-10-09T02:18:57.776Z",
    "path": "../public/svg/services/clothes.svg"
  },
  "/svg/services/helmet.svg": {
    "type": "image/svg+xml",
    "etag": "\"435-LUByD4e9xjwuaJfrwQ4IlvcVJYc\"",
    "mtime": "2022-10-09T02:18:31.490Z",
    "path": "../public/svg/services/helmet.svg"
  },
  "/svg/services/insurance.svg": {
    "type": "image/svg+xml",
    "etag": "\"19a3-oxww+lrdeIJM5qijMXTNvYJjxlk\"",
    "mtime": "2022-10-09T02:19:25.097Z",
    "path": "../public/svg/services/insurance.svg"
  },
  "/svg/services/phone.svg": {
    "type": "image/svg+xml",
    "etag": "\"27c-yWJ5dhaAwynA96qhml4D34c7rW0\"",
    "mtime": "2022-10-09T02:19:13.997Z",
    "path": "../public/svg/services/phone.svg"
  },
  "/svg/services/repair.svg": {
    "type": "image/svg+xml",
    "etag": "\"9d4-4ghVwMI4bpJ6EBKHuA+b25gBYKk\"",
    "mtime": "2022-10-09T02:19:34.760Z",
    "path": "../public/svg/services/repair.svg"
  },
  "/svg/services/support.svg": {
    "type": "image/svg+xml",
    "etag": "\"811-yeMEsLr0PljIjuxp5yd4w+3m3eE\"",
    "mtime": "2022-10-09T02:20:01.111Z",
    "path": "../public/svg/services/support.svg"
  },
  "/svg/services/surf.svg": {
    "type": "image/svg+xml",
    "etag": "\"b6e-EGme9APQf/Tlv/f0JVRn2sMBE+Q\"",
    "mtime": "2022-10-09T02:19:52.516Z",
    "path": "../public/svg/services/surf.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _lazy_XoO7uE = () => import('./renderer.mjs').then(function (n) { return n.a; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_XoO7uE, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_XoO7uE, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const hostname = process.env.NITRO_HOST || process.env.HOST || "0.0.0.0";
server.listen(port, hostname, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  console.log(`Listening on ${protocol}://${hostname}:${port}${useRuntimeConfig().app.baseURL}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
