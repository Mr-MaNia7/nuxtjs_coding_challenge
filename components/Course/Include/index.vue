<template>
  <div class="flex flex-col gap-3 my-12">
    <h1 class="text-2xl font-bold">This course includes:</h1>

    <div class="grid grid-cols-2 gap-2">
      <div
        v-for="course in courseIncludes"
        :key="course.id"
        class="text-sm flex items-center gap-3"
      >
        <Icon :name="course.icon" class="text-xl" />
        {{ course.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
const courseIncludes = ref([
  {
    icon: "material-symbols-light:live-tv-outline",
    title: "3 hours on-demand video",
  },
  {
    icon: "fe:mobile",
    title: "Access on mobile and TV",
  },
  {
    icon: "material-symbols-light:draft-outline",
    title: "14 articles",
  },
  {
    icon: "material-symbols:trophy-outline",
    title: "Certificate of completion",
  },
  {
    icon: "uil:folder-download",
    title: "1 downloadable resources",
  },
]);
</script>
