<template>
  <main class="flex-grow">
    <section class="bg-dark-700 xsm:flex-col xsm:px-[25px] xl:px-[50px] md:items-start flex items-center relative xsm:h-auto xsm:min-h-0 h-screen min-h-[830px] rounded-t-[70px] sm:rounded-t-[44px] px-[80px]">
      <div class="contacts-inner xsm:mb-[58px] xsm:pt-[58px] xsm:text-center sm:w-full sm:w-max-[568px] xsm:flex xsm:items-center xsm:flex-col md:pt-[80px] md:mt-0 w-[567px] xl:ml-0 2xl:ml-[5%] mt-[3.6%] ml-[10.2%]">
        <h1 class="contact-title xsm:mb-[16px] xsm:text-[28px] xsm:tracking-[-0.8px] md:text-[46px] tracking-[-1.9px] font-Euroblack text-[58px] uppercase mb-[13px]">Контакты</h1>
        <p class="contacts-desc xsm:mb-[29px] xsm:leading-[20px] xsm:text-[16px] leading-[23px] md:mb-[51px] mb-[40px]">Наш офис расположен в самом сердце Убуда. Вы можете добраться к нам на общественном транспорте или на такси.</p>
        <form @submit.prevent="onSubmit" class="contacts-phone xsm:mb-[43px] xsm:w-full xsm:flex-col xsm:items-center mb-[69px] flex items-end gap-x-[10px]">
          <CustomTextField :type="'number'" :name="'phone'" class="ci__index-form xsm:text-left xsm:mb-[15px] xsm:w-full ci__contacts-form flex-grow flex-shrink" :placeholder="'Номер телефона'" :subTitle="'Хотите перезвоним?'">
            <SvgPhoneIcon :fill="'#000000'"></SvgPhoneIcon>
          </CustomTextField>
          <TheButton class="btn-primary__dark xsm:h-[60px] xsm:w-full flex-shrink-0 flex-grow-0 w-[196px] h-[70px]">
            <span class="xsm:hidden">Перезвонить</span>
            <span class="xsm:block hidden">Перезвонить мне</span>
          </TheButton>
        </form>
        <div class="contacts-items xsm:w-full font-Euroblack tracking-[-0.6px] xsm:text-[16px] text-[25px] uppercase whitespace-nowrap">
          <div class="contacts-item flex gap-x-[23px] xsm:gap-x-[7px] items-center xsm:mb-[23px] mb-[30px]">
            <div class="w-[20px]">
              <SvgMailIcon :fill="'#30b21b'" class="w-[19px] h-[14px] xsm:w-[12px] xsm:h-[9px]"></SvgMailIcon>
            </div>
            <span>info@godrive.bike</span>
          </div>
          <div class="contacts-item flex xsm:gap-x-[7px] gap-x-[23px] items-center xsm:mb-[23px] mb-[30px]">
            <div class="w-[20px]">
              <SvgPhoneIcon :fill="'#30b21b'" class="w-[19px] h-[19px] xsm:w-[12px] xsm:h-[12px]"></SvgPhoneIcon>
            </div>
            <span>+62 678 345 78 88</span>
          </div>
          <div class="contacts-item flex xsm:gap-x-[7px] gap-x-[23px] items-center">
            <div class="w-[20px] flex justify-center">
              <SvgGeoIcon :fill="'#30b21b'" class="w-[12px] h-[19px] xsm:w-[8px] xsm:h-[12px]"></SvgGeoIcon>
            </div>
            <span>Индонезия, Бали, Чангу</span>
          </div>
        </div>
      </div>
      <div class="contacts-hand xsm:w-screen xsm:flex xsm:justify-end xsm:relative xsm:left-0 xsm:right-0 md:hidden lg:w-[33%] xl:w-[40%] 2xl:right-0 absolute bottom-0 right-[8%]">
        <img class="xsm:w-[80%]" src="/img/contacts/hand.png" alt="" />
        <div class="w-[215px] xsm:hidden lg:text-[14px] lg:w-[180px] lg:h-[56px] bg-green h-[69px] rounded-[10px] text-[16px] leading-[16px] absolute">Как нас найти?<br />Вот так можно найти.</div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useForm } from "vee-validate"
const { handleSubmit } = useForm()
const onSubmit = handleSubmit((values) => {})
</script>

<style lang="sass">
.contacts
	&-hand
		div
			box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25)
			padding: 20px 24px
			right: 23.5%
			letter-spacing: 0.2px
			top: 75px
			+r(1200)
				padding: 10px 14px
</style>
