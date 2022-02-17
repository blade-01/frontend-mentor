<template>
  <div
    class="bg-bg h-screen w-screen flex justify-center items-center flex-col overflow-hidden"
  >
    <qr-card />
    <attribution />
  </div>
</template>
<script>
import QrCard from "./components/QrCard.vue";
import Attribution from "./components/Attribution.vue";
export default {
  components: {
    QrCard,
    Attribution,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap");
body {
  /* font-family: "Outfit", sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
