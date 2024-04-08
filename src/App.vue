<script setup>
import { onMounted, ref } from 'vue';
import AOS from 'aos';
import { ArrowDownIcon } from '@heroicons/vue/20/solid';
import InvitationPopup from './components/InvitationPopup.vue';

onMounted(() => {
  AOS.init();
});

const params = new URLSearchParams(window.location.search);
const invitee = params.get('to');

const backsound = ref(null);

const isPopupShown = ref(true);
const hidePopup = () => {
  document.body.classList.remove('overflow-hidden');

  if (backsound.value) {
    backsound.value.play();
  }

  isPopupShown.value = false;
}
</script>

<template>
  <audio src="https://swalapatra.com/wp-content/uploads/2023/03/y2mate.com-INSTRUMEN-RATU-ANOM-LAGU-BALI.mp3"
    class="hidden" ref="backsound"></audio>
  <Transition>
    <InvitationPopup :invitee="invitee" v-show="isPopupShown" @hide-popup="hidePopup" />
  </Transition>
  <div class="section flex flex-col items-center text-center justify-center gap-8 px-4">
    <div data-aos="fade-up" data-aos-delay="100">
      <p class="text-xl">Upacara Manusa Yadnya</p>
      <h1 class="text-4xl font-dancing-script">Mepandes / Potong Gigi</h1>
    </div>
    <div data-aos="fade-up" data-aos-delay="200">
      <p>
        Abdir gatrani suddhyanti
        Manah satyena suddhyanti, Vidyatapobhyam bhutatma
        Buddhir inanena suddhyanti."
      </p>
      <p class="font-bold">
        (Manawa Dharmasastra Bab V.109)
      </p>
    </div>
    <div data-aos="fade-up" data-aos-delay="200" class="flex flex-col items-center">
      <p class="underline">
        Tubuh dibersihkan dengan air, pikiran disucikan dengan kebenaran, jiwa manusia dengan pelajaran suci
        dan tapa bratha, kecerdasan dengan pengetahuan benar.
      </p>
      <img src="./assets/leaf.png" class="h-10 mt-4">
    </div>
    <ArrowDownIcon class="h-10 text-indigo-600 animate-bounce" />
  </div>
  <div class="section px-4">
    <div class="overflow-hidden rounded-lg bg-white shadow">
      <div class="px-4 py-8 sm:p-6 text-center flex flex-col text-indigo-900">
        <div class="font-dancing-script text-2xl flex flex-col gap-y-2">
          <p>I Gede T.A Nugraha</p>
          <p>I Gede Nyoman T.A Panji Wijaksana</p>
          <p>I Gede Ketut Adi Setiadarma</p>
        </div>
        <p class="my-8 font-semibold tracking-widest uppercase">Putra dari pasangan</p>
        <div class="font-dancing-script text-2xl">
          <p>I Gede Nyoman Mariasa</p>
          <p>&</p>
          <p>Ida Ayu Asri</p>
        </div>
        <img src="./assets/leaf.png" class="h-10 mt-4 self-center">
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  background-image: url('./assets/background-modal.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>