<template>
  <ul
    role="list"
    class="overflow-hidden bg-white ring-1 ring-gray-300 px-4 sm:px-6 py-5 my-8"
  >
    <h1 class="text-2xl font-extrabold text-gray-800 mb-5">
      Frequently Bought Together
    </h1>
    <CourseFrequentlyBoughtItem
      v-for="course in courses"
      :key="course.instructor"
      :course="course"
      class="relative flex justify-between gap-x-6 py-5 hover:bg-gray-50"
    />

    <div class="flex justify-between mt-5">
      <div class="flex items-center text-xl text-black">
        Total :
        <h1 class="text-2xl font-semibold text-black">
          {{
            courses
              .reduce((acc, person) => acc + person.price, 0)
              .toLocaleString("en-US", {
                style: "currency",
                currency: "EUR",
              })
          }}
        </h1>
      </div>
      <div class="flex justify-end">
        <button class="px-7 py-3 bg-primary-600 font-bold text-white text-lg">
          Add all to cart
        </button>
      </div>
    </div>
  </ul>
</template>

<script setup>
const courses = [
  {
    image: "images/frequently-bought/1.jpg",
    title: "The Complete App Design Course - UX, UI and Design Thinking",
    instructor: "App Brewery Co.",
    stars: 4.3,
    students: 11635,
    href: "#",
    price: 19.99,
  },
  {
    image: "images/frequently-bought/2.jpg",
    title: "UX & Web Design Master Course: Strategy, Design, Development",
    instructor: "Joe Natoli",
    stars: 4.6,
    students: 15394,
    href: "#",
    price: 19.99,
  },
  {
    image: "images/frequently-bought/3.jpg",
    title: "Sketching for UX Designers - Boost UX work with pen & paper!",
    instructor: "Krisztina Szerovay, István Szép, Gergely Szerovay",
    stars: 4.6,
    students: 4002,
    href: "#",
    price: 19.99,
  },
];
</script>
