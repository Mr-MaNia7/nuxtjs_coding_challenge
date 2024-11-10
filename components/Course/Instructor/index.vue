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

      <!-- Description Accordion -->
      <div class="flex flex-col gap-y-5 relative my-6">
        <h1 class="text-2xl font-bold text-gray-800">Description</h1>
        <div class="relative">
          <div
            :class="[
              openDesc ? 'line-clamp-none' : 'line-clamp-[3]',
              'text-[#4b5563] duration-300 text-sm flex flex-col gap-4',
            ]"
          >
            <p
              v-for="(paragraph, index) in instructor.description"
              :key="index"
            >
              {{ paragraph }}
            </p>
            <Transition name="fade">
              <div v-if="openDesc" class="text-sm flex flex-col gap-4">
                <div
                  v-for="(list, index) in instructor.additionalSections"
                  :key="index"
                >
                  {{ list }}
                </div>
              </div>
            </Transition>
          </div>
          <div
            class="bg-gradient-to-t from-white to-white/0 h-10 absolute bottom-0 w-full"
            v-if="!openDesc"
          ></div>
        </div>

        <button
          @click="openDesc = !openDesc"
          class="text-[#371783] flex items-center justify-start gap-x-2 -translate-y-2 font-semibold"
        >
          Show <span>{{ openDesc ? "less" : "more" }}</span>
          <Icon
            name="radix-icons:chevron-up"
            class="duration-300 text-xl"
            :class="[openDesc ? '' : 'transform rotate-180']"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const openDesc = ref(false);

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
    "Learn to build iOS and Android apps from beginning to end. Our curriculum is designed for entrepreneurs who want to turn their app idea into reality. We'll teach you everything you need to know to become a successful app entrepreneur with your app business. The course curriculum includes:",
  ],

  additionalSections: [
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
