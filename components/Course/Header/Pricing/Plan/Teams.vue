<template>
  <div class="bg-white p-4 md:p-8">
    <!-- Adjusted padding and image size for mobile -->
    <img
      src="/images/logo-ub.svg"
      alt="Udemy business logo"
      class="h-6 md:h-7"
    />
    <p class="text-sm mb-4 md:mb-6 text-gray-700 pt-2">
      Subscribe to this course and 27,000+ top‑rated Udemy courses for your
      organization.
    </p>
    <button
      class="bg-[#A435F0] hover:bg-[#A435F0] text-white font-bold py-3 md:py-2 px-4 rounded w-full"
    >
      Try Udemy Business
    </button>

    <!-- Adjusted list spacing for mobile -->
    <ul class="mt-6 md:mt-8">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-center mb-3 md:mb-2 text-sm"
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
const features = [
  "For teams of 2 or more users",
  "27,000+ fresh & in-demand courses",
  "Learning Engagement tools",
  "SSO and LMS Integrations",
];
</script>
