import { _ as _export_sfc, u as useHead, a as useI18n, v as vue_cjs_prod, C as CustomSelect, b as CalendarIcon, c as __nuxt_component_0$3, d as __nuxt_component_2$1, e as __nuxt_component_3, f as __nuxt_component_4, g as __nuxt_component_5, h as __nuxt_component_6, i as _sfc_main$5, j as __nuxt_component_8, k as __nuxt_component_9 } from './server.mjs';
import { Form } from 'vee-validate';
import { EffectCoverflow, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Baligodrive"
    });
    const modules = [EffectCoverflow, Navigation];
    useI18n();
    const howActions = [
      {
        title: "\u0412\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u0431\u0430\u0439\u043A"
      },
      {
        title: "\u0412\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u0434\u0430\u0442\u0443"
      },
      {
        title: "\u0411\u0440\u043E\u043D\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\xA0\u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0435"
      },
      {
        title: "\u041F\u0440\u0438\u0435\u0437\u0436\u0430\u0435\u0442\u0435",
        text: "\u0418 \u043C\u044B \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0432\u0430\u043C \u0431\u0430\u0439\u043A \u043F\u0440\u044F\u043C\u043E \u043A \u0432\u0438\u043B\u043B\u0435"
      },
      {
        title: "\u041A\u0430\u0442\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430\xA0\u0431\u0430\u0439\u043A\u0435",
        text: "\u0418 \u043C\u044B \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0432\u0430\u043C \u0431\u0430\u0439\u043A \u043F\u0440\u044F\u043C\u043E \u043A \u0432\u0438\u043B\u043B\u0435"
      },
      {
        title: "\u041F\u0440\u0438\u0432\u043E\u0437\u0438\u0442\u0435 \u0431\u0430\u0439\u043A \u043D\u0430\u043C ",
        text: "\u0418 \u043C\u044B \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0432\u0430\u043C \u0431\u0430\u0439\u043A \u043F\u0440\u044F\u043C\u043E \u043A \u0432\u0438\u043B\u043B\u0435"
      }
    ];
    const bikesCards = [
      {
        title: "yamaha nmax 2022",
        img: "/img/offer/bike.png",
        desc: "\u0412 2022 \u0433\u043E\u0434\u0443 Yamaha \u0432\u044B\u043F\u0443\u0441\u0442\u0438\u043B\u0430 \u044D\u0442\u043E\u0442 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B \u043D\u0430 \u0440\u044B\u043D\u043E\u043A, \u0441\u0434\u0435\u043B\u0430\u0432 \u0435\u0433\u043E \u0436\u0435\u043B\u0430\u043D\u043D\u044B\u043C \u0434\u043B\u044F \u043C\u043D\u043E\u0433\u0438\u0445.",
        fuel: "15\u043B / 100\u043A\u043C",
        priceDay: "5$"
      },
      {
        title: "yamaha nmax 2022",
        subinfo: "\u0421 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435\u043C \u0434\u043B\u044F \u0441\u0451\u0440\u0444\u0430",
        img: "/img/offer/bike.png",
        desc: "\u0412 2022 \u0433\u043E\u0434\u0443 Yamaha \u0432\u044B\u043F\u0443\u0441\u0442\u0438\u043B\u0430 \u044D\u0442\u043E\u0442 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B \u043D\u0430 \u0440\u044B\u043D\u043E\u043A, \u0441\u0434\u0435\u043B\u0430\u0432 \u0435\u0433\u043E \u0436\u0435\u043B\u0430\u043D\u043D\u044B\u043C \u0434\u043B\u044F \u043C\u043D\u043E\u0433\u0438\u0445.",
        fuel: "15\u043B / 100\u043A\u043C",
        priceDay: "5$"
      },
      {
        title: "yamaha nmax 2022",
        subinfo: "\u0421 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435\u043C \u0434\u043B\u044F \u0441\u0451\u0440\u0444\u0430 \u0438 \u0441\u0451\u0440\u0444\u0431\u043E\u0440\u0434\u043E\u043C",
        img: "/img/offer/bike.png",
        desc: "\u0412 2022 \u0433\u043E\u0434\u0443 Yamaha \u0432\u044B\u043F\u0443\u0441\u0442\u0438\u043B\u0430 \u044D\u0442\u043E\u0442 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B \u043D\u0430 \u0440\u044B\u043D\u043E\u043A, \u0441\u0434\u0435\u043B\u0430\u0432 \u0435\u0433\u043E \u0436\u0435\u043B\u0430\u043D\u043D\u044B\u043C \u0434\u043B\u044F \u043C\u043D\u043E\u0433\u0438\u0445.",
        fuel: "15\u043B / 100\u043A\u043C",
        priceDay: "5$"
      }
    ];
    const bikeSelectOptions = {
      elements: [
        {
          model: "\u041C\u043E\u0434\u0435\u043B\u044C \u0431\u0430\u0439\u043A\u0430 1"
        },
        {
          model: "\u041C\u043E\u0434\u0435\u043B\u044C \u0431\u0430\u0439\u043A\u0430 2"
        },
        {
          model: "\u041C\u043E\u0434\u0435\u043B\u044C \u0431\u0430\u0439\u043A\u0430 3"
        }
      ],
      defaultValue: "\u041C\u043E\u0434\u0435\u043B\u044C \u0431\u0430\u0439\u043A\u0430"
    };
    const surfSelectOptions = {
      elements: [
        {
          model: "\u041C\u043E\u0434\u0435\u043B\u044C \u0441\u0451\u0440\u0444\u0430 1"
        },
        {
          model: "\u041C\u043E\u0434\u0435\u043B\u044C \u0441\u0451\u0440\u0444\u0430 2"
        },
        {
          model: "\u041C\u043E\u0434\u0435\u043B\u044C \u0441\u0451\u0440\u0444\u0430 3"
        }
      ],
      defaultValue: "\u0421\u0451\u0440\u0444\u0431\u043E\u0440\u0434*"
    };
    const services = [
      {
        svg: ["/svg/services/helmet.svg", "/svg/services/clothes.svg"],
        text: "1-2 \u043D\u043E\u0432\u044B\u0445 \u0448\u043B\u0435\u043C\u0430 \u0438 \u0434\u043E\u0436\u0434\u0435\u0432\u0438\u043A \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u044B \u0432 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0430\u0440\u0435\u043D\u0434\u044B"
      },
      {
        svg: ["/svg/services/phone.svg"],
        text: "\u0411\u0430\u0439\u043A\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u044B \u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u0435\u043C \u0434\u043B\u044F \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438\u043B\u0438 \u043A\u0430\u043C\u0435\u0440\u044B"
      },
      {
        svg: ["/svg/services/insurance.svg"],
        text: "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430 \u043E\u0442 \u0443\u0433\u043E\u043D\u0430 \u0438 \u043F\u043E\u043B\u043E\u043C\u043E\u043A \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430 \u0432 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"
      },
      {
        svg: ["/svg/services/repair.svg"],
        text: "\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0438 \u0431\u0435\u0441\u043B\u043F\u0430\u0442\u043D\u044B\u0435 \u043E\u043D\u043B\u0430\u0439\u043D-\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438"
      },
      {
        svg: ["/svg/services/bike.svg"],
        text: "\u0412\u0441\u0435 \u0431\u0430\u0439\u043A\u0438 \u043D\u043E\u0432\u044B\u0435 - 2022 \u0433\u043E\u0434\u0430 \u0432\u044B\u043F\u0443\u0441\u043A\u0430"
      },
      {
        svg: ["/svg/services/surf.svg"],
        text: "3 \u043C\u043E\u0434\u0435\u043B\u0438: \u043F\u0440\u043E\u0441\u0442\u043E \u0431\u0430\u0439\u043A, \u0431\u0430\u0439\u043A \u0441 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F\u043C\u0438 \u0434\u043B\u044F \u0441\u0451\u0440\u0444\u0430 \u0438 \u0441\u0451\u0440\u0444\u043E\u043C."
      },
      {
        svg: ["/svg/services/support.svg"],
        text: "\u041A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u043F\u043E\u043C\u043E\u0449\u044C \u0432 \u0434\u043E\u0440\u043E\u0433\u0435"
      },
      {
        svg: ["/svg/services/carrepair.svg"],
        text: "\u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0432\u044B\u0435\u0437\u0434 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0434\u043B\u044F \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u0438\u043B\u0438 \u0437\u0430\u043C\u0435\u043D\u044B \u0431\u0430\u0439\u043A\u0430"
      }
    ];
    const faqQuestions = [
      {
        title: "\u041A\u0430\u043A \u0434\u043E\u043B\u0433\u043E \u0432\u044B \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u0431\u0430\u0439\u043A?",
        text: "\u0414\u0430\u0432\u043D\u043E \u0432\u044B\u044F\u0441\u043D\u0435\u043D\u043E, \u0447\u0442\u043E \u043F\u0440\u0438 \u043E\u0446\u0435\u043D\u043A\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438\xA0\u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430\xA0\u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432 \u0438\xA0\u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432 \u0432\xA0\u0430\u0431\u0437\u0430\u0446\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043D\u0435\xA0\u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438."
      },
      {
        title: "\u041A\u0430\u043A \u0434\u043E\u043B\u0433\u043E \u0432\u044B \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u0431\u0430\u0439\u043A?",
        text: "\u0414\u0430\u0432\u043D\u043E \u0432\u044B\u044F\u0441\u043D\u0435\u043D\u043E, \u0447\u0442\u043E \u043F\u0440\u0438 \u043E\u0446\u0435\u043D\u043A\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438\xA0\u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430\xA0\u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432 \u0438\xA0\u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432 \u0432\xA0\u0430\u0431\u0437\u0430\u0446\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043D\u0435\xA0\u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438."
      },
      {
        title: "\u041A\u0430\u043A \u0434\u043E\u043B\u0433\u043E \u0432\u044B \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u0431\u0430\u0439\u043A?",
        text: "\u0414\u0430\u0432\u043D\u043E \u0432\u044B\u044F\u0441\u043D\u0435\u043D\u043E, \u0447\u0442\u043E \u043F\u0440\u0438 \u043E\u0446\u0435\u043D\u043A\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438\xA0\u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430\xA0\u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432 \u0438\xA0\u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432 \u0432\xA0\u0430\u0431\u0437\u0430\u0446\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043D\u0435\xA0\u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438."
      },
      {
        title: "\u041A\u0430\u043A \u0434\u043E\u043B\u0433\u043E \u0432\u044B \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u0431\u0430\u0439\u043A?",
        text: "\u0414\u0430\u0432\u043D\u043E \u0432\u044B\u044F\u0441\u043D\u0435\u043D\u043E, \u0447\u0442\u043E \u043F\u0440\u0438 \u043E\u0446\u0435\u043D\u043A\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438\xA0\u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430\xA0\u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432 \u0438\xA0\u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432 \u0432\xA0\u0430\u0431\u0437\u0430\u0446\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043D\u0435\xA0\u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438."
      },
      {
        title: "\u041A\u0430\u043A \u0434\u043E\u043B\u0433\u043E \u0432\u044B \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u0431\u0430\u0439\u043A?",
        text: "\u0414\u0430\u0432\u043D\u043E \u0432\u044B\u044F\u0441\u043D\u0435\u043D\u043E, \u0447\u0442\u043E \u043F\u0440\u0438 \u043E\u0446\u0435\u043D\u043A\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438\xA0\u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430\xA0\u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432 \u0438\xA0\u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432 \u0432\xA0\u0430\u0431\u0437\u0430\u0446\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043D\u0435\xA0\u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438."
      },
      {
        title: "\u041A\u0430\u043A \u0434\u043E\u043B\u0433\u043E \u0432\u044B \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u0431\u0430\u0439\u043A?",
        text: "\u0414\u0430\u0432\u043D\u043E \u0432\u044B\u044F\u0441\u043D\u0435\u043D\u043E, \u0447\u0442\u043E \u043F\u0440\u0438 \u043E\u0446\u0435\u043D\u043A\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438\xA0\u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430\xA0\u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432 \u0438\xA0\u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432 \u0432\xA0\u0430\u0431\u0437\u0430\u0446\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043D\u0435\xA0\u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheButton = __nuxt_component_0$3;
      const _component_SvgCalendarIcon = CalendarIcon;
      const _component_SvgDragAnim = __nuxt_component_2$1;
      const _component_Bike = __nuxt_component_3;
      const _component_SvgBikeIcon = __nuxt_component_4;
      const _component_SvgSurfIcon = __nuxt_component_5;
      const _component_OrderDatePicker = __nuxt_component_6;
      const _component_OrderBike = _sfc_main$5;
      const _component_FaqQuestion = __nuxt_component_8;
      const _component_SvgMoneyIcon = __nuxt_component_9;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)} data-v-e8e1ddfe><section class="offer md:bg-center sm:h-auto sm:min-h-0 sm:pb-[65px] xl:px-[50px] px-[80px] md:px-[48px] sm:px-[24px] lg:px-[30px] pb-[80px] md:min-h-[1095px] min-h-[948px] h-screen text-white bg-dark-300 bg-no-repeat bg-cover rounded-t-[44px]" data-v-e8e1ddfe><div class="offer-content flex md:flex-col md:items-start md:pt-[218px] sm:pt-[82px] md:justify-start items-end h-full justify-between" data-v-e8e1ddfe><h1 class="offer-title md:mb-[76px] lil:text-[32px] lil:leading-[34px] sm:mb-[19px] md:text-[72px] font-Euroblack uppercase text-[74px] 2xl:text-[64px] xl:text-[48px] sm:text-[40px]" data-v-e8e1ddfe> \u0410\u0440\u0435\u043D\u0434\u0430 \u0431\u0430\u0439\u043A\u043E\u0432<br data-v-e8e1ddfe>\u0438\xA0\u0434\u043E\u0441\u043E\u043A \u0434\u043B\u044F<br data-v-e8e1ddfe>\u0441\u0435\u0440\u0444\u0438\u043D\u0433\u0430 \u043D\u0430\xA0\u0411\u0430\u043B\u0438 </h1><div class="offer-service sm:max-w-full hidden md:flex relative items-center sm:flex-col sm:items-start" data-v-e8e1ddfe>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_TheButton, { class: "offer-service-button blured gap-[9px] w-[300px] sm:w-[100%] sm:max-w-[340px] sm:h-[70px] h-[82px] mr-[29px] sm:mr-0 sm:order-2" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_SvgCalendarIcon, null, null, _parent2, _scopeId));
            _push2(`<span data-v-e8e1ddfe${_scopeId}>\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C</span>`);
          } else {
            return [
              vue_cjs_prod.createVNode(_component_SvgCalendarIcon),
              vue_cjs_prod.createVNode("span", null, "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="offer-service-text w-[300px] sm:w-[100%] sm:max-w-[340px] sm:tracking-[0.3px] text-[20px] leading-[1.3] tracking-[0.4px] sm:mb-[47px] sm:text-[16px]" data-v-e8e1ddfe> \u0421\u0435\u0440\u0432\u0438\u0441 \u0441\xA0\u0431\u043E\u043B\u044C\u0448\u0438\u043C \u0432\u044B\u0431\u043E\u0440\u043E\u043C \u0441\u0435\u0440\u0444\u0431\u043E\u0440\u0434\u043E\u0432 \u0438\xA0\u0431\u0430\u0439\u043A\u043E\u0432 \u0441\xA0\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F\u043C\u0438 \u043F\u043E\u0434\xA0\u043D\u0438\u0445. </p></div></div></section><section class="how bg-dark-300 pt-[123px] pb-[245px] md:pb-[195px] xsm:pb-[155px] md:pt-[93px] sm:pt-[75px]" data-v-e8e1ddfe><div class="container" data-v-e8e1ddfe><h2 class="section-title text-light text-center mb-[32px] md:mb-[26px] sm:mb-[24px]" data-v-e8e1ddfe> \u041A\u0430\u043A \u044D\u0442\u043E<br data-v-e8e1ddfe>\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442? </h2><p class="how-desc section-desc mb-[62px] sm:mb-[51px] max-w-[370px] text-light text-center mx-auto" data-v-e8e1ddfe> \u041C\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C \u043E\u043D\u043B\u0430\u0439\u043D \u043E\u043F\u043B\u0430\u0442\u0443 \u0432\xA0\u0440\u0443\u0431\u043B\u044F\u0445, \u0433\u0440\u0438\u0432\u043D\u0430\u0445, \u0434\u043E\u043B\u043B\u0430\u0440\u0430\u0445, \u0435\u0432\u0440\u043E \u0438\xA0\u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u0435. </p><div class="how-blocks grid grid-cols-3 gap-[24px] sm:gap-[20px] md:grid-cols-1 md:items-center md:gap-[30px]" data-v-e8e1ddfe><!--[-->`);
      serverRenderer.exports.ssrRenderList(howActions, (action, i) => {
        _push(`<div class="${serverRenderer.exports.ssrRenderClass([
          action.text ? "py-[36px] sm:pt-[29px] sm:pb-[40px]" : "pt-[33px] pb-[30px] sm:pt-[29px] sm:pb-[36px]",
          "how-block rounded-[12px] bg-light flex flex-col items-center md:max-w-[440px] md:w-[100%] md:mx-auto"
        ])}" data-v-e8e1ddfe><span class="how-block-num w-[32px] sm:mb-[10px] h-[32px] font-Helvbold rounded-full bg-green flex items-center justify-center text-[14px] text-light mb-[6px]" data-v-e8e1ddfe>${serverRenderer.exports.ssrInterpolate(`0${i + 1}`)}</span><div class="${serverRenderer.exports.ssrRenderClass([{ "mb-[6px]": action.text }, "how-block-title px-[15px] text-center text-[22px] sm:text-[18px] text-dark font-Helvbold"])}" data-v-e8e1ddfe>${serverRenderer.exports.ssrInterpolate(action.title)}</div>`);
        if (action.text) {
          _push(`<div class="how-block-text text-[16px] sm:text-[14px] leading-[20px] sm:leading-[18px] max-w-[250px] sm:max-w-[200px] text-center text-dark" data-v-e8e1ddfe>${serverRenderer.exports.ssrInterpolate(action.text)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="catalog z-[1] md:pb-[97px] pb-[9px] xsm:flex xsm:flex-col bg-dark-300 text-dark" data-v-e8e1ddfe><div class="container" data-v-e8e1ddfe><div class="catalog-wrapper mb-[49px] xsm:mb-0" data-v-e8e1ddfe><h2 class="catalog-title section-title text-center mb-[30px] md:mb-[26px]" data-v-e8e1ddfe> \u041A\u0430\u0442\u0430\u043B\u043E\u0433<br data-v-e8e1ddfe>\u0431\u0430\u0439\u043A\u043E\u0432 </h2><p class="catalog-desc section-desc text-center xsm:max-w-[233px] xsm:mb-[3px] xsm:mx-auto" data-v-e8e1ddfe> \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438 \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u0443\u0439\u0442\u0435 \u0431\u0430\u0439\u043A \u0438\u0437 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430 </p><div class="catalog-drag xsm:flex hidden justify-end xsm:max-h-[35px]" data-v-e8e1ddfe>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_SvgDragAnim, { class: "max-h-full" }, null, _parent));
      _push(`</div></div></div><div class="catalog-arrows xsm:mt-[34px] xsm:order-[1] relative flex justify-between px-[5.3%] xsm:justify-center xsm:gap-[30px] xsm:px-0 2xl:px-[50px] sm:top-0 top-[64px] select-none z-[2]" data-v-e8e1ddfe><div class="catalog-arrows-prev cursor-pointer" data-v-e8e1ddfe><svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e8e1ddfe><path d="M0.292891 7.29289C-0.097633 7.68341 -0.097633 8.31658 0.292891 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65685 0.92893L0.292891 7.29289ZM31 7L0.999998 7L0.999998 9L31 9L31 7Z" fill="black" data-v-e8e1ddfe></path></svg></div><div class="catalog-arrows-next cursor-pointer" data-v-e8e1ddfe><svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e8e1ddfe><path d="M30.7071 8.70711C31.0976 8.31659 31.0976 7.68342 30.7071 7.2929L24.3431 0.928936C23.9526 0.538412 23.3195 0.538412 22.9289 0.928936C22.5384 1.31946 22.5384 1.95263 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM-1.74846e-07 9L30 9.00001L30 7.00001L1.74846e-07 7L-1.74846e-07 9Z" fill="black" data-v-e8e1ddfe></path></svg></div></div><div class="catalog-bikes bikes lg:gap-[36px] lg:grid-cols-1" data-v-e8e1ddfe>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Swiper), {
        modules,
        navigation: {
          nextEl: ".catalog-arrows-next",
          prevEl: ".catalog-arrows-prev"
        },
        effect: "coverflow",
        loop: true,
        centeredSlides: true,
        "slides-per-view": "auto",
        "grab-cursor": true,
        "space-between": 30,
        breakpoints: {
          0: {},
          769: {
            coverflowEffect: {
              stretch: 120,
              depth: 100,
              modifier: 1.5
            }
          },
          1600: {
            coverflowEffect: {
              rotate: 0,
              stretch: 25,
              depth: 20,
              modifier: 1.2,
              slideShadows: false,
              scale: 0.9
            }
          }
        },
        "coverflow-effect": {
          rotate: 0,
          stretch: 25,
          depth: 20,
          scale: 0.9,
          modifier: 1.2,
          slideShadows: false
        }
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            serverRenderer.exports.ssrRenderList(bikesCards, (bike, i) => {
              _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(SwiperSlide), { class: "max-w-[440px] xsm:max-w-full xsm:w-[340px]" }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer.exports.ssrRenderComponent(_component_Bike, { bike }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vue_cjs_prod.createVNode(_component_Bike, { bike }, null, 8, ["bike"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(bikesCards, (bike, i) => {
                return vue_cjs_prod.createVNode(vue_cjs_prod.unref(SwiperSlide), { class: "max-w-[440px] xsm:max-w-full xsm:w-[340px]" }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode(_component_Bike, { bike }, null, 8, ["bike"])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="order relative z-[4] rounded-b-[44px] bg-dark-300 py-[151px] lg:pb-[71px] lg:pt-[94px] sm:pt-[50px] text-light" data-v-e8e1ddfe><div class="container flex lg:flex-col lg:items-center lg:text-center" data-v-e8e1ddfe><div class="order-content sm:mb-[78px] max-w-[52%] lg:mb-[46px] lg:max-w-full" data-v-e8e1ddfe><h2 class="section-title xsm:text-[26px] order-title mb-[31px] sm:mb-[14px] lg:mb-[26px] lg:max-w-[70%] lg:mx-auto md:max-w-max" data-v-e8e1ddfe> \u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u0443\u0439\u0442\u0435 \u0431\u0430\u0439\u043A \u0418 \u0421\u0401\u0420\u0424 </h2><p class="section-desc mb-[48px] sm:max-w-full lg:mb-[51px] sm:mb-[41px] max-w-[380px] lg:mx-auto" data-v-e8e1ddfe> \u041C\u044B\xA0\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u043C \u0432\u0430\u0448 \u0431\u0430\u0439\u043A \u043F\u0440\u044F\u043C\u043E \u043A\xA0\u0432\u0438\u043B\u043B\u0435 \u0438\u043B\u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0431\u0440\u0430\u0442\u044C \u0435\u0433\u043E \u0441\u0430\u043C\u0438 \u0432 \u043D\u0430\u0448\u0435\u043C \u043E\u0444\u0438\u0441\u0435 </p>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Form), { class: "max-w-[360px] lg:mx-auto" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(CustomSelect, {
              isVisible: false,
              class: "mb-[10px]",
              options: bikeSelectOptions
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_SvgBikeIcon, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_SvgBikeIcon)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(CustomSelect, {
              isVisible: false,
              class: "mb-[10px]",
              options: bikeSelectOptions
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_SvgBikeIcon, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_SvgBikeIcon)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(CustomSelect, {
              isVisible: false,
              class: "mb-[10px]",
              options: surfSelectOptions
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_SvgSurfIcon, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_SvgSurfIcon)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_OrderDatePicker, { class: "mb-[15px]" }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_TheButton, {
              type: "submit",
              class: "w-[360px] sm:w-full sm:max-w-full h-[70px] gap-[9px]"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(CalendarIcon, null, null, _parent3, _scopeId2));
                  _push3(`<span data-v-e8e1ddfe${_scopeId2}>\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C</span>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode(CalendarIcon),
                    vue_cjs_prod.createVNode("span", null, "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(CustomSelect, {
                isVisible: false,
                class: "mb-[10px]",
                options: bikeSelectOptions
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_SvgBikeIcon)
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(CustomSelect, {
                isVisible: false,
                class: "mb-[10px]",
                options: bikeSelectOptions
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_SvgBikeIcon)
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(CustomSelect, {
                isVisible: false,
                class: "mb-[10px]",
                options: surfSelectOptions
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_SvgSurfIcon)
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(_component_OrderDatePicker, { class: "mb-[15px]" }),
              vue_cjs_prod.createVNode(_component_TheButton, {
                type: "submit",
                class: "w-[360px] sm:w-full sm:max-w-full h-[70px] gap-[9px]"
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(CalendarIcon),
                  vue_cjs_prod.createVNode("span", null, "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_OrderBike, { class: "absolute lg:max-w-[80%] 2xl:z-[0] 2xl:bottom-[5%] 2xl:left-[40%] 2xl:scale-[0.85] lg:scale-100 sm:max-w-full left-[50%] lg:bottom-auto lg:relative lg:left-0" }, null, _parent));
      _push(`</div></section><section class="service rounded-b-[44px] md:pb-[46px] relative top-[-70px] pt-[190px] md:pt-[163px] pb-[100px] z-[3] bg-light text-dark" data-v-e8e1ddfe><div class="service-container mx-auto max-w-[1433px] px-[7px] md:px-[40px] xsm:px-[20px]" data-v-e8e1ddfe><h2 class="section-title text-center mb-[79px] md:mb-[67px]" data-v-e8e1ddfe> \u041A\u041E\u041C\u041F\u041B\u0415\u041A\u0421\u041D\u0410\u042F<br data-v-e8e1ddfe>\u0423\u0421\u041B\u0423\u0413\u0410 \u0410\u0420\u0415\u041D\u0414\u042B </h2><div class="service-items grid grid-cols-4 xsm:grid-cols-1 md:grid-cols-2 md:gap-x-[11px] items-stretch gap-x-[50px] md:gap-y-[17px] gap-y-[39px]" data-v-e8e1ddfe><!--[-->`);
      serverRenderer.exports.ssrRenderList(services, (service, i) => {
        _push(`<div class="service-item md:flex md:px-[20px] md:flex-col md:items-center md:text-center py-[30px] md:pt-[26px] pl-[25px] rounded-[10px]" data-v-e8e1ddfe><div class="service-item-img xsm:mb-[30px] md:mb-[38px] mb-[34px] flex gap-[22px]" data-v-e8e1ddfe><!--[-->`);
        serverRenderer.exports.ssrRenderList(service.svg, (img, i2) => {
          _push(`<img${serverRenderer.exports.ssrRenderAttr("src", img)} class="h-[44px]" alt="" data-v-e8e1ddfe>`);
        });
        _push(`<!--]--></div><p class="service-item-text md:text-[20px] xsm:text-[16px] xsm:leading-[1.2] xsm:tracking-[-0.8px] xsm:max-w-[230px] md:tracking-[-0.6px] text-[18px] md:max-w-full xl:max-w-[90%] lg:max-w-full max-w-[67%] leading-[1.3] tracking-[-0.9px] font-Helvmed text-black" data-v-e8e1ddfe>${serverRenderer.exports.ssrInterpolate(service.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="faq rounded-b-[44px] relative top-[-70px] pt-[124px] md:pt-[93px] xsm:pt-[79px] md:pb-[30px] xsm:pb-[10px] pb-[60px] z-[2] bg-dark text-light" data-v-e8e1ddfe><div class="container mb-[63px]" data-v-e8e1ddfe><h2 class="section-title text-center mb-[30px] md:mb-[26px] xsm:mb-[25px]" data-v-e8e1ddfe> \u0427\u0430\u0441\u0442\u044B\u0435<br data-v-e8e1ddfe>\u0432\u043E\u043F\u0440\u043E\u0441\u044B </h2><p class="section-desc text-center mb-[61px] xsm:mb-[50px]" data-v-e8e1ddfe> \u0412\u0441\u0435 \u0447\u0442\u043E \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0437\u043D\u0430\u0442\u044C \u043E \u043D\u0430\u0448\u0435\u043C \u0441\u0435\u0440\u0432\u0438\u0441\u0435! </p><div class="faq-questions grid grid-cols-2 gap-x-[20px] md:grid-cols-1 md:max-w-[628px] md:w-full md:mx-auto" data-v-e8e1ddfe><div class="faq-questions-col gap-y-[10px] flex flex-col md:mb-[10px]" data-v-e8e1ddfe><!--[-->`);
      serverRenderer.exports.ssrRenderList(faqQuestions.slice(
        0,
        Math.ceil(faqQuestions.length / 2)
      ), (question, i) => {
        _push(serverRenderer.exports.ssrRenderComponent(_component_FaqQuestion, { question }, null, _parent));
      });
      _push(`<!--]--></div><div class="faq-questions-col gap-y-[10px] col-start-2 md:col-start-auto flex flex-col" data-v-e8e1ddfe><!--[-->`);
      serverRenderer.exports.ssrRenderList(faqQuestions.slice(
        Math.ceil(faqQuestions.length / 2, faqQuestions.length / 2)
      ), (question, i) => {
        _push(serverRenderer.exports.ssrRenderComponent(_component_FaqQuestion, { question }, null, _parent));
      });
      _push(`<!--]--></div></div></div></section><section class="invest rounded-[44px] rounded-b-none relative md:pt-[93px] xsm:pt-[73px] md:pb-[237px] bg-light z-[4] pb-[100px] pt-[122px] text-dark-300" data-v-e8e1ddfe><div class="container" data-v-e8e1ddfe><div class="invest-content max-w-[50%] md:max-w-[80%] px-[33px] xsm:px-0 xsm:max-w-full xsm:text-center" data-v-e8e1ddfe><h2 class="section-title invest-title mb-[28px] xsm:mb-[22px]" data-v-e8e1ddfe> \u0418\u041D\u0412\u0415\u0421\u0422\u0418\u0420\u0423\u0419\u0422\u0415 \u0411\u0415\u0417 \u0420\u0418\u0421\u041A\u041E\u0412 </h2><p class="section-desc invest-desc mb-[31px] md:mb-[28px] xsm:mb-[30px]" data-v-e8e1ddfe> \u0412 \u0441\u0432\u044F\u0437\u0438 \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u0431\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u043E\u0439 \u0432 \u043C\u0438\u0440\u0435, \u043C\u044B \u0440\u0435\u0448\u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430\u043C \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E \u0440\u0438\u0441\u043A\u043E\u0432 \u2014 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u0432 \u0431\u0438\u0437\u043D\u0435\u0441 \u0430\u0440\u0435\u043D\u0434\u044B \u0441\u043A\u0443\u0442\u0435\u0440\u043E\u0432 \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0435 \u0411\u0430\u043B\u0438. </p>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_TheButton, { class: "w-[328px] h-[70px] md:w-[339px] gap-[9px] xsm:max-w-[340px] xsm:w-full text-light" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_SvgMoneyIcon, null, null, _parent2, _scopeId));
            _push2(`<span class="text-[16px] tracking-[0.3px]" data-v-e8e1ddfe${_scopeId}>\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E\u0431 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u044F\u0445</span>`);
          } else {
            return [
              vue_cjs_prod.createVNode(_component_SvgMoneyIcon),
              vue_cjs_prod.createVNode("span", { class: "text-[16px] tracking-[0.3px]" }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E\u0431 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u044F\u0445")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="invest-img absolute bottom-0 left-[49.2%] md:w-[87%] xsm:w-full xsm:left-[6.5%] xsm:bottom-[-65px] md:left-[20.5%] md:bottom-[-39px]" data-v-e8e1ddfe><img${serverRenderer.exports.ssrRenderAttr("src", "/img/invest-arrow.png")} alt="" data-v-e8e1ddfe></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e8e1ddfe"]]);

export { index as default };
//# sourceMappingURL=index.e1367dbc.mjs.map
