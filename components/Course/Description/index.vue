<template>
  <div class="flex flex-col gap-y-5 relative my-6">
    <h1 class="text-2xl font-bold text-gray-800">{{ title }}</h1>
    <div class="relative">
      <div
        :class="[
          openDesc ? 'line-clamp-none' : 'line-clamp-[12]',
          'text-[#4b5563] duration-300 text-sm flex flex-col gap-4',
        ]"
      >
        <p v-for="(paragraph, index) in mainDescription" :key="index">
          {{ paragraph }}
        </p>
      </div>
      <div
        class="bg-gradient-to-t from-white to-white/0 h-40 absolute bottom-0 w-full"
        v-if="!openDesc"
      ></div>

      <Transition name="fade">
        <div v-if="openDesc" class="text-sm flex flex-col gap-4 mt-6">
          <div v-for="section in additionalSections" :key="section.id">
            <h1 class="text-2xl font-bold mb-2">{{ section.title }}</h1>
            <ul class="list-none flex flex-col gap-y-2">
              <li
                v-for="item in section.items"
                :key="item.id"
                class="flex items-start gap-x-4"
              >
                <Icon
                  :name="item.icon"
                  :class="[item.iconClass, 'mt-1 flex-shrink-0 text-gray-400']"
                />
                <span class="text-[#4b5563]">{{ item.text }}</span>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
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
</template>

<script setup>
const openDesc = ref(false);
const title = ref("Description");

const mainDescription = ref([
  `There are over 2 million apps on the App Store and growing. The only apps that do well are ones which are well designed both in terms of user interface and user experience. That's why it so important to learn the design skills that will make your app stand out in a crowd.`,

  `The App Design Course is great for people with absolutely no design experience or experienced designers who want to get up to speed quickly with mobile app design. We'll introduce you to the art of making beautiful apps. We'll explore key UI and UX concepts that are essential to building good looking and easy to use apps that are loved by users.`,

  `The course has a practical component that takes you step-by-step through the workflow of a professional app designer. From user flow diagrams to wireframing to mockups and prototypes.`,

  `Students completing the course will have the knowledge to create beautiful and lovable apps that leave people with a smile on their face.`,
]);

const additionalSections = ref([
  {
    id: 1,
    title: "Who this course is for:",
    items: [
      {
        id: 1,
        text: "Anyone who wants to build apps",
        icon: "radix-icons:dot-filled",
        iconClass: "text-base",
      },
      {
        id: 2,
        text: "Anyone who wants to get more downloads for their apps",
        icon: "radix-icons:dot-filled",
        iconClass: "text-base",
      },
      {
        id: 3,
        text: "Anyone who wants to start their own business or begin a freelance career",
        icon: "radix-icons:dot-filled",
        iconClass: "text-base",
      },
    ],
  },
]);
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
