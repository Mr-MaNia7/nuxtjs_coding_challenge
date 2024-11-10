<template>
  <li class="flex flex-col gap-y-2">
    <img :src="item.image" class="w-full" />
    <h1 class="text-sm font-extrabold text-gray-900">{{ item.title }}</h1>
    <div>
      <p class="text-gray-600 text-xs">{{ item.instructor }}</p>
      <div class="flex gap-x-2 items-center">
        <p class="text-gray-600 text-lg font-semibold">{{ item.stars }}</p>
        <BaseStarRatingFloating
          v-model="item.stars"
          :precision="0.1"
          starSize="13px"
          :showRating="false"
          :disabled="true"
          fillColor="#d55400"
          class="gap-x-0"
        />
      </div>
      <div class="flex items-center text-xs gap-2">
        <span class="text-gray-600">{{ item.duration }} </span>
        <span class="text-gray-500">{{ item.lectures }} Lectures</span>
        <span class="text-gray-500"> {{ item.level }}</span>
      </div>
    </div>
    <p class="font-bold text-xl">
      {{
        item.price.toLocaleString("en-US", {
          style: "currency",
          currency: "EUR",
        })
      }}
    </p>
  </li>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>
