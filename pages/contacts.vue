<template>
  <main class="flex-grow">
    <section
      class="bg-dark-700 xsm:flex-col xsm:px-[25px] xl:px-[50px] md:items-start flex items-center relative xsm:h-auto xsm:min-h-0 h-screen min-h-[830px] rounded-t-[70px] sm:rounded-t-[44px] px-[80px]"
    >
      <div
        class="contacts-inner xsm:mb-[58px] xsm:pt-[58px] xsm:text-center sm:w-full sm:w-max-[568px] xsm:flex xsm:items-center xsm:flex-col md:pt-[80px] md:mt-0 w-[567px] xl:ml-0 2xl:ml-[5%] mt-[3.6%] ml-[10.2%]"
      >
        <h1
          class="contact-title xsm:mb-[16px] xsm:text-[28px] xsm:tracking-[-0.8px] md:text-[46px] tracking-[-1.9px] font-Euroblack text-[58px] uppercase mb-[13px]"
        >
          Контакты
        </h1>
        <p
          class="contacts-desc xsm:mb-[29px] xsm:leading-[20px] xsm:text-[16px] leading-[23px] md:mb-[51px] mb-[40px]"
        >
          Наш офис расположен в самом сердце Убуда. Вы можете добраться к нам на
          общественном транспорте или на такси.
        </p>
        <div
          class="contacts-phone-subtitle mb-[6px] xsm:mb-[14px] xsm:self-start xsm:flex xsm:tracking-[0.2px] text-[14px] font-Helvreg opacity-50"
        >
          Связь в мессенджерах:
        </div>
        <div
          class="contacts-phone xsm:mb-[43px] xsm:w-full xsm:items-center mb-[69px] xsm:gap-x-[10px] flex items-end gap-x-[14px]"
        >
          <a href="https://wa.me/+6281337413060"
            ><TheButton
              class="btn-primary__dark xsm:rounded-[8px] pr-[22px] xsm:pr-[11px] xsm:w-[165px] xsm:h-[46px] xsm:text-[12px] w-[250px] gap-[10px] h-[70px]"
            >
              <SvgWhatsappIcon
                class="xsm:h-[14px] xsm:w-[14px]"
              ></SvgWhatsappIcon>
              <span>WhatsApp</span>
            </TheButton></a
          >
          <TheButton
            class="btn-primary__blue xsm:rounded-[8px] pr-[22px] xsm:pr-[11px] xsm:w-[165px] xsm:h-[46px] xsm:text-[12px] w-[250px] gap-[10px] h-[70px]"
          >
            <SvgTelegramIcon
              class="h-[18px] w-[22px] xsm:w-[14px] xsm:h-[12px]"
              opacity="1"
              fill="#FBFBFD"
            ></SvgTelegramIcon>
            <span>Telegram</span>
          </TheButton>
        </div>
        <div
          class="contacts-items xsm:w-full font-Euroblack tracking-[-0.6px] xsm:text-[16px] text-[25px] uppercase whitespace-nowrap"
        >
          <a
            href=" mailto:info@godrive.bike"
            class="contacts-item flex gap-x-[23px] xsm:gap-x-[7px] items-center xsm:mb-[23px] mb-[30px]"
          >
            <span class="w-[20px]">
              <SvgMailIcon
                :fill="'#30b21b'"
                class="w-[19px] h-[14px] xsm:w-[12px] xsm:h-[9px]"
              ></SvgMailIcon>
            </span>
            <span>info@godrive.bike</span>
          </a>
          <a
            href="tel:+6281337413060"
            class="contacts-item flex xsm:gap-x-[7px] gap-x-[23px] items-center xsm:mb-[23px] mb-[38px]"
          >
            <span class="w-[20px]">
              <SvgPhoneIcon
                :fill="'#30b21b'"
                class="w-[19px] h-[19px] xsm:w-[12px] xsm:h-[12px]"
              ></SvgPhoneIcon>
            </span>
            <span>+6281337413060</span>
          </a>
          <a
            href="https://goo.gl/maps/QbxBDe7BeCUWwEgf9"
            class="contacts-item flex xsm:gap-x-[7px] gap-x-[23px] items-start"
          >
            <span class="w-[20px] flex justify-center">
              <SvgGeoIcon
                :fill="'#30b21b'"
                class="w-[12px] relative top-[3px] h-[19px] xsm:w-[8px] xsm:h-[12px]"
              ></SvgGeoIcon>
            </span>
            <span class="leading-[25px] xsm:text-left xsm:leading-[19px]"
              >Jl. Batu Mejan Canggu 38,<br />Canggu</span
            >
          </a>
        </div>
      </div>
      <a
        href="https://goo.gl/maps/QbxBDe7BeCUWwEgf9"
        class="contacts-hand xsm:w-screen xsm:flex xsm:justify-end xsm:relative xsm:left-0 xsm:right-0 md:hidden lg:w-[33%] xl:w-[40%] 2xl:right-0 absolute bottom-0 right-[8%]"
      >
        <img class="xsm:w-[90%]" src="/img/contacts/hand.png" alt="" />
        <span
          class="w-[215px] xsm:hidden lg:text-[14px] lg:w-[180px] lg:h-[56px] bg-green h-[69px] rounded-[10px] text-[16px] leading-[16px] absolute"
        >
          Нажмите, чтобы<br />построить маршрут!
        </span>
      </a>
    </section>
  </main>
</template>

<script setup></script>

<style lang="sass">
.contacts
	&-hand
		span
			box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25)
			padding: 17px 24px
			right: 20.5%
			letter-spacing: 0.2px
			top: 65px
			+r(1200)
				padding: 10px 14px
</style>
