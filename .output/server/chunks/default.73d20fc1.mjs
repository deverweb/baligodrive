import { _ as _export_sfc, v as vue_cjs_prod, a as useI18n, A as ArrowIcon, m as useRoute, l as __nuxt_component_0$4 } from './server.mjs';
import { s as serverRenderer } from './renderer.mjs';
import 'unenv/runtime/mock/proxy';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'destr';
import 'h3';
import 'defu';
import '@popperjs/core';
import '@intlify/core-base';
import 'cookie-es';
import 'ohash';
import 'qs';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'stream';

const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$4;
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, vue_cjs_prod.mergeProps({
    to: "/",
    class: "ls-text-small md:w-auto md:text-[18px] md:tracking-[1px] logo uppercase font-Euroblack z-0"
  }, _attrs), {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-green" data-v-f6fa22dc${_scopeId}>BALI.</span>GODRIVE`);
      } else {
        return [
          vue_cjs_prod.createVNode("span", { class: "text-green" }, "BALI."),
          vue_cjs_prod.createTextVNode("GODRIVE")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo/Logo.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-f6fa22dc"]]);
const _sfc_main$6 = {
  props: ["links"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$4;
  _push(`<nav${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "navbar flex lg:scale-[0.85]" }, _attrs))} data-v-f0b32855><ul class="flex font-Helvmed items-center gap-[48px] xl:gap-[30px]" data-v-f0b32855><!--[-->`);
  serverRenderer.exports.ssrRenderList($props.links, (link, i) => {
    _push(`<li class="whitespace-nowrap" data-v-f0b32855>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
      to: link.link
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${serverRenderer.exports.ssrInterpolate(link.label)}`);
        } else {
          return [
            vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(link.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></nav>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheNav/TheNav.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-f0b32855"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: "lang-icon",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M18.6944 14.9126C19.531 13.4442 20 11.767 20 9.98547C20 8.20391 19.531 6.50002 18.6944 5.05829C18.6678 5.00491 18.6412 4.98063 18.617 4.95392C16.8931 1.99272 13.6823 0 10 0C6.3443 0 3.13345 1.99272 1.38298 4.95388C1.35637 4.98059 1.3298 5.03155 1.30562 5.05826C0.469044 6.49999 0 8.17717 0 9.98543C0 15.517 4.46567 20 9.97581 20C13.6315 20 16.8424 18.0073 18.5928 15.0461C18.6412 14.9903 18.6678 14.9636 18.6944 14.9126ZM1.01548 10.4563H4.38589C4.43907 11.767 4.70021 13.051 5.11608 14.2573H2.05995C1.46034 13.102 1.09526 11.818 1.01548 10.4563ZM2.05995 5.71115H5.11604C4.67115 6.91747 4.43665 8.17474 4.38586 9.48543H1.01548C1.09526 8.12136 1.46034 6.83738 2.05995 5.71115ZM19.0087 9.48543H15.6915C15.6383 8.17474 15.3772 6.91747 14.9613 5.71115H17.9642C18.5638 6.83738 18.9289 8.12136 19.0087 9.48543ZM14.7244 9.48543H10.4932V5.71115H13.9144C14.3859 6.89076 14.6736 8.14807 14.7244 9.48543ZM10.4956 4.74029V1.07038C11.7481 2.09224 12.7684 3.32523 13.472 4.71358H10.4956V4.74029ZM9.52854 1.12377V4.71601H6.60302C7.30899 3.35194 8.3027 2.14562 9.52854 1.12377ZM9.52854 5.71115V9.48543H5.35058C5.40376 8.17474 5.68909 6.89076 6.16055 5.71115H9.52854ZM5.35058 10.4563H9.52854V14.2573H6.16055C5.6915 13.051 5.40376 11.767 5.35058 10.4563ZM9.52854 15.2257V18.818C8.30028 17.8228 7.30899 16.5898 6.60302 15.2257H9.52854ZM10.4956 18.869V15.2257H13.472C12.7418 16.6165 11.7481 17.8471 10.4956 18.869ZM10.4956 14.2573V10.4563H14.7268C14.6736 11.7937 14.3883 13.0777 13.9168 14.2573H10.4956ZM15.6915 10.4563H19.0087C18.9314 11.8204 18.5638 13.1311 17.9377 14.2573H14.9614C15.3772 13.051 15.6383 11.767 15.6915 10.4563ZM17.3622 4.74029H14.543C13.9434 3.4296 13.0803 2.19661 12.0358 1.17475C14.2021 1.67475 16.0832 2.95873 17.3622 4.74029ZM8.06578 1.15047C6.9947 2.199 6.16055 3.40532 5.53194 4.74272H2.66199C3.941 2.93203 5.84623 1.62134 8.06578 1.15047ZM2.66199 15.2257H5.50772C6.13394 16.5631 6.97048 17.7694 8.04156 18.818C5.84623 18.3204 3.941 17.0097 2.66199 15.2257ZM12.0358 18.7913C13.0802 17.7428 13.941 16.5364 14.543 15.2258H17.338C16.0832 16.983 14.2021 18.2937 12.0358 18.7913Z" fill="white"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/WorldIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const WorldIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {
  __name: "Lang",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale, locales, setLocale } = useI18n();
    let popupActive = vue_cjs_prod.ref(false);
    const closePopup = (e) => {
      if (e.target.closest(".lang"))
        return;
      popupActive.value = false;
    };
    vue_cjs_prod.onUnmounted(() => {
      window.removeEventListener("click", closePopup);
    });
    vue_cjs_prod.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "lang relative justify-end flex" }, _attrs))} data-v-0d865c47><button class="lang-current flex items-center cursor-pointer" data-v-0d865c47>`);
      _push(serverRenderer.exports.ssrRenderComponent(WorldIcon, { class: "opacity-[0.3] mr-[7px]" }, null, _parent));
      _push(`<span class="uppercase lang-label mr-[7px]" data-v-0d865c47>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(locale))}</span>`);
      _push(serverRenderer.exports.ssrRenderComponent(ArrowIcon, {
        class: [vue_cjs_prod.unref(popupActive) ? "rotate-180" : "rotate-0", "transition-transform duration-200 w-[12px] h-[12px]"],
        stroke: "#FBFBFD"
      }, null, _parent));
      _push(`</button><div class="lang-popup z-[2] right-[-27px] xl:right-0 absolute rounded-[13px] text-[16px] pt-[20px] w-[240px] bg-dark-200 text-light" style="${serverRenderer.exports.ssrRenderStyle(vue_cjs_prod.unref(popupActive) ? null : { display: "none" })}" data-v-0d865c47><ul data-v-0d865c47><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(locales), (lc) => {
        _push(`<li class="${serverRenderer.exports.ssrRenderClass([lc.code == vue_cjs_prod.unref(locale) ? "bg-dark-400" : "bg-dark-200", "pl-[24px] pt-[11px] pb-[13px] cursor-pointer"])}" data-v-0d865c47>${serverRenderer.exports.ssrInterpolate(lc.name)}</li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Lang/Lang.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-0d865c47"]]);
const _sfc_main$3 = {
  __name: "GambBtn",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    let activeMenu = vue_cjs_prod.ref(false);
    vue_cjs_prod.watch(
      () => {
        return activeMenu.value;
      },
      () => {
        if (activeMenu.value) {
          document.body.classList.add("active-menu");
        } else {
          document.body.classList.remove("active-menu");
        }
      }
    );
    vue_cjs_prod.watch(
      () => {
        return route.fullPath;
      },
      () => {
        activeMenu.value = false;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "gamb" }, _attrs))} data-v-3727df9f><button class="${serverRenderer.exports.ssrRenderClass([{ active: vue_cjs_prod.unref(activeMenu) }, "bg-green gamb-btn rounded-full w-[58px] h-[60px] xsm:w-[50px] xsm:h-[50px]"])}" data-v-3727df9f><span data-v-3727df9f></span><span data-v-3727df9f></span></button></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GambBtn/GambBtn.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3727df9f"]]);
const _sfc_main$2 = {
  __name: "MobileMenu",
  __ssrInlineRender: true,
  props: { links: Array, active: Boolean },
  setup(__props) {
    const { t, locale, locales, setLocale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$4;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: "mobile-menu hidden md:block rounded-b-[44px] xsm:rounded-none xsm:pl-[26px] xsm:pr-[5px] xsm:pt-[58px] overflow-hidden absolute top-full bg-dark-600 w-full left-0 md:h-[355px] md:pr-[68px] md:pl-[70px] md:pt-[50px] md:pb-[60px]",
        style: __props.active ? null : { display: "none" }
      }, _attrs))}><div class="mobile-menu-inner flex flex-col justify-between h-full"><ul class="font-Euroblack mobile-menu-nav lil:text-[20px] text-[24px] uppercase text-light tracking-[-0.8px]"><!--[-->`);
      serverRenderer.exports.ssrRenderList(__props.links, (link) => {
        _push(`<li>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: link.link
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.exports.ssrInterpolate(link.label)}`);
            } else {
              return [
                vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="mobile-menu-lang hidden xsm:flex items-center">`);
      _push(serverRenderer.exports.ssrRenderComponent(WorldIcon, { class: "opacity-[0.3] mr-[14px]" }, null, _parent));
      _push(`<ul class="mobile-menu-lang-list flex items-center gap-[17px]"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(locales), (lc) => {
        _push(`<li><button class="${serverRenderer.exports.ssrRenderClass([lc.code == vue_cjs_prod.unref(locale) ? "opacity-100" : "opacity-20", "uppercase text-light"])}">${serverRenderer.exports.ssrInterpolate(lc.code)}</button></li>`);
      });
      _push(`<!--]--></ul></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileMenu/MobileMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "TheHeader",
  __ssrInlineRender: true,
  setup(__props) {
    let activeFirstMenu = vue_cjs_prod.ref(false);
    let activeFixedMenu = vue_cjs_prod.ref(false);
    let route = useRoute();
    const navLinks = [
      {
        link: "/",
        label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
      },
      {
        link: "/about",
        label: "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
      },
      {
        link: "/rules",
        label: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0430\u0440\u0435\u043D\u0434\u044B"
      },
      {
        link: "/contacts",
        label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
      },
      {
        link: "/partner",
        label: "\u0421\u0442\u0430\u0442\u044C \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u043C"
      }
    ];
    vue_cjs_prod.watch(
      () => {
        return route.fullPath;
      },
      () => {
        activeFirstMenu.value = false;
        activeFixedMenu.value = false;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = __nuxt_component_0$1;
      const _component_TheNav = __nuxt_component_1;
      const _component_Lang = __nuxt_component_2;
      const _component_GambBtn = __nuxt_component_3;
      const _component_MobileMenu = _sfc_main$2;
      _push(`<header${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "z-[10] header absolute md:relative w-full" }, _attrs))} data-v-771f02c2><div class="header-first-screen xsm:pt-[15px] xsm:pb-[14px] md:py-[20px] header-child absolute md:relative md:top-0 mt-[32px] md:mt-0 xl:px-[50px] md:px-[50px] px-[80px] inset-x-0" data-v-771f02c2>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_Logo, { class: "flex-1" }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_TheNav, {
        class: "header-nav md:hidden",
        links: navLinks
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Lang, { class: "flex-1 md:flex-initial md:mr-[38px] xsm:hidden" }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_GambBtn, {
        onClick: ($event) => vue_cjs_prod.isRef(activeFirstMenu) ? activeFirstMenu.value = !vue_cjs_prod.unref(activeFirstMenu) : activeFirstMenu = !vue_cjs_prod.unref(activeFirstMenu),
        class: "md:flex hidden"
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_MobileMenu, {
        links: navLinks,
        active: vue_cjs_prod.unref(activeFirstMenu)
      }, null, _parent));
      _push(`</div><div class="header-fixed header-child md:items-center" data-v-771f02c2>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_Logo, { class: "flex-1 xl:flex-initial md:mr-auto" }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_TheNav, {
        class: "header-nav md:hidden",
        links: navLinks
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_Lang, { class: "flex-1 xl:flex-initial md:flex-initial md:mr-[38px] xsm:hidden" }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_GambBtn, {
        onClick: ($event) => vue_cjs_prod.isRef(activeFixedMenu) ? activeFixedMenu.value = !vue_cjs_prod.unref(activeFixedMenu) : activeFixedMenu = !vue_cjs_prod.unref(activeFixedMenu),
        class: "md:flex hidden"
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_MobileMenu, {
        links: navLinks,
        active: vue_cjs_prod.unref(activeFixedMenu)
      }, null, _parent));
      _push(`</div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader/TheHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-771f02c2"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative min-h-screen" }, _attrs))}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_TheHeader, null, null, _parent));
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.73d20fc1.mjs.map
