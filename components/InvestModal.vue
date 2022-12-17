<template>
  <Transition name="bmodal">
    <div
      @click="handleOutsideClick"
      :class="{ 'z-[1000]': globalStore.activeInvestModal }"
      class="imodal"
      v-show="globalStore.activeInvestModal"
    >
      <div class="imodal-window"></div>
    </div>
  </Transition>
</template>

<script setup>
import { useGlobalStore } from "~~/store/global";

const handleOutsideClick = (event) => {
  if (!event.target.closest(".bmodal-window")) {
    globalStore.activeInvestModal = false;
  } else return;
};

let globalStore = useGlobalStore();
globalStore.activeInvestModal = true;
</script>

<style lang="sass"></style>
