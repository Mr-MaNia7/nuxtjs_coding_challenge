<template>
  <div class="border-b-2 text-sm">
    <h1 class="text-xl font-extrabold mt-10 my-5">
      More Courses by
      <span class="text-[#371783]">App Brewery Co.</span>
    </h1>
    <ul class="grid grid-cols-3 gap-x-5">
      <CourseMoreCoursesItem
        v-for="item in otherCourses"
        :key="item.title"
        :item="item"
      />
    </ul>
    <hr class="mt-10" />
    <button
      class="text-gray-800 font-semibold px-8 py-3 border-2 border-gray-600 flex w-full justify-center items-center mt-5 hover:bg-gray-200"
    >
      Report abuse
    </button>
  </div>
</template>

<script setup>
const otherCourses = ref([
  {
    image: "/images/more-courses/1.jpg",
    title: "The Complete App Marketing Course",
    stars: 3.8,
    reviews: 629,
    duration: "4 total hours",
    lectures: 68,
    level: "All Levels",
    instructor: "App Brewery Co.",
    price: 11.99,
  },
  {
    image: "/images/more-courses/2.jpg",
    title: "CoreML - Master Machine Learning for iOS Apps",
    stars: 3.7,
    reviews: 138,
    duration: "4 total hours",
    lectures: 36,
    level: "Intermediate",
    instructor: "App Brewery Co.",
    price: 19.99,
  },
  {
    image: "/images/more-courses/3.jpg",
    title: "ARKit - Create Augmented Reality Apps for iOS Apps",
    stars: 4.7,
    reviews: 60,
    duration: "3 total hours",
    lectures: 21,
    level: "Intermediate",
    instructor: "App Brewery Co.",
    price: 19.99,
  },
]);
</script>

<style scoped></style>
