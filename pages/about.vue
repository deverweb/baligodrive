<template>
  <main class="about-page">
    <section class="bg-dark-300 sm:pb-[80px] pb-[135px] rounded-t-[70px] sm:pt-[75px] sm:rounded-t-[44px] md:pt-[95px] pt-[210px]">
      <div class="relative bg-[#181818] rounded-b-[70px] sm:rounded-b-[44px]">
        <h2 class="max-w-[800px] sm:text-[32px] md:text-[46px] sm:mb-[20px] md:mb-[25px] leading-[0.96] font-Euroblack tracking-[-1.75px] text-[58px] xsm:max-w-full sm:max-w-[90%] md:max-w-[60%] mx-auto mb-[30px] text-light text-center">
          {{ test("КТО МЫ И ПОЧЕМУ НАМ ДОВЕРЯЮТ?", "WHO WE ARE AND WHY WE ARE TRUSTED?") }}
        </h2>
        <p
          v-html="
            test(
              'Наша команда работает уже более 8 лет в сфере транспорта. Мы&nbsp;—&nbsp;главные&nbsp;партнёры&nbsp;компаний-агрегаторов <b>Bolt, Uber и Яндекс.Такси.</b>',
              'Our team has been working in the field of transport for more than 8 years. We&nbsp;are&nbsp;the&nbsp;main&nbsp;partners&nbsp;of aggregator companies <b>Bolt, Uber and Yandex.Taxi.</b>'
            )
          "
          class="text-center sm:text-[14px] lil:text-[12px] max-w-[650px] md:text-[16px] md:mb-[44px] mb-[54px] mx-auto leading-[1.25]"
        ></p>
        <SectionCustomCards class="" :blocks="test(ruIndexSixBlocks, engIndexSixBlocks)"></SectionCustomCards>
      </div>
    </section>
    <section class="about-partners pt-[81px] pb-[78px] sm:pb-[79px] md:pb-[99px] md:px-[33px] sm:px-0 sm:pt-[70px] md:pt-[90px]">
      <div class="container">
        <div class="about-row mb-[92px] md:mb-[78px]">
          <div class="about-row-title sm:mb-[24px] md:mb-[40px] mb-[53px]">
            {{ test("Наши партнеры", "Our partners") }}
          </div>
          <div class="about-row-items flex sm:grid sm:grid-cols-2 justify-between items-center">
            <div class="about-row-item" v-for="partner in partners">
              <img :src="partner" alt="" />
            </div>
          </div>
        </div>
        <div class="about-row">
          <div class="about-row-title sm:mb-[39px] md:mb-[25px] mb-[18px]">
            {{ test("Наши проекты", "Our projects") }}
          </div>
          <div class="about-row-items flex sm:grid sm:grid-cols-2 justify-between items-center">
            <div class="about-row-item" v-for="project in projects">
              <img :src="project" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about-ach pb-[185px] sm:mb-[-104px] md:mb-[-83px] mb-[-54px] sm:px-0 md:px-[70px] sm:pt-[76px] md:pt-[92px] pt-[121px] bg-dark-300 rounded-t-[70px] sm:rounded-t-[44px]">
      <div class="container">
        <h2 class="font-Euroblack uppercase sm:mb-[44px] md:mb-[57px] sm:text-[32px] tracking-[-2px] md:tracking-[-1.6px] leading-[0.96] text-[58px] md:text-[46px] text-center mb-[70px] md:mx-auto">
          {{ test("Наши достижения", "Our achievements") }}
        </h2>
        <div class="about-ach-videos justify-center md:items-center mb-[96px] sm:mb-[78px] md:mb-[60px] sm:gap-[16px] md:gap-[30px] md:flex-col flex gap-[20px]">
          <div @click="handleOpenVideo('https://www.youtube.com/embed/zamywX_JBGQ')" class="about-ach-video cursor-pointer grid place-items-center rounded-[12px] bg-cover bg-no-repeat bg-[url('/img/about/video-1.png')] grow bg-lime">
            <svg class="relative w-[50px] h-[50px] sm:w-[25px] sm:h-[25px]" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.3" cx="25" cy="25" r="23.5" stroke="white" stroke-width="3" />
              <path d="M34 25L20.5 32.7942L20.5 17.2058L34 25Z" fill="white" />
            </svg>
          </div>

          <div
            @click="handleOpenVideo('https://www.youtube.com/embed/BCYOfKGYSak')"
            class="about-ach-video md:max-w-none max-w-[50%] cursor-pointer grid place-items-center rounded-[12px] bg-cover bg-no-repeat bg-[url('/img/about/video-2.png')] grow bg-lime"
          >
            <svg class="relative w-[50px] h-[50px] sm:w-[25px] sm:h-[25px]" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.3" cx="25" cy="25" r="23.5" stroke="white" stroke-width="3" />
              <path d="M34 25L20.5 32.7942L20.5 17.2058L34 25Z" fill="white" />
            </svg>
          </div>
          <SectionCustomModal @disable="handleCloseVideo" :active="activeVideoModal">
            <iframe class="" :src="iframeSrc" title="Uberlin Shuttle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </SectionCustomModal>
        </div>
        <div class="about-ach-numbers sm:grid-cols-1 grid grid-cols-4 sm:gap-x-0 sm:gap-y-[49px] md:gap-x-[80px] md:gap-y-[88px] md:grid-cols-2 gap-[50px]">
          <div :class="`order-${item.pcOrder} mdorder-${item.tabletOrder} smorder-${item.phoneOrder}`" class="about-ach-numbers-item flex flex-col sm:max-w-none max-w-[300px]" v-for="item in numbers">
            <span class="font-Helvmed font-thin text-[20px] md:text-[16px] lg:text-[18px] text-light opacity-40 lg:mb-[2px] mb-[-3px]">{{ test("более", "more than") }}</span>
            <span class="font-Euroblack whitespace-nowrap text-[52px] lg:text-[36px] md:text-[42px] xl:text-[42px] md:mb-[21px] mb-[12px] leading-[1] tracking-[-1.7px]">{{ item.num }}</span>
            <p class="text-[18px] sm:max-w-[70%] sm:min-w-[180px] lg:text-[16px] font-thin opacity-60 md:leading-[20px] leading-[23px]">
              {{ test(item.text, item.engText) }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <SectionInvestMain class="md:pt-[93px] xsm:pt-[76px] sm:pb-[0] pt-[120px] md:pb-[310px] pb-[100px]"></SectionInvestMain>
  </main>
</template>

<script setup>
const { locale } = useI18n()

const test = (ruStr, engStr) => {
  return locale.value == "ru" ? ruStr : engStr
}
const iframeSrc = ref("https://www.youtube.com/embed/BCYOfKGYSak")
const activeVideoModal = ref(false)
const handleCloseVideo = (event, evtarget) => {
  activeVideoModal.value = false
  iframeSrc.value = ""
}
const handleOpenVideo = (arg) => {
  activeVideoModal.value = true
  iframeSrc.value = arg
}

const partners = ["/svg/about/partners/uber.svg", "/svg/about/partners/bolt.svg", "/svg/about/partners/ya.svg", "/svg/about/partners/didi.svg"]
const projects = ["/svg/about/projects/uberlin.svg", "/svg/about/projects/boltua.svg", "/svg/about/projects/ubershuttle.svg"]

const engIndexSixBlocks = [
  {
    title: "8 years on the market",
    text: "For more than 8 years we have been working in the field of transport and aggregators",
  },
  {
    title: "Launched Uber, Bolt and Yandex.Taxi",
    text: "Participated in the launch of Uber, Bolt and Yandex.Taxi in Russia, Ukraine, Kazakhstan and Poland",
  },
  {
    title: "Partners of Uber, Bolt and Yandex.Taxi",
    text: "We are the largest partners of Uber, Bolt and Yandex.Taxi",
  },
  {
    title: "Uber Shuttle",
    text: "in 2019 we successfully launched the project in Kyiv and in 2022 in Lviv",
  },
  {
    title: "DiDi Partners",
    text: "In 2020 we entered into a partnership to launch a company in Russia",
  },
  {
    title: "BaliGo.bike",
    text: "Launched a new scooter rental business in Indonesia on the island of Bali",
  },
]

const ruIndexSixBlocks = [
  {
    title: "8 лет на рынке",
    text: "Уже более 8 лет работаем в сфере транспорта и агрегаторов",
  },
  {
    title: "Запускали Uber, Bolt и Yandex.Taxi",
    text: "Участвовали в запуске Uber, Bolt и Yandex.Taxi в России, Украине, Казахстане и Польше",
  },
  {
    title: "Партнёры Uber, Bolt и Yandex.Taxi",
    text: "Являемся крупнейшими партнёрами Uber, Bolt и Yandex.Taxi",
  },
  {
    title: "Uber Shuttle",
    text: "в 2019 году успешно запустили проект в Киеве и в 2022 году во Львове",
  },
  {
    title: "Партнёры DiDi",
    text: "В 2020 году заключили партнерство для запуска компании в России",
  },
  {
    title: "BaliGo.bike",
    text: "Запустили новый бизнес по аренде скутеров в Индонезии на острове Бали",
  },
]
const numbers = [
  {
    num: "400 000",
    text: "Поездок еженедельно совершают наши водители",
    engText: "Trips are made weekly by our drivers",
    pcOrder: 0,
    tabletOrder: 0,
    phoneOrder: 0,
  },
  {
    num: "100 000",
    text: "Частных водителей сотрудничают с нами",
    engText: "Private drivers cooperate with us",
    pcOrder: 1,
    tabletOrder: 2,
    phoneOrder: 1,
  },
  {
    num: "1000",
    text: "Автопарков заключили с нами партнёрство",
    engText: "Autoparks entered into partnership with us",
    pcOrder: 2,
    tabletOrder: 3,
    phoneOrder: 3,
  },
  {
    num: "2 000",
    text: "Единиц транспорта в инвестиционном управлении",
    engText: "Vehicle units in investment management",
    pcOrder: 3,
    tabletOrder: 1,
    phoneOrder: 2,
  },
]
</script>

<style lang="sass">
iframe
	max-width: 80%
	max-height: 70%
	width: 100%
	height: 100%
	+r(990)
		width: 100%
		max-width: initial
		max-height: 60%
		height: 50%
.about
	&-ach
		&-video
			aspect-ratio: 674 / 380
			position: relative
			width: 100%
			&::before
				content: ""
				top: 0
				left: 0
				bottom: 0
				right: 0
				position: absolute
				background: linear-gradient(287.71deg, #000000 1.07%, rgba(0, 0, 0, 0.18) 21.34%, rgba(0, 0, 0, 0.45) 55.18%, rgba(0, 0, 0, 0) 99.17%, #000000 108.67%)
	&-row
		&-items
			gap: 55px
			+r(768)
				column-gap: 85px
				row-gap: 40px
			+r(380)
				column-gap: 35px
				row-gap: 15px
		&-title
			+eu
			font-size: 22px
			opacity: 0.2
			color: $light
			text-transform: uppercase
			letter-spacing: -.7px
			+r(600)
				font-size: 18px
</style>
