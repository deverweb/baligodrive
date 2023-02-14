<template>
  <div class="w-full overflow-x-hidden">
    <section
      class="invest-offer overflow-hidden w-full bg-[#202020] px-[80px] sm:px-[25px] md:min-h-0 lg:px-[50px] lg:h-auto flex min-h-[800px] h-screen rounded-t-[70px] sm:rounded-t-[44px]"
    >
      <div
        class="flex flex-col w-full lg:pb-[196px] sm:pb-[48px] md:pb-[324px] h-full relative pt-[286px] sm:pt-[64px] xl:pt-[166px]"
      >
        <h1
          class="font-Euroblack lil:text-[24px] lil:leading-[24px] sm:text-[34px] sm:mb-[20px] sm:leading-[37px] leading-[0.97] lg:max-w-[80%] md:max-w-[initial] max-w-[65%] sm:tracking-[-1.2px] tracking-[-2.3px] uppercase text-[70px] md:text-[60px] lg:mb-[49px] mb-[31px]"
        >
          ИнвестиЦИи<br />в бизнес аренды скутеров на балИ
        </h1>
        <p
          class="mb-[80px] max-w-[570px] sm:w-full sm:max-w-full sm:text-[16px] sm:leading-[20px] sm:mb-[40px] lg:mb-[61px] pl-[5px] lg:pl-0 leading-[1.25] font-Helvmed text-[20px]"
        >
          От 24% годовых в долларах. Ежемесячные выплаты. Работает, как депозит в банке.
        </p>
        <div
          class="invest-offer-image md:max-w-[600px] sm:mb-[32px] sm:w-full xsm:max-w-full sm:max-w-[80%] sm:static bottom-[calc(0%-81px)] md:w-[94%] md:right-[calc(0%-206px)] md:bottom-[calc(0%-52px)] xl:bottom-[calc(0%-15px)] xl:w-[52%] absolute lg:right-[-65px] right-[-198px] w-[55%]"
        >
          <img class="w-full" src="/img/invest/offer-bike.png" alt="" />
        </div>
        <div
          class="flex items-center sm:items-center lg:flex-col lg:items-start sm:gap-[28px] lg:gap-[47px] lg:pl-0 pl-[4px]"
        >
          <TheButton
            class="w-[330px] sm:max-w-[340px] sm:w-full sm:h-[70px] lg:w-[300px] lg:h-[82px] lg:mr-0 mr-[50px] gap-[10px] h-[79px] btn-primary__dark"
          >
            <SvgMoneyIcon fill="#fff"></SvgMoneyIcon>
            <span>Инвестировать</span>
          </TheButton>
          <button @click="handleCalcScroll" class="flex items-center sm:ml-0 lg:ml-[27px]">
            <SvgCalc class="mr-[15px]"></SvgCalc>
            <span class="border-b-[1px] pb-[0px] leading-[1.2] border-light border-solid text-[#fff] text-[18px]"
              >Калькулятор доходности</span
            >
          </button>
        </div>
      </div>
    </section>
    <section
      class="invest-blocks sm:mb-[-130px] md:mb-[-110px] sm:pt-[75px] mb-[-80px] relative bg-[#181818] md:pt-[80px] pt-[134px] pb-[130px]"
    >
      <h2
        class="font-Euroblack sm:max-w-[80%] sm:mx-auto uppercase text-[58px] sm:text-[32px] sm:leading-[31px] md:mb-[55px] md:text-[46px] tracking-[-0.6px] md:tracking-[-1.3px] text-light text-center mb-[69px] sm:mb-[45px]"
      >
        Почему байки?
      </h2>
      <SectionSimpleSixBlocks class="mb-[80px]" :blocks="indexSixBlocks"></SectionSimpleSixBlocks>
    </section>
    <section
      class="tabled mb-[-70px] sm:rounded-b-none md:rounded-b-[70px] relative sm:pb-[131px] md:pb-[70px] pb-[240px] sm:pt-[75px] md:pt-[95px] pt-[121px] bg-light text-dark rounded-t-[70px] md:rounded-t-[44px]"
    >
      <div class="container">
        <h2
          class="font-Euroblack text-[58px] lil:text-[22px] sm:leading-[30px] sm:text-[27px] md:text-[46px] uppercase md:tracking-[-1.3px] leading-[0.96] tracking-[-0.6px] xl:text-center text-left md:mb-[-56px] mb-[-49px]"
        >
          ВЫГОДНЕЕ ЧЕМ НЕДВИЖИМОСТЬ
        </h2>
        <div class="tabled-main relative">
          <div
            class="catalog-drag xl:flex hidden justify-end xl:max-h-[35px] xl:absolute xl:left-[30px] xl:top-[133px] sm:top-[70px] sm:left-[10px]"
          >
            <SvgDragAnim class="h-[43px] w-[105px] sm:h-[30px] sm:w-[70px]"></SvgDragAnim>
          </div>
          <div
            class="tabled-col-desc md:pb-[55px] pb-[150px] sm:pt-[130px] pt-[200px] xl:overflow-x-scroll xl:overflow-y-hidden"
          >
            <div class="tabled-row-head">
              <div class=""></div>
              <div class="relative">Инвестиции в &nbsp;<br />аренду байков</div>
              <div class="">Инвестиции в недвижимость</div>
            </div>
            <div class="tabled-row tabled-row__first">
              <div>Порог входа<br />(минимальная сумма)</div>
              <div><span>от</span> 20 000$</div>
              <div><span>от</span> 200 000$</div>
            </div>
            <div class="tabled-row pt-[35px] pb-[37px]">
              <div>% годовых</div>
              <div><span>от</span> 24%</div>
              <div><span>от</span> 15%</div>
            </div>
            <div class="tabled-row">
              <div>Срок возврата инвестиций<br />(тело депозита)</div>
              <div>100% после 3 лет</div>
              <div>после продажи недвижимости</div>
            </div>
            <div class="tabled-row">
              <div>Период выплаты % (дохода)</div>
              <div>каждый месяц</div>
              <div>Раз в квартал</div>
            </div>
            <div class="tabled-row">
              <div>Первый доход (первая выплата %)</div>
              <div>на 3 месяц</div>
              <div>на 15 месяц</div>
            </div>
            <div class="tabled-row">
              <div>Недостатки</div>
              <div>Отсутствуют</div>
              <div>
                <ul>
                  <li>1. Долгий срок ожидания первой прибыли</li>
                  <li>2. Большой порог входа</li>
                  <li>3. Заморозка денежных средств на длительный период</li>
                </ul>
              </div>
            </div>
            <div class="tabled-row">
              <div>Риски</div>
              <div>Риски для инвестора отсутствуют, т.к. компания все риски берёт на себя.</div>
              <div>
                <ul>
                  <li>1. Риск срыва сроков</li>
                  <li>2. Юридические риски (оформленные земли и объекта недвижимости)</li>
                </ul>
              </div>
            </div>
            <div class="tabled-row">
              <div>Вывод</div>
              <div>
                Подходит для тех, кто не располагает большой суммой и хочет ежемесячный доход и быстрый возврат
                инвестиций
              </div>
              <div>Подходит для тех, кто располагает большими средствами и инвестирует на долгосрок</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="calc pb-[130px] sm:rounded-t-[44px] sm:bg-[#181818] md:pb-[100px] md:rounded-t-none md:bg-transparent md:relative sm:pt-[60px] md:pt-[174px] pt-[123px] relative rounded-t-[70px] bg-[#181818]"
    >
      <div class="container">
        <div
          class="uppercase font-Euroblack text-[58px] md:text-[48px] leading-[0.96] tracking-[-0.6px] text-center mb-[26px] lil:text-[20px] sm:text-[24px]"
        >
          Калькулятор инвестирования
        </div>
        <div class="section-desc text-center mb-[72px] md:mb-[21px] max-w-[375px] mx-auto">
          Рассчитайте доходность своих инвестиций в бизнес аренды байков на Бали.
        </div>
        <div class="calc-main flex md:flex-col justify-between">
          <div class="calc-left sm:pt-[24px] pt-[32px] md:w-full sm:px-0 md:px-[38px] w-[45.5%]">
            <div class="calc-input md:mb-[72px] sm:mb-[54px] mb-[87px]">
              <div
                class="calc-input-label sm:text-[14px] lil:text-[12px] flex items-baseline justify-between font-Euroblack uppercase text-[20px] sm:mb-[18px] mb-[37px]"
              >
                <span class="tracking-[-0.6px]">Сумма ИНВЕСТИРОВАНИЯ</span>
                <span>$</span>
              </div>
              <client-only>
                <div class="calc-input-field">
                  <CustomTextField
                    class="ci__invest-form text-[14px] sm:h-[60px] h-[73px]"
                    type="number"
                    placeholder="Введите сумму инвестиций"
                    name="investsum"
                    extraph="мин.значение 3000$"
                    :minValue="3000"
                    v-model="investSum"
                    @fieldValue="handleChange"
                  >
                    <SvgMoneyIcon fill="#30B21B" class="sm:w-[16px] sm:h-[12px]"></SvgMoneyIcon>
                  </CustomTextField>
                </div>
              </client-only>
            </div>
            <div class="calc-slider sm:mb-[90px] md:mb-[105px]">
              <div
                class="calc-slider-label lil:text-[12px] sm:mb-[22px] sm:text-[14px] tracking-[-0.6px] flex items-baseline justify-between font-Euroblack uppercase text-[20px] mb-[30px]"
              >
                <span>СРОК ИНВЕСТИРОВАНИЯ</span>
                <span>МЕС.</span>
              </div>
              <div class="calc-slider-tumb">
                <div
                  class="calc-slider-nums sm:text-[14px] flex justify-between align-baseline text-light opacity-20 text-[16px] tracking-[-0.6px] font-Euroblack uppercase mb-[14px]"
                >
                  <span>24</span>
                  <span>36</span>
                </div>
                <ClientOnly>
                  <vue3-slider :tooltip="true" :min="24" :max="36" v-model="monthCount"></vue3-slider>
                </ClientOnly>
              </div>
            </div>
          </div>
          <div
            class="calc-right lg:w-[50%] w-[45.8%] sm:w-full lil:grid-cols-1 sm:p-0 sm:bg-transparent md:w-[calc(100%-76px)] md:mx-auto md:px-[38px] grid grid-cols-2 gap-x-[15px] sm:gap-y-[21px] gap-y-[29px] justify-between rounded-[20px] bg-[#1e1e1e] pb-[30px] pt-[35px] px-[30px]"
          >
            <div class="calc-right-item">
              <div class="calc-right-item-label">Сумма инвестиций</div>
              <div class="calc-right-item-num">{{ investSum }}$</div>
            </div>
            <div class="calc-right-item">
              <div class="calc-right-item-label">Срок инвестиций</div>
              <div class="calc-right-item-num">{{ monthCount }} мес.</div>
            </div>
            <div class="calc-right-item">
              <div class="calc-right-item-label">Годовой процент</div>
              <div class="calc-right-item-num">{{ Number(YEAR_PERCENT.toFixed(1)) }}%</div>
            </div>
            <div class="calc-right-item">
              <div class="calc-right-item-label">Сумма возврата итого</div>
              <div class="calc-right-item-num">{{ Math.round(return_sum.toFixed(2)) }}$</div>
            </div>
            <div class="calc-right-item">
              <div class="calc-right-item-label special">Ежемесячная выплата %</div>
              <div class="calc-right-item-num special">{{ Math.round(month_pay) }}$</div>
            </div>
            <div class="calc-right-item">
              <div class="calc-right-item-label special">Сумма ПО всем %</div>
              <div class="calc-right-item-num special">{{ Math.round(percent_sum) }}$</div>
            </div>
            <div class="calc-right-item">
              <div class="calc-right-item-label">ROI среднегодовой</div>
              <div class="calc-right-item-num">{{ Math.round(ROI_middle) }}</div>
            </div>
            <div class="calc-right-item">
              <div class="calc-right-item-label">ROI ВСЕГО</div>
              <div class="calc-right-item-num">{{ Math.round(ROI_all) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="invest-blocks sm:bg-transparent sm:pb-[100px] md:pb-[100px] md:mb-[-80px] relative sm:pt-[66px] md:pt-[89px] pt-[120px] pb-[50px] md:rounded-t-[44px] md:bg-dark-300 md:rounded-b-none rounded-b-[70px] sm:rounded-b-[44px]"
    >
      <h2
        class="font-Euroblack uppercase text-[58px] lil:text-[18px] leading-[0.96] tracking-[-0.6px] md:text-[44px] sm:text-[24px] text-light text-center mb-[26px] md:mb-[26px] sm:mb-[31px]"
      >
        Процесс<br />инвестирования
      </h2>
      <p class="section-desc text-center lil:max-w-[90%] max-w-[405px] mx-auto text-light mb-[52px]">
        Стать инвестором компании Bali.Go можно всего за несколько простых шагов
      </p>
      <SectionSimpleSixBlocks class="mb-[80px] bg-transparent" :blocks="processBlocks"></SectionSimpleSixBlocks>
    </section>
    <section
      class="bg-light md:relative sm:pt-[76px] sm:pb-[78px] md:pb-[102px] invest-form-section text-dark rounded-t-[70px] md:pt-[91px] pt-[122px] md:rounded-t-[44px] pb-[130px]"
    >
      <div class="container">
        <div
          class="invest-form-title sm:mb-[18px] lil:text-[22px] sm:tracking-[-0.9px] sm:text-[27px] md:w-full md:text-[44px] w-[90%] mx-auto mb-[28px] tracking-[-1.6px] font-Euroblack uppercase leading-[0.96] text-center text-[52px]"
        >
          ИНВЕСТИРУЙТЕ В Бизнес аренды скутеров НА БАЛИ
        </div>
        <div
          class="invest-form-subtitle md:max-w-[470px] md:mx-auto sm:mb-[28px] section-desc md:mb-[49px] text-center mb-[60px]"
        >
          Заполните форму и наш менеджер свяжется с вами в ближайшее время для обсуждения деталей.
        </div>
        <form @submit.prevent="handleSubmit" class="flex-wrap invest-form-tag flex">
          <CustomTextField
            type="string"
            class="ci__last-form w-[360px] max-w-full md:h-[63px]"
            name="name"
            placeholder="Имя"
          >
            <SvgPersonIcon class="sm:w-[12] sm:h-[14px]" fill="#000" opacity="1"></SvgPersonIcon>
          </CustomTextField>
          <CustomTextField
            type="number"
            class="ci__last-form w-[360px] max-w-full md:h-[63px]"
            name="phone"
            placeholder="Телефон"
          >
            <SvgPhoneIcon class="sm:w-[13] sm:h-[13px]"></SvgPhoneIcon>
          </CustomTextField>
          <CustomSelectField
            class="w-[360px] h-[67px] md:h-[63px] max-w-full cs__invest-form"
            name="messenger"
            styleType="invest"
            :defaultLabel="'Какой мессенджер используете?'"
            :options="messengerOptions"
          >
            <SvgTelegramIcon class="sm:w-[16] sm:h-[12px]" fill="#000" opacity="1"></SvgTelegramIcon
          ></CustomSelectField>
          <CustomSelectField
            name="invest_size"
            class="cs__invest-form h-[67px] max-w-full md:h-[63px] w-[360px]"
            styleType="invest"
            :default-label="'Сумма инвестиций'"
            :options="['до 20000$', '20000$ - 50000$', '50000$ - 100000$', '100000$ - 200000$', 'от 200000$']"
          >
            <SvgMoneyIcon class="sm:w-[16] sm:h-[12px]" fill="#181818"></SvgMoneyIcon>
          </CustomSelectField>
          <TheButton class="btn-primary__light w-[360px] h-[70px] bg-green text-light">
            <span>Оставить заявку</span>
          </TheButton>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import Slider from "@vueform/slider";
const monthCount = ref(24);
const investSum = ref(0);
const MIN_VALUE = 3000;
// <!-- <Slider v-model="monthCount"></Slider> -->
const messengerOptions = ref(["Viber", "Telegram", "Whatsapp"]);
const handleSubmit = () => {
  console.log("submit");
};

const handleCalcScroll = () => {
  document.querySelector(".calc .container").scrollIntoView({ behavior: "smooth" });
};

const handleChange = (value) => {
  if (!value) {
    investSum.value = Number(0);
  } else {
    investSum.value = Number(value);
  }
};
const PERCENT = computed(() => {
  return (24 + (monthCount.value - 24) * 0.5) / 100 / 12;
});
const YEAR_PERCENT = computed(() => {
  return PERCENT.value * 1200;
});
const month_pay = computed(() => {
  if (investSum.value < MIN_VALUE || typeof investSum.value != "number") {
    return 0;
  }
  return investSum.value * PERCENT.value;
});
const percent_sum = computed(() => {
  if (investSum.value < MIN_VALUE || typeof investSum.value != "number") {
    return 0;
  }
  return Number(investSum.value * monthCount.value * PERCENT.value);
});
const return_sum = computed(() => {
  if (investSum.value < MIN_VALUE || typeof investSum.value != "number") {
    return 0;
  }
  return Number(percent_sum.value + investSum.value);
});

const ROI_all = computed(() => {
  if (investSum.value < MIN_VALUE || typeof investSum.value != "number") {
    return 0;
  }
  if (investSum.value == 0 || !investSum.value) {
    return 0;
  } else {
    return ((return_sum.value - investSum.value) / investSum.value) * 100;
  }
});
const ROI_middle = computed(() => {
  if (investSum.value < MIN_VALUE) {
    return 0;
  }
  return ROI_all.value / (monthCount.value / 12);
});
// const PERCENT = computed(() => {
//   return ((24 + (monthCount.value - 24) * 0.5) / 100 / 12).toFixed(4);
// });
// const YEAR_PERCENT = computed(() => {
//   return Math.round(PERCENT.value * 1200);
// });
// const month_pay = computed(() => {
//   if (investSum.value < MIN_VALUE || typeof investSum.value != "number") {
//     return 0;
//   }
//   return Math.round(investSum.value * PERCENT.value);
// });
// const percent_sum = computed(() => {
//   if (investSum.value < MIN_VALUE || typeof investSum.value != "number") {
//     return 0;
//   }
//   return Math.round(Number(investSum.value * monthCount.value * PERCENT.value));
// });
// const return_sum = computed(() => {
//   if (investSum.value < MIN_VALUE || typeof investSum.value != "number") {
//     return 0;
//   }
//   return Math.round(Number(percent_sum.value + investSum.value));
// });

// const ROI_all = computed(() => {
//   if (investSum.value < MIN_VALUE || typeof investSum.value != "number") {
//     return 0;
//   }
//   if (investSum.value == 0 || !investSum.value) {
//     return 0;
//   } else {
//     return Math.round(((return_sum.value - investSum.value) / investSum.value) * 100);
//   }
// });
// const ROI_middle = computed(() => {
//   if (investSum.value < MIN_VALUE) {
//     return 0;
//   }
//   return Math.round(ROI_all.value / (monthCount.value / 12));
// });
const processBlocks = [
  {
    title: "Подача заявки",
    text: "Вы оставляете заявку на сайте и указываете сумму инвестиций",
  },
  {
    title: "Связь с менеджером",
    text: "C вами связывается наш менеджер для обсуждения деталей",
  },
  {
    title: "Оформление контракта",
    text: "Менеджер оформляет инвестиционный контракт",
  },
  {
    title: "Перевод оплаты в USDT",
    text: "Оплата контракта стейблкоином USDT",
  },
  {
    title: "Выплаты по контракту в USDT",
    text: "Получаете своевременные выплаты по % в USDT",
  },
];
const indexSixBlocks = [
  {
    title: "Диверсификация рисков",
    text: "Ваши деньги работают на Азиатском рынке",
  },
  {
    title: "Высокий доход",
    text: "% доходности, выше чем у любого банка, ROI от 24 - 30% в год",
  },
  {
    title: "Ежемесячные выплаты",
    text: "% выплачиваются ежемесячно начиная с 3 месяца",
  },
  {
    title: "Низкий порог входа",
    text: "Стартовая инвестиция от 20&nbsp;000$",
  },
  {
    title: "Высокий уровень ликвидности",
    text: "Байки можно быстро продать или обменять",
  },
  {
    title: "16+ млн туристов ЕЖЕГОДНО",
    text: " Бали - 4 инвестиционно-привлекательное место в мире по версии Forbes",
  },
];
</script>

<style lang="sass">
.invest
	&-form-tag
		display: flex
		flex-wrap: wrap
		grid-template-columns: repeat(auto-fill, 360px)
		column-gap: 15px
		row-gap: 17px
		justify-content: center
		+r(768)
			row-gap: 16px
.calc
	&-right
		&-item
			display: flex
			flex-direction: column
			+eu
			&-label
				font-size: 12px
				opacity: 0.3
				margin-bottom: -3px
				text-transform: uppercase
				letter-spacing: -0.4px
				white-space: nowrap
				+r(768)
					font-size: 8px
					letter-spacing: 0px
				&.special
					opacity: 1
			&-num
				font-size: 34px
				letter-spacing: -2.1px
				text-overflow: ellipsis
				overflow: hidden
				+r(1200)
					font-size: 28px
				+r(990)
					font-size: 34px
				+r(768)
					font-size: 23px
					letter-spacing: -1.2px
				&.special
					color: $green
	.vue3-slider
		height: 6px
		.track-filled
			background-color: $green
		.tooltip
			display: block !important
			font-size: 16px
			+eu
			top: initial !important
			bottom: -40px !important
			background: none
			color: $light
			transform: translate(-14px) scale(1)
			opacity: 1 !important
			+r(768)
				font-size: 12px
				bottom: -38px !important
	.handle

		height: 18px
		width: 8px
		background-color: $light
		border-radius: 10px
		transform: scale(1) translateY(-5px)
		box-shadow: -10px 0px 20px #000000
		&.hover
			transform: scale(1) translateY(-5px)
.tabled-col-desc
	position: relative
	&::before
		content: ""
		top: 121px
		width: 455px
		background-color: white
		height: 85%
		box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.1)
		border-radius: 20px
		left: 456px
		position: absolute
		+r(990)
			left: 419px
			height: 90%
		+r(768)
			width: 300px
			left: 193px
			top: 100px
			height: 85%

.tabled-row
	border-top: 2px solid rgba(#181818, 0.05)
	display: grid
	grid-template-columns: 457px 455px 455px
	align-items: center
	padding: 40px 0
	+r(990)
		grid-template-columns: 423px 455px 455px
	+r(768)
		grid-template-columns: 182px 300px 300px
		padding: 20px 0px
	&-head
		display: grid
		grid-template-columns: 460px 455px 440px
		margin-bottom: 24px
		+r(990)
			grid-template-columns: 425px 455px 455px
		+r(768)
			grid-template-columns: 182px 300px 300px
		div
			text-align: center
			line-height: 1.15
			+eu
			text-transform: uppercase
			font-size: 22px
			letter-spacing: -0.6px
			+r(768)
				font-size: 14px

	div
		text-align: center
		+helvm
		font-size: 20px
		+r(768)
			font-size: 13px
		span
			font-size: 14px
			position: relative
			top: 2px
			+r(768)
				font-size: 8px
		ul
			display: flex
			flex-direction: column
			row-gap: 20px
		&:nth-child(1)
			height: 100%
			display: flex
			align-items: center
		&:nth-child(2)
			position: relative
			padding: 0 64px
			line-height: 0.96
			height: 100%
			display: flex
			align-items: center
			gap: 5px
			justify-content: center
			&::before
				position: absolute
				content: ""
				top: -41px
				background: linear-gradient(90deg, rgba(255, 255, 255, 0) -13.9%, rgba(153, 153, 153, 0.16) 47.12%, rgba(255, 255, 255, 0) 113.9%)
				height: 2px
				width: 100%
				left: 50%
				right: 50%
				transform: translateX(-50%)
				+r(768)
					top: -20px
		&:nth-child(3)
			padding: 0 64px
			display: flex
			align-items: center
			justify-content: center
			gap: 5px
			line-height: 0.96
		&:first-child
			text-align: left
			+helvm
			padding-left: 30px
			+r(768)
				padding-left: 7px
</style>
