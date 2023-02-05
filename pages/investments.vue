<template>
  <div class="w-full">
    <section
      class="invest-offer overflow-hidden w-full bg-[#202020] px-[80px] sm:px-[25px] md:min-h-0 lg:px-[50px] lg:h-auto flex min-h-[800px] h-screen rounded-t-[70px] sm:rounded-t-[44px]"
    >
      <div
        class="flex flex-col w-full lg:pb-[196px] sm:pb-[70px] md:pb-[206px] h-full relative pt-[286px] sm:pt-[75px] lg:pt-[166px]"
      >
        <h1
          class="font-Euroblack sm:text-[30px] sm:mb-[24px] sm:leading-[33px] leading-[0.97] lg:max-w-[80%] md:max-w-[initial] max-w-[65%] sm:tracking-[-1.2px] tracking-[-2.3px] uppercase text-[70px] md:text-[60px] lg:mb-[49px] mb-[31px]"
        >
          ИнвестиРУЙТЕ в бизнес аренды скутеров на балИ
        </h1>
        <p
          class="mb-[80px] sm:w-full sm:max-w-full sm:text-[16px] sm:leading-[20px] sm:mb-[37px] lg:mb-[61px] pl-[5px] lg:pl-0 leading-[1.25] font-Helvmed text-[20px] max-w-[49%] lg:max-w-[60%] md:max-w-[65%]"
        >
          И получайте фиксированную доходность от 12% годовых в долларах и с ежемесячными выплатами процентов.
        </p>
        <div
          class="invest-offer-image sm:mb-[32px] sm:w-full xsm:max-w-full sm:max-w-[80%] sm:static bottom-[calc(0%-55px)] md:w-[57%] md:right-[calc(0%-100px)] md:bottom-[calc(0%-25px)] xl:bottom-[calc(0%-15px)] xl:w-[52%] absolute lg:right-[-65px] right-[-95px] w-[50%]"
        >
          <img class="w-full" src="/img/invest/offer-bike.png" alt="" />
        </div>
        <div class="flex items-center lg:pl-0 pl-[4px]">
          <TheButton
            class="w-[330px] sm:max-w-[340px] sm:w-full sm:h-[70px] lg:w-[300px] lg:h-[82px] lg:mr-0 mr-[40px] gap-[10px] h-[79px] btn-primary__dark"
          >
            <SvgMoneyIcon fill="#fff"></SvgMoneyIcon>
            <span>Инвестировать</span>
          </TheButton>
          <button class="flex lg:hidden items-center">
            <span
              class="grid mr-[15px] place-items-center rounded-full h-[25px] w-[25px] border-[#626262] border-solid border-[1px]"
            >
              <svg
                class="relative left-[1px]"
                width="7"
                height="9"
                viewBox="0 0 7 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 4.5L0.25 8.39711L0.25 0.602885L7 4.5Z" fill="white" />
              </svg>
            </span>
            <span class="opacity-30 text-[#fff] text-[18px]">Как это работает?</span>
          </button>
        </div>
      </div>
    </section>
    <div class="invest-blocks relative bg-[#181818] pt-[121px] pb-[130px] rounded-b-[70px] sm:rounded-b-[44px]">
      <SectionSimpleSixBlocks
        class="mb-[80px]"
        :blocks="indexSixBlocks"
        :subtitleWidth="570"
        :sectionTitle="'КТО МЫ И ПОЧЕМУ<br>НАМ ДОВЕРЯЮТ?'"
        :sectionSubtitle="'Наша команда работает уже более 7 лет в сфере транспорта. Мы — главные партнёры компаний-агрегаторов Bolt и Uber.'"
      ></SectionSimpleSixBlocks>
      <div class="invest-video">
        <div class="container flex items-center">
          <div class="invest-video-text max-w-[45%]">
            <div class="invest-video-title font-Euroblack uppercase text-[46px] mb-[20px]">Uber shuttle</div>
            <p>
              Наша команда работает уже более 7 лет в сфере транспорта. Мы — главные партнёры компаний-агрегаторов Bolt
              и Uber.
            </p>
          </div>
          <div class="invest-video-player grow bg-[#262626] grid place-items-center">
            <span
              class="grid mr-[15px] place-items-center rounded-full h-[25px] w-[25px] border-[#626262] border-solid border-[1px]"
            >
              <svg
                class="relative left-[1px]"
                width="7"
                height="9"
                viewBox="0 0 7 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 4.5L0.25 8.39711L0.25 0.602885L7 4.5Z" fill="white" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const indexSixBlocks = [
  {
    title: "7 лет на рынке",
    text: "Уже более 7 лет работаем в сфере транспорта и агрегаторов",
  },
  {
    title: "Запускали Uber и Bolt",
    text: "Участвовали в запуске Uber и Bolt в России, Украине, Польше и Казахстане",
  },
  {
    title: "Партнёры Uber и Bolt",
    text: "Являемся крупнейшими партнёрами Uber и Bolt в Украине",
  },
  {
    title: "Uber Shuttle",
    text: "В 2019 году успешно запустили проект в Киеве, сейчас он работает во Львове",
  },
  {
    title: "Партнёры DiDi",
    text: "В 2020 году заключили партнерство для запуска компании в России",
  },
  {
    title: "Диверсифицируем риски",
    text: "Вывели на рынок политически стабильной Индонезии новый сервис — GoDrive",
  },
];
</script>

<style lang="sass"></style>
