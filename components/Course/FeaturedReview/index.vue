<template>
  <div class="p-6 border rounded-lg">
    <h2 class="text-2xl font-bold mb-6">Featured Review</h2>
    <div class="flex items-start gap-x-4">
      <img
        src="/images/rating/featured.jpg"
        alt="Reviewer avatar"
        class="w-12 h-12 rounded-full object-cover"
      />
      <div class="flex-1">
        <div class="flex flex-col gap-y-1">
          <h3 class="font-semibold text-base">{{ review.name }}</h3>
          <div class="flex items-center text-sm text-gray-600 gap-x-2">
            <span>{{ review.courses }} courses</span>
            <Icon name="radix-icons:dot-filled" class="text-xs" />
            <span>{{ review.totalReviews }} reviews</span>
          </div>
        </div>

        <div class="flex items-center gap-x-2 my-3">
          <div class="flex">
            <Icon
              v-for="star in 5"
              :key="star"
              name="ic:baseline-star"
              class="text-xl text-yellow-400"
            />
          </div>
          <span class="text-gray-600 text-sm">{{ review.timeAgo }}</span>
        </div>

        <p class="text-gray-700 text-sm mb-4">{{ review.content }}</p>

        <div class="flex items-center gap-x-4">
          <p class="text-sm text-gray-600">Was this review helpful?</p>
          <button
            class="flex items-center gap-x-2 p-2 rounded-full hover:bg-gray-100"
          >
            <Icon name="ic:baseline-thumb-up" class="text-xl text-gray-600" />
          </button>
          <button
            class="flex items-center gap-x-2 p-2 rounded-full hover:bg-gray-100"
          >
            <Icon name="ic:baseline-thumb-down" class="text-xl text-gray-600" />
          </button>
          <button class="text-sm text-gray-700 font-medium hover:underline">
            Report
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const review = ref({
  name: "Lavern M.",
  courses: 40,
  totalReviews: 4,
  rating: 5,
  timeAgo: "4 years ago",
  content:
    "I truly enjoyed the ease and flow of this course. It was straightforward and Angela made each section interesting and relevant. I just finished and completed a 12 month UX/UI Engineering-project based modeled program and this course has help me to hone the skills learned.",
  helpful: true,
});
</script>

<style scoped></style>
