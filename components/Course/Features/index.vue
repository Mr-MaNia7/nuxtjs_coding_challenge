<template>
  <div class="p-6 border border-black">
    <h2 class="text-2xl font-bold">What you'll learn</h2>

    <ul class="grid grid-cols-2 gap-x-3 py-2">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-center mb-2 text-sm"
      >
        <Icon
          name="material-symbols:check"
          class="h-4 w-4 text-gray-800 mr-2"
        />
        <span class="text-gray-700">{{ feature }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const features = ref([
  "Create mobile app designs from scratch",
  "Understand the differences between designing for iOS and Android",
  "Create wireframe designs for any digital project",
  "Create mockups using Sketch and other tools",
  "Create animated prototypes",
  "Start a new career as a UI/UX designer",
]);
</script>
