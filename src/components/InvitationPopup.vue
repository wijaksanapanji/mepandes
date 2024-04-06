<script setup>
import { EnvelopeIcon } from '@heroicons/vue/20/solid';

defineProps({
  invitee: String,
});

const emit = defineEmits(['hidePopup']);
</script>

<template>
  <div
    class="min-h-full z-10 absolute inset-0 flex justify-center items-center bg-orange-50 flex-col gap-y-4 text-center"
    id="container">
    <div class="flex flex-col font-dancing-script mb-10" data-aos="fade-up" data-aos-delay="100">
      <p class="text-2xl">Undangan</p>
      <h1 class="text-6xl">Mepandes</h1>
      <p class="text-xl mt-2">(Potong Gigi)</p>
    </div>
    <div v-if="invitee" data-aos="fade-up" data-aos-delay="200">
      <p>Kpd Bpk/Ibu/Sodara/i</p>
      <p class="font-dancing-script text-4xl mt-4">{{ invitee }}</p>
    </div>
    <button @click="emit('hidePopup')" type="button"
      class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      data-aos="fade-up" data-aos-delay="300">
      <EnvelopeIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
      Buka Undangan
    </button>
  </div>
</template>

<style scoped>
#container {
  background-image: url('../assets/background-modal.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>