<template>
  <div
    ref="order"
    class="order px-[80px] xl:pt-[134px] md:pt-[131px] sm:pt-[66px] md:px-[0px] xl:px-[55px] sm:pb-[70px] md:pb-[150px] pb-[130px] 2xl:pt-[173px] pt-[179px] relative rounded-t-[70px] sm:rounded-t-[44px] bg-dark-700"
  >
    <div v-if="formStore.bike">
      <div ref="orderBody" class="order-body sm:px-[25px] md:px-[50px] max-w-[46.6%] xl:max-w-[68.8%] md:max-w-full">
        <h1
          class="order-title sm:text-[28px] tracking-[-1.5px] md:leading-[0.98] xl:tracking-[-1.2px] md:text-center xl:text-[36px] font-Euroblack md:text-[48px] text-[48px] uppercase border-bottom xl:pb-[41px] sm:pb-[34px] md:pb-[42px] pb-[30px]"
        >
          {{ locale == "ru" ? "ОФОРМЛЕНИЕ ЗАКАЗА" : "ORDERING" }}
        </h1>
        <form @submit="onSubmit">
          <div class="border-bottom order-step sm:pt-[40px] sm:pb-[41px] pt-[50px] pb-[49px]">
            <SectionOrderStep
              class="mb-[48px] sm:mb-[30px]"
              number="1"
              :text="locale == `ru` ? `Выберите раскраску байка` : `Select bike design`"
            ></SectionOrderStep>
            <SectionOrderRadioField
              @bikeImgChanged="handleBikeImage"
              :showPrice="false"
              :bg="false"
              :name="'bike'"
              :choosedDrawing="formStore.choosedDrawing"
              :options="formStore.bike.bikes"
            ></SectionOrderRadioField>
          </div>
          <!-- <div
          class="border-bottom order-step sm:pt-[41px] sm:pb-[37px] pt-[50px] pb-[49px]"
        >
          <SectionOrderStep
            class="mb-[48px] sm:mb-[29px]"
            number="2"
            text="Выберите сёрф"
          ></SectionOrderStep>
          <SectionOrderRadioField
            :showPrice="true"
            :bg="true"
            :name="'surf'"
            :options="surfBoards"
          ></SectionOrderRadioField>
        </div> -->
          <div class="border-bottom order-step sm:pt-[41px] sm:pb-[38px] pt-[50px] pb-[51px]">
            <SectionOrderStep
              class="mb-[48px] sm:mb-[40px]"
              number="2"
              :text="locale == 'ru' ? 'Выберите дополнительную комплектацию' : 'Choose additional equipment'"
            ></SectionOrderStep>
            <p class="font-Helvmed text-[14px] opacity-50 sm:mb-[28px] mb-[36px]">
              {{ locale == "ru" ? "Бесплатная комплектация" : "Free equipment" }}
            </p>
            <SectionOrderCheckboxField :addText="true" class="sm:mb-[22px] mb-[46px]" :checked="true" name="insurance">
              <span>
                {{ locale == "ru" ? "Страховка от повреждений и угона" : "Damage and theft insurance" }}
              </span>
            </SectionOrderCheckboxField>
            <SectionOrderCheckboxField :addText="true" class="sm:mb-[22px] mb-[46px]" :checked="true" name="firstaid">
              <span>
                {{ locale == "ru" ? "Аптечка" : "First aid kit" }}
              </span>
            </SectionOrderCheckboxField>
            <SectionOrderCheckboxField
              :addText="true"
              class="mb-[48px] sm:mb-[53px]"
              :checked="true"
              name="phoneholder"
            >
              <span>
                {{ locale == "ru" ? "Держатель для телефона" : "Holder for phone" }}
              </span>
            </SectionOrderCheckboxField>
            <SectionOrderSimpleRadioField
              widthClasses="w-[291px] md:w-[256px] sm:w-[161px]"
              class="mb-[40px] sm:mb-[29px]"
              name="adultHelmetCount"
            >
              <SvgSmallHelmetIcon></SvgSmallHelmetIcon>
              <span>
                {{ locale == "ru" ? "Новый взрослый шлем" : "New adult helmet" }}
              </span>
            </SectionOrderSimpleRadioField>
            <SectionOrderSimpleRadioField
              widthClasses="w-[291px] md:w-[256px] sm:w-[161px]"
              class="mb-[40px] sm:mb-[29px]"
              name="childHelmetCount"
            >
              <SvgSmallHelmetIcon></SvgSmallHelmetIcon>
              <span>{{ locale == "ru" ? "Новый детский шлем" : "New children's helmet" }}</span>
            </SectionOrderSimpleRadioField>
            <SectionOrderSimpleRadioField widthClasses="w-[291px] md:w-[256px] sm:w-[161px]" name="rainCoatCount">
              <SvgRainCoat></SvgRainCoat>
              <span>
                {{ locale == "ru" ? "Дождевик стандартный" : "Raincoat standard" }}
              </span>
            </SectionOrderSimpleRadioField>
          </div>
          <!-- <div
          class="border-bottom order-step sm:pt-[38px] sm:pb-[67px] pt-[48px] pb-[51px]"
        >
          <p class="font-Helvmed text-[14px] opacity-50 sm:mb-[38px] mb-[36px]">
            Платная комплектация
          </p>
          <SectionOrderCheckboxField
            class="mb-[47px] sm:mb-[38px]"
            :addText="true"
            :priceText="'20$ / день'"
            :price="'20'"
            :checked="true"
            name="surfBinding"
          >
            <span class="sm:max-w-[220px]">Крепление для сёрфа</span>
          </SectionOrderCheckboxField>
          <SectionOrderCheckboxField
            class="mb-[47px] sm:mb-[42px]"
            :addText="true"
            :priceText="'20$'"
            :price="'20'"
            :checked="true"
            name="usbCigarette"
          >
            <span class="sm:max-w-[220px]"
              >Прикуриватель USB со шнуром под телефон</span
            >
          </SectionOrderCheckboxField>
          <SectionOrderSimpleRadioField
            widthClasses="w-[291px] md:w-[256px] sm:w-[181px]"
            class="mb-[40px] sm:mb-[57px]"
            :price="20"
            :priceText="'20$ / шт.'"
            name="sportHelmetCount"
          >
            <SvgSmallHelmetIcon></SvgSmallHelmetIcon>
            <span>Новый спортивный шлем</span>
          </SectionOrderSimpleRadioField>
          <SectionOrderSimpleRadioField
            :price="20"
            widthClasses="w-[291px] md:w-[256px] sm:w-[181px]"
            :priceText="'20$ / шт.'"
            name="rainCoatPremiumCount"
          >
            <SvgRainCoat></SvgRainCoat>
            <span>Дождевик премиальный</span>
          </SectionOrderSimpleRadioField>
        </div> -->
          <div class="border-bottom order-step order-stamp sm:pt-[40px] sm:pb-[59px] md:pb-[69px] py-[50px]">
            <SectionOrderStep
              class="mb-[38px] sm:mb-[31px]"
              number="3"
              :text="locale == 'ru' ? 'Выберите локации доставки и возврата' : 'Select delivery and return locations'"
            ></SectionOrderStep>
            <div
              class="order-stamp-top sm:gap-0 sm:gap-x-[10px] mb-[38px] md:gap-x-[20px] md:mb-[64px] md:gap-y-[21px] md:flex-wrap flex items-center"
            >
              <CustomTextField
                :class="{ 'opacity-50 pointer-events-none': isDeliveryOfficy }"
                type="string"
                :disabled="isDeliveryOfficy"
                class="ci__payment-form sm:w-[248px] transition-opacity sm:mb-[23px] flex-shrink flex-grow md:mr-0 mr-[25px]"
                :subTitle="'Локация доставки'"
                :name="'firstAddress'"
                :autocomplete="true"
                :placeholder="'Введите адрес'"
              >
                <SvgGeoIcon class="h-[15px] w-[11px]" :fill="'#4c4c4d'"></SvgGeoIcon>
              </CustomTextField>
              <CustomSelectField
                :styleType="'order'"
                subTitle="Время доставки"
                :name="'deliveryTime'"
                class="w-[248px] sm:w-full sm:mb-[23px] sm:max-w-[350px] cs__order-form flex-shrink-0"
                :options="['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']"
                :defaultLabel="'Время доставки'"
              >
                <SvgClockIcon></SvgClockIcon>
              </CustomSelectField>
              <SectionOrderCheckboxField
                class="ml-[50px] sm:w-auto md:ml-0 w-[142px] relative top-[17px]"
                :addText="false"
                :checked="false"
                :name="'getAtOffice'"
                v-model:isChecked="isDeliveryOfficy"
                ><span class="sm:text-[16px] text-[14px] font-Helvmed">Заберу в офисе</span></SectionOrderCheckboxField
              >
            </div>
            <div
              class="order-stamp-bottom sm:gap-0 sm:gap-x-[10px] md:gap-y-[21px] md:gap-x-[20px] md:flex-wrap flex items-center"
            >
              <CustomTextField
                type="string"
                class="ci__payment-form sm:mb-[23px] sm:w-[248px] flex-grow flex-shrink md:mr-0 mr-[25px]"
                :subTitle="'Локация возврата'"
                :name="'lastAddress'"
                :autocomplete="true"
                :disabled="isReturnOffice"
                :class="{ 'opacity-50 pointer-events-none': isReturnOffice }"
                :placeholder="'Введите адрес'"
              >
                <SvgGeoIcon class="h-[15px] w-[11px]" :fill="'#4c4c4d'"></SvgGeoIcon>
              </CustomTextField>
              <CustomSelectField
                :styleType="'order'"
                subTitle="Время возврата"
                :name="'returnTime'"
                class="w-[248px] sm:mb-[23px] sm:w-full sm:max-w-[350px] cs__order-form flex-shrink-0"
                :options="['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']"
                :defaultLabel="'Время возврата'"
              >
                <SvgClockIcon></SvgClockIcon>
              </CustomSelectField>
              <SectionOrderCheckboxField
                class="ml-[50px] sm:w-auto md:ml-0 w-[142px] relative top-[17px]"
                :addText="false"
                :checked="false"
                v-model:isChecked="isReturnOffice"
                :name="'returnAtOffice'"
                ><span class="sm:text-[16px] text-[14px] font-Helvmed">Отдам в офисе</span></SectionOrderCheckboxField
              >
            </div>
          </div>
          <div class="border-bottom order-step sm:py-[40px] py-[50px]">
            <SectionOrderStep
              class="mb-[38px] sm:mb-[28px]"
              number="4"
              text="Введите ваши контактные данные"
            ></SectionOrderStep>
            <div
              class="order-client sm:mb-[22px] mb-[37px] sm:grid-cols-1 sm:gap-y-[23px] grid grid-cols-2 gap-x-[25px] gap-y-[38px]"
            >
              <CustomTextField
                :type="'string'"
                class="ci__payment-form"
                name="clientName"
                placeholder="Фамилия"
                :subTitle="'Ваша Фамилия'"
              >
                <SvgPersonIcon></SvgPersonIcon
              ></CustomTextField>
              <CustomTextField
                :type="'string'"
                class="ci__payment-form"
                name="clientEmail"
                placeholder="Введите ваш E-mail"
                :subTitle="'E-mail'"
              >
                <SvgMailIcon class="w-[15px] h-[11px]" fill="#616162"></SvgMailIcon
              ></CustomTextField>
              <CustomTextField
                :type="'number'"
                class="ci__payment-form"
                name="clientPhone"
                placeholder="Номер мессенджера"
                :subTitle="'Номер мессенджера для связи'"
              >
                <SvgPhoneIcon fill="#616162"></SvgPhoneIcon
              ></CustomTextField>
              <CustomSelectField
                :styleType="'order'"
                class="cs__order-form"
                :name="'clientMessenger'"
                :options="[{ name: 'Telegram' }, { name: 'Whatsapp' }, { name: 'Viber' }]"
                :defaultLabel="'Выберите мессенджер'"
                :subTitle="'Какой мессенджер используете'"
              >
                <SvgTelegramIcon></SvgTelegramIcon>
              </CustomSelectField>
            </div>
            <CustomFileField
              :name="'passport'"
              :subTitle="'Ваш загранпаспорт'"
              :defaultLabel="'Загрузите фото загранпаспорта'"
            >
              <SvgFileIcon></SvgFileIcon>
            </CustomFileField>
          </div>
          <TheButton class="mt-[50px] md:hidden btn-primary__dark w-full h-[70px] gap-[15px]" type="submit">
            <SvgCalendarIcon></SvgCalendarIcon>
            <span>Забронировать даты и комплектующие</span>
          </TheButton>
        </form>
      </div>
      <!-- <div class="modal-container max-w-[50%] absolute right-[80px] top-[130px]"> -->
      <OrderPinnedOrder
        class="top-[130px] right-[80px] xl:top-[77px] xl:right-[55px]"
        ref="orderSticky"
        :bike-name="formStore.bike.name"
        :bike-image="formStore.bikeImage"
        :full-price="formStore.computedPrice"
        :day-price-u-s-d="formStore.rate.dayPriceUSD"
        :date-dif="formStore.dateDif"
        :date-str-end="formStore.computedDateStrEnd"
        :date-str-start="formStore.computedDateStrStart"
      ></OrderPinnedOrder>

      <div class="order-mobile-modal sm:pt-[40px] hidden md:block md:max-w-full md:pt-[50px]">
        <div class="order-mobile-container hidden md:block">
          <div
            class="order-view sm:pb-[8px] sm:px-[25px] px-[40px] md:pb-[36px] md:items-center md:flex-col xl:pl-[42px] pb-[27px] xl:pb-[10px] flex md:rounded-t-[44px] rounded-t-[17px] bg-dark-300 sm:pt-[40px] md:pt-[68px] pt-[42px]"
          >
            <div class="order-view-text md:text-center">
              <div
                class="font-Euroblack uppercase md:mb-[80px] md:text-[30px] sm:mb-[40px] sm:text-[24px] mb-[48px] xl:mb-[36px] tracking-[-0.6px]"
              >
                Ваш заказ:
              </div>
              <div class="order-view-list md:hidden">
                <div class="order-view-item mb-[38px] xl:mb-[32px] flex items-start">
                  <SvgBikeIcon :fill="'#30B21B'"></SvgBikeIcon>
                  <div class="ml-[15px] order-view-item-container">
                    <div class="order-view-item-name font-Helvmed text-[16px] mb-[7px] xl:mb-[4px] leading-[1]">
                      {{ formStore.bike.name }}
                    </div>
                    <div class="order-view-item-price text-[14px] opacity-50 font-Helvmed">
                      {{ formStore.rate.dayPriceUSD }}$ / день ({{ formStore.computedPrice }}$ итого)
                    </div>
                  </div>
                </div>
                <div class="order-view-item mb-[38px] xl:mb-[32px] flex items-start">
                  <SvgSurfIcon stroke="#30B21B"></SvgSurfIcon>
                  <div class="ml-[15px] order-view-item-container">
                    <div class="order-view-item-name font-Helvmed text-[16px] mb-[7px] xl:mb-[4px] leading-[1]">
                      BaliGo Custom Surf
                    </div>
                    <div class="order-view-item-price text-[14px] opacity-50 font-Helvmed">3$ / день (27$ итого)</div>
                  </div>
                </div>
                <div class="order-view-item flex items-start">
                  <SvgCalendarIcon :fill="'#30B21B'"></SvgCalendarIcon>
                  <div class="ml-[18px] order-view-item-container">
                    <div class="order-view-item-name font-Helvmed text-[16px] mb-[5px] leading-[20px]">
                      с 19.10.2022<br />по 28.10.2022
                    </div>
                    <div class="order-view-item-price text-[14px] opacity-50 font-Helvmed">(8$ + 3$) x 9 дней</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="order-view-images md:justify-center md:mb-[90px] sm:mb-[52px] md:max-h-[360px] md:flex xl:hidden md:ml-0 flex ml-auto flex-shrink-0"
            >
              <img
                class="flex-shrink-0 object-contain sm:w-[85%] sm:mr-[25px] sm:object-contain mr-[25px] md:mr-0"
                :src="formStore.bikeImage"
                alt=""
              />
              <img
                v-if="false"
                class="flex-shrink-0 sm:w-[20%] sm:object-contain"
                src="/img/order/modal-surf.png"
                alt=""
              />
            </div>
            <div
              class="order-view-list md:justify-center md:w-full sm:flex-col sm:pl-0 hidden md:self-start md:gap-x-[54px] md:flex md:items-start"
            >
              <div
                class="order-view-item sm:w-full sm:mb-[39px] md:mb-0 mb-[38px] xl:mb-[32px] flex items-start sm:items-center"
              >
                <SvgBikeIcon :fill="'#30B21B'"></SvgBikeIcon>
                <div class="ml-[18px] sm:w-full sm:flex sm:items-center sm:relative order-view-item-container">
                  <div class="order-view-item-name font-Helvmed text-[16px] mb-[7px] xl:mb-[4px] leading-[1]">
                    {{ formStore.bike.name }}
                  </div>
                  <div class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed">
                    {{ formStore.rate.dayPriceUSD }}$ / день ({{ formStore.computedPrice }}$ итого)
                  </div>
                  <div class="order-view-item-price sm:ml-auto hidden sm:text-[16px] sm:block">
                    {{ formStore.computedPrice }}$
                  </div>
                  <div
                    class="order-view-item-price text-[14px] opacity-50 font-Helvmed hiddem: sm:block absolute right-0 sm:text-[12px] bottom-[-15px]"
                  >
                    <!-- {{ formStore.rate.dayPriceUSD }}$ / день -->
                  </div>
                </div>
              </div>

              <div class="order-view-item sm:w-full sm:mb-[39px] flex items-start sm:items-center">
                <SvgCalendarIcon :fill="'#30B21B'"></SvgCalendarIcon>
                <div class="ml-[18px] sm:w-full sm:flex sm:items-center sm:relative order-view-item-container">
                  <div class="order-view-item-name font-Helvmed text-[16px] mb-[5px] leading-[20px]">
                    с {{ formStore.computedDateStrStart }} по
                    {{ formStore.computedDateStrEnd }}
                  </div>
                  <div class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed">
                    {{ formStore.rate.dayPriceUSD }}$ x {{ formStore.dateDif }} суток
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="false"
            class="order-paid sm:px-[25px] p-[40px] sm:pt-[36px] md:pt-[47px] md:px-[50px] xl:px-[42px] pb-[36px] sm:pb-[56px] md:pb-[54px] xl:pb-[48px] xl:pt-[31px] pt-[33px] md:bg-[#282828] xl:bg-dark-300 bg-[#282828]"
          >
            <div
              class="order-paid-title tracking-[-0.6px] sm:mb-[40px] sm:text-center sm:text-[22px] md:mb-[44px] xl:mb-[39px] font-Euroblack uppercase xl:leading-[1] mb-[30px]"
            >
              Платная комплектация:
            </div>
            <div
              class="order-paid-list sm:grid-cols-1 md:grid md:grid-cols-3 md:gap-x-[50px] md:gap-y-[0] xl:flex-col pl-[10px] xl:pl-0 flex gap-x-[54px] xl:gap-x-0 xl:gap-y-[34px] flex-wrap"
            >
              <div class="order-view-item sm:w-full sm:mb-[45px] flex items-start sm:items-center">
                <SvgSurfIcon stroke="#30B21B"></SvgSurfIcon>
                <div class="ml-[15px] sm:w-full sm:flex sm:items-center sm:relative order-view-item-container">
                  <div class="order-view-item-name font-Helvmed text-[16px] xl:mb-[4px] mb-[7px] leading-[1]">
                    BaliGo Custom Surf
                  </div>
                  <div class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed">
                    3$ / день (27$ итого)
                  </div>
                  <div class="order-view-item-price sm:ml-auto hidden sm:text-[16px] sm:block">72$</div>
                  <div
                    class="order-view-item-price text-[14px] opacity-50 font-Helvmed hiddem: sm:block absolute right-0 sm:text-[12px] bottom-[-15px]"
                  >
                    8$ / день
                  </div>
                </div>
              </div>
              <div class="order-view-item sm:w-full sm:mb-[45px] flex items-start sm:items-center">
                <SvgSurfIcon stroke="#30B21B"></SvgSurfIcon>
                <div class="ml-[15px] sm:w-full sm:flex sm:items-center sm:relative order-view-item-container">
                  <div class="order-view-item-name font-Helvmed text-[16px] xl:mb-[4px] mb-[7px] leading-[1]">
                    BaliGo Custom Surf
                  </div>
                  <div class="order-view-item-price text-[14px] sm:hidden opacity-50 font-Helvmed">
                    3$ / день (27$ итого)
                  </div>
                  <div class="order-view-item-price sm:ml-auto hidden sm:text-[16px] sm:block">72$</div>
                  <div
                    class="order-view-item-price text-[14px] opacity-50 font-Helvmed hiddem: sm:block absolute right-0 sm:text-[12px] bottom-[-15px]"
                  >
                    8$ / день
                  </div>
                </div>
              </div>
              <div class="order-view-item flex items-start sm:items-center">
                <SvgSurfIcon stroke="#30B21B"></SvgSurfIcon>
                <div class="ml-[15px] sm:w-full sm:flex sm:items-center sm:relative order-view-item-container">
                  <div class="order-view-item-name font-Helvmed text-[16px] xl:mb-[4px] mb-[7px] leading-[1]">
                    BaliGo Custom Surf
                  </div>
                  <div class="order-view-item-price sm:hidden text-[14px] opacity-50 font-Helvmed">
                    3$ / день (27$ итого)
                  </div>
                  <div class="order-view-item-price sm:ml-auto hidden sm:text-[16px] sm:block">72$</div>
                  <div
                    class="order-view-item-price text-[14px] opacity-50 font-Helvmed hiddem: sm:block absolute right-0 sm:text-[12px] bottom-[-15px]"
                  >
                    8$ / день
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="order-summary sm:px-[25px] px-[40px] bg-green md:px-[50px] flex justify-between items-center font-Euroblack text-[18px] h-[92px] uppercase md:rounded-b-[44px] rounded-b-[12px]"
          >
            <div class="order-summary-container flex justify-between w-full xl:hidden md:flex sm:hidden">
              <span class="tracking-[-0.6px]">ИТОГОВАЯ СТОИМОСТЬ АРЕНДЫ:</span>
              <span class="tracking-[-0.6px]">{{ formStore.computedPrice }}$</span>
            </div>
            <div class="order-summary-container w-full justify-between hidden xl:flex md:hidden sm:flex">
              <span class="tracking-[-0.6px]">ИТОГО:</span>
              <span class="tracking-[-0.6px]">{{ formStore.computedPrice }}$</span>
            </div>
          </div>
        </div>
        <div class="sm:px-[25px] md:px-[50px] order-mobile-modal-btn">
          <hr class="hidden md:block sm:my-[40px] opacity-10 w-full my-[50px] h-[2px] bg-light" />
          <TheButton
            @click="onSubmit"
            class="mt-[50px] sm:mt-0 sm:w-full sm:ml-0 hidden md:flex btn-primary__dark w-full h-[70px] gap-[15px]"
            type="submit"
          >
            <SvgCalendarIcon></SvgCalendarIcon>
            <span class="sm:hidden">Забронировать даты и комплектующие</span>
            <span class="hidden sm:block">{{ $t("buttonBooking") }}</span>
          </TheButton>
        </div>
      </div>
    </div>
    <div v-else>Загрузка</div>

    <!-- </div> -->
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import { useStorage } from "@vueuse/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFormStore } from "~~/store/form";
import { useCommercialStore } from "~~/store/commercial";
const router = useRouter();
const { locale } = useI18n();

gsap.registerPlugin(ScrollTrigger);
const commercialStore = useCommercialStore();
const formStore = useFormStore();

// const formvalues = useStorage("formvalues");
// if (process.client) {
//   if (formvalues.value) {
//     formStore.fillForm(JSON.parse(formvalues.value));
//     bikeImage.value = formStore.bike.img;
//   } else {
//     useRouter().push("/");
//   }
// }

const handleBikeImage = (payload) => {
  formStore.bikeImage = payload.img;
};

let isDeliveryOfficy = ref(false);
let isReturnOffice = ref(false);

const { handleSubmit } = useForm();
let order = ref(null);
let orderSticky = ref(null);
let orderBody = ref(null);

// definePageMeta({
//   pageTransition: false,
// })

onMounted(() => {
  // ScrollTrigger.create({
  //   id: "index",
  //   trigger: ".order-body",
  //   start: "top 180px",
  //   end: () => `+=${getDurationHeight()}`,
  //   pin: ".order-sticky",
  // })

  if (!formStore.bike) {
    router.push("/");
    return;
  }
  let getDurationHeight = () => {
    let computedStyle = getComputedStyle(order.value);
    let elementHeight = order.value.clientHeight;
    elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    return elementHeight - orderSticky.value.orderSticky.offsetHeight + 50;
  };
  ScrollTrigger.create({
    id: "index",
    trigger: orderBody.value,
    start: "top 180px",
    end: () => `+=${getDurationHeight()}`,
    pin: orderSticky.value.orderSticky,
  });

  // setTimeout(() => {
  //   ScrollTrigger.create({
  //     id: "index",
  //     trigger: orderBody.value,
  //     start: "top 180px",
  //     end: () => `+=${getDurationHeight()}`,
  //     pin: orderSticky.value,
  //   })
  // }, 500)
  // ScrollTrigger.getById("index").enable()
});

// onBeforeUnmount(() => {
//   ScrollTrigger.getById("index").kill();
// });

const onSubmit = handleSubmit(async (values) => {
  commercialStore.orderBike({
    order_id: values.order_id,
    order_date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString().slice(0, -3),
    client_name: formStore.client_name,
    client_surname: values.clientName,
    client_phone: values.clientPhone,
    client_social: values.clientMessenger.name,
    client_email: values.clientEmail,
    order_date_start:
      new Date(formStore.dates.start).toLocaleDateString() + "" + new Date(formStore.dates.start).toLocaleTimeString(),
    order_date_end:
      new Date(formStore.dates.end).toLocaleDateString() + "" + new Date(formStore.dates.end).toLocaleTimeString(),
    bike_model: values.bike.name,
    bike_painting: values.bike.drawing,
    location_delivery: values.firstAddress,
    time_delivery: values.deliveryTime,
    location_return: values.lastAddress,
    time_return: values.returnTime,
    helmets: values.adultHelmetCount,
    full_price: formStore.computedPrice,
  });
  useRouter().push("/payment");
});
</script>

<style lang="sass">
.order-sticky-container
	+r(1660)
		zoom: 0.95
	+r(991)
		zoom: 1
.order-body
	+r(1660)
		zoom: 0.85
	+r(991)
		zoom: 1
.border-bottom
	border-bottom: 2px solid rgba($light, 0.1)
</style>
