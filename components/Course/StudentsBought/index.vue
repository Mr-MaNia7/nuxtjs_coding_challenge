<template>
  <div class="mt-8 flow-root">
    <h2 class="text-2xl font-extrabold">Students also bought</h2>

    <div class="min-w-full align-middle">
      <div class="overflow-hidden">
        <table class="min-w-full divide-y divide-gray-300">
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="course in courses" :key="course.id">
              <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                <div class="flex h-full">
                  <div class="h-16 w-16 shrink-0">
                    <img class="h-16 w-16" :src="course.image" alt="" />
                  </div>
                  <div class="ml-4 flex flex-col gap-y-1">
                    <h3
                      class="text-base font-semibold text-gray-800 capitalize"
                    >
                      {{ course.title }}
                    </h3>
                    <div class="mt-1 text-gray-500 flex items-center">
                      <span
                        :class="[course.tag_color || 'bg-customYellow-300']"
                        class="text-gray-600 self-center font-semibold px-2 text-xs leading-loose"
                      >
                        {{ course.tag }}
                      </span>
                      <span class="text-teal-800 font-semibold pl-2">
                        {{ course.duration }}</span
                      >
                      <Icon name="radix-icons:dot-filled" class="px-2" />
                      <span class="text-gray-600">
                        Updated {{ course.updated_at }}</span
                      >
                    </div>
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                <div
                  class="text-gray-600 flex gap-x-1 items-center text-base font-semibold"
                >
                  {{ course?.stars }}
                  <Icon
                    name="material-symbols:star"
                    class="text-yellow-600 text-xl"
                  />
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                <div class="text-gray-600 flex gap-x-1 items-center">
                  <Icon name="ic:sharp-group" class="text-gray-500 text-xl" />
                  {{ course?.students.toLocaleString() }}
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                <div class="flex shrink-0 items-center gap-x-6">
                  <div class="hidden sm:flex sm:flex-col sm:items-end">
                    <p class="text-sm/6 text-gray-900 font-bold">
                      {{
                        course.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "EUR",
                        })
                      }}
                    </p>
                  </div>
                </div>
              </td>
              <td
                class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
              >
                <button
                  type="button"
                  class="text-gray-500 hover:text-gray-600 ring-1 ring-gray-600 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <Icon
                    name="fluent-emoji-high-contrast:white-heart"
                    class="text-2xl"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <button
      class="border-2 border-gray-400 font-medium w-full text-sm py-3 hover:bg-gray-200"
    >
      Show more
    </button>
  </div>
</template>

<script setup>
const courses = [
  {
    id: 1,
    image: "images/bought-courses/1.jpg",
    title: "UX & Web Design Master Course: Strategy, Design, Development",
    duration: "23 total hours",
    updated_at: "3/2020",
    stars: 4.6,
    students: 106300,
    price: 19.99,
  },
  {
    id: 2,
    image: "images/bought-courses/2.jpg",
    title: "UX/UI Design Principles Compact (Theory + Figma Exercise)",
    duration: "2 total hours",
    updated_at: "3/2022",
    stars: 4.5,
    students: 3755,
    price: 19.99,
  },
  {
    id: 3,
    image: "images/bought-courses/3.jpg",
    title: "DESIGN RULES: Principles + Practices for Great UI Design",
    tag: "Bestseller",
    tag_color: "bg-customYellow-300",
    duration: "5 total hours",
    updated_at: "5/2024",
    stars: 4.6,
    students: 56590,
    price: 19.99,
  },
  {
    id: 4,
    image: "images/bought-courses/4.jpg",
    title: "Master Figma for Web Design & Freelancing: Learn UI/UX",
    tag: "Highest Rated",
    tag_color: "bg-customBrown-300",
    duration: "12.5 total hours",
    updated_at: "10/2024",
    stars: 4.7,
    students: 4024,
    price: 19.99,
  },
  {
    id: 5,
    image: "images/bought-courses/5.jpg",
    title: "User Experience Design Fundamentals",
    duration: "10 total hours",
    updated_at: "12/2019",
    stars: 4.5,
    students: 111046,
    price: 19.99,
  },
  {
    id: 6,
    image: "images/bought-courses/6.jpg",
    title: "UX Fundamentals: Career in UX",
    duration: "2 total hours",
    updated_at: "8/2021",
    stars: 4.6,
    students: 2392,
    price: 19.99,
  },
];
</script>
