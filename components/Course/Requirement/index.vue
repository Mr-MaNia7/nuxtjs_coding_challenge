<template>
  <div class="flex flex-col gap-y-5">
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <ul class="list-none list-inside flex flex-col gap-y-1">
      <li
        v-for="requirement in requirements"
        :key="requirement.id"
        class="text-sm text-gray-500 flex items-center gap-x-4"
      >
        <Icon :name="requirement.icon" :class="requirement.iconClass" />
        {{ requirement.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const title = ref("Requirements");

const requirements = ref([
  {
    id: 1,
    text: "No pre-knowledge required - we'll teach you everything you need to know of design",
    icon: "radix-icons:dot-filled",
    iconClass: "text-2xl",
  },
  {
    id: 2,
    text: "A PC or Mac is required",
    icon: "radix-icons:dot-filled",
    iconClass: "text-2xl",
  },
  {
    id: 3,
    text: "No software is required in advance of the course (all software used in the course is free or has a demo version)",
    icon: "radix-icons:dot-filled",
    iconClass: "text-2xl",
  },
]);
</script>

<style scoped></style>
