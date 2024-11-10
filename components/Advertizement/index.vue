/** author Abdulkarim Getachew abdulkarimgmohammed@gmai.com */
<template>
  <div
    class="flex justify-between items-center bg-[#5022c3] w-full py-4 px-6 relative z-50 text-white"
  >
    <div class="flex-grow text-center">
      <span class="font-bold">Ready to get with the times?</span>
      <a
        href="https://business.udemy.com/?ref=ub-smartbar&utm_type=mx"
        class="ml-2"
        rel="noopener noreferrer"
        >| Get the skills with Udemy Business.
      </a>
    </div>

    <button
      @click="$emit('close')"
      class="ml-4 text-white hover:opacity-75 transition-opacity"
      aria-label="Close banner"
    >
      <Icon name="material-symbols:close" class="text-xl" />
    </button>
  </div>
</template>

<script>
export default {
  emits: ["close"],
};
</script>
