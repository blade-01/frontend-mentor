<template>
  <div
    class="w-11/12 max-w-xs bg-white rounded-2xl md:w-2/5 lg:w-1/4 xl:w-1/5 shadow-md mb-8 p-4 text-center"
  >
    <img
      src="../assets/qrcode.png"
      alt="qr-code"
      class="rounded-2xl w-full mb-4 p-12 bg-[url('/src/assets/image-qr-code.png')] bg-contain bg-no-repeat"
    />
    <h1 class="text-2xl lg:text-lg text-title font-bold mb-4">
      Improve your front-end skills by building projects
    </h1>
    <p class="text-1xl lg:text-sm mb-4 text-body">
      Scan the QR code to visit Frontend Mentor and take your coding skills to
      the next level
    </p>
  </div>
</template>

<script>
export default {
  name: "QrCard",
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
