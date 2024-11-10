<template>
  <li class="border-t-2 py-5">
    <div class="flex justify-between">
      <div class="flex gap-x-5">
        <div
          class="w-10 p-2 h-10 rounded-full bg-black text-white font-semibold flex items-center justify-center text-xl"
        >
          VS
        </div>
        <div>
          <p class="text-gray-600 text-lg font-semibold">Vikram Singh ..</p>
          <div class="flex gap-x-5 items-center">
            <BaseStarRatingFloating
              v-model="person.stars"
              :precision="0.1"
              @rating-selected="handleRatingSelected"
              @current-rating="handleCurrentRating"
              starSize="19px"
              :showRating="false"
              :disabled="true"
              fillColor="#d55400"
            />
            <span class="text-base text-gray-800">a month ago</span>
          </div>
        </div>
      </div>
      <Icon name="humbleicons:dots-vertical" class="text-2xl" />
    </div>
    <p class="text-gray-900 my-5">
      Superb.. I loved the voice and explanation of the instructor.
    </p>
    <!-- <button
      v-if=""
      class="font-semibold text-teal-950 underline text-sm underline-offset-2 mb-5"
    >
      Show more
    </button> -->
    <div class="flex gap-x-5 items-center">
      <small>Helpful?</small>
      <Icon name="mdi:like-outline" class="text-2xl" />
      <Icon name="mdi:dislike-outline" class="text-2xl" />
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
const person = ref({
  stars: 4.3,
  students: 18000,
});
</script>
