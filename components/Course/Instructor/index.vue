<template>
  <div>
    <div class="text-sm">
      <h1 class="text-2xl font-extrabold text-gray-800 mb-5">
        {{ instructor.title }}
      </h1>
      <h2
        class="underline underline-offset-4 text-lg text-[#371783] font-semibold"
      >
        {{ instructor.name }}
      </h2>
      <p class="text-gray-500 text-sm">
        {{ instructor.subtitle }}
      </p>

      <div class="flex items-center gap-x-10 my-3">
        <div class="w-28 rounded-full overflow-clip">
          <img :src="instructor.image" />
        </div>
        <div class="flex-1 flex flex-col gap-y-2">
          <div
            v-for="(stat, index) in instructor.stats"
            :key="index"
            class="flex gap-x-2 items-center"
          >
            <Icon :name="stat.icon" class="text-gray-700 text-xl" />
            {{ stat.text }}
          </div>
        </div>
      </div>

      <div class="text-gray-800 flex flex-col gap-2">
        <p v-for="(paragraph, index) in instructor.description" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const instructor = ref({
  title: "Instructor",
  name: "App Brewery Co.",
  subtitle: "in-Person & Online Development Bootcamp",
  image: "/images/instructor.jpg",
  stats: [
    {
      icon: "material-symbols:star-rounded",
      text: "4.3 instructor Rating",
    },
    {
      icon: "streamline:star-badge-solid",
      text: "12,886 Reviews",
    },
    {
      icon: "ic:sharp-group",
      text: "81,373 Students",
    },
    {
      icon: "carbon:play-filled",
      text: "6 Courses",
    },
  ],
  description: [
    "Learn to build iOS and Android apps from beginning to end. Our curriculum is designed for entrepreneurs who want to turn their app idea into reality. We’ll teach you everything you need to know to become a successful app entrepreneur with your app business. The course curriculum includes:",
    "Idea validation - how to test to see if your idea has traction",
    "Setting up an app business",
    "App design using wireframes and prototypes",
    "User interface (UI) and user experience (UX) design",
    "App programming for iOS and Android",
    "App growth hacking skills to get downloads on the App Stores",
    "How to get featured on the app stores",
    "How to get press for your app",
    "Join today by going to online[dot]londonappbrewery[dot]com",
  ],
});
</script>
