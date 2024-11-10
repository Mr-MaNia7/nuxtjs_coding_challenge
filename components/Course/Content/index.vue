<template>
  <div class="flex flex-col gap-y-3 my-6">
    <h1 class="text-2xl font-bold mb-5">Course Content</h1>
    <div class="flex justify-between text-sm">
      <p class="flex items-center gap-x-1 text-gray-600">
        <span>8 sections</span>
        <Icon name="radix-icons:dot-filled" />
        <span>62 lectures</span>
        <Icon name="radix-icons:dot-filled" />
        <span>3h 4m total length</span>
      </p>
      <button @click="toggleAllSections" class="font-semibold text-primary-600">
        {{ isAllExpanded ? "Collapse" : "Expand" }} all sections
      </button>
    </div>

    <div class="space-y-2">
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="border rounded-md"
      >
        <!-- Section Header -->
        <div
          class="px-5 py-4 flex justify-between cursor-pointer bg-gray-50"
          @click="toggleSection(index)"
        >
          <div class="flex items-center gap-x-3">
            <Icon
              name="radix-icons:chevron-up"
              class="duration-300 text-xl"
              :class="[section.isOpen ? '' : 'transform rotate-180']"
            />
            <h3 class="text-base font-semibold text-gray-800 capitalize">
              {{ section.title }}
            </h3>
          </div>
          <div class="flex items-center text-gray-500 gap-x-1">
            <span class="text-sm text-gray-600">{{
              section.totalLecture
            }}</span>
            <Icon name="radix-icons:dot-filled" class="text-xs" />
            <span class="text-sm text-gray-600">{{
              section.totalDuration
            }}</span>
          </div>
        </div>

        <!-- Section Content -->
        <div v-show="section.isOpen" class="px-5 text-gray-500 text-sm">
          <div
            v-for="(lecture, lectureIndex) in section.content"
            :key="lectureIndex"
          >
            <div class="flex justify-between items-center p-4">
              <div class="flex items-center gap-3">
                <Icon
                  :name="
                    lecture.type === 'video'
                      ? 'ph:monitor-play-bold'
                      : 'prime:file'
                  "
                  class="text-xl"
                />
                <div class="flex items-center gap-2">
                  <a
                    href="#"
                    @click.prevent
                    :class="[
                      lecture.isFree
                        ? 'text-primary-700 hover:text-primary-900 cursor-pointer'
                        : 'text-gray-600',
                    ]"
                    >{{ lecture.title }}</a
                  >
                  <button
                    v-if="lecture.description"
                    @click.prevent="toggleDescription(index, lectureIndex)"
                    class="ml-2 focus:outline-none"
                  >
                    <Icon
                      name="radix-icons:chevron-down"
                      class="duration-300"
                      :class="[
                        lecture.isDescriptionOpen ? 'transform rotate-180' : '',
                      ]"
                    />
                  </button>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <a
                  v-if="lecture.isFree"
                  href="#"
                  @click.prevent
                  class="text-primary-600 text-sm hover:text-primary-900"
                  >Preview</a
                >
                <span class="text-sm text-gray-600 w-12">{{
                  lecture.duration
                }}</span>
              </div>
            </div>
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform -translate-y-1 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-1 opacity-0"
            >
              <div
                v-if="lecture.description && lecture.isDescriptionOpen"
                class="px-12 pb-4 text-gray-600"
              >
                {{ lecture.description }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const sections = ref([
  {
    title: "Introduction",
    isOpen: true,
    totalLecture: "5 lectures",
    totalDuration: "8min",
    content: [
      {
        title: "Introduction to the App Design Course",
        duration: "01:41",
        type: "video",
        isFree: true,
        isDescriptionOpen: false,
      },
      {
        title: "How to Get All The Free Stuff",
        duration: "01:09",
        type: "video",
        isFree: true,
        isDescriptionOpen: false,
      },
      {
        title: "Download Your Massive Bundle Here",
        duration: "00:07",
        type: "text",
        description:
          "To download your massive bundle of assets. All you have to do is check this lesson's resources to get all the assets we've compiled for you.",
        isDescriptionOpen: false,
      },
      {
        title: "Why design is important for an app entrepreneur",
        duration: "01:32",
        type: "video",
        isFree: true,
        isDescriptionOpen: false,
      },
      {
        title: "Designer vs. Non-Designer Thinking",
        duration: "03:33",
        type: "video",
        isFree: true,
        isDescriptionOpen: false,
      },
    ],
  },
  {
    title: "Color Theory",
    isOpen: false,
    totalLecture: "5 lectures",
    totalDuration: "13min",
    content: [],
  },
  {
    title: "Typography",
    isOpen: false,
    totalLecture: "6 lectures",
    totalDuration: "16min",
    content: [],
  },
  {
    title: "User Interface (UI) Design for Mobile",
    isOpen: false,
    totalLecture: "8 lectures",
    totalDuration: "26min",
    content: [],
  },
  {
    title: "User Experience (UX) Design for Mobile",
    isOpen: false,
    totalLecture: "11 lectures",
    totalDuration: "39min",
    content: [],
  },
  {
    title:
      "Designing for iOS and Android - What are the Important Differences?",
    isOpen: false,
    totalLecture: "7 lectures",
    totalDuration: "14min",
    content: [],
  },
  {
    title:
      "Putting it All Together - A Step-By-Step Guide to the Mobile Design Workflow",
    isOpen: false,
    totalLecture: "17 lectures",
    totalDuration: "1hr 7min",
    content: [],
  },
  {
    title: "Resources",
    isOpen: false,
    totalLecture: "3 lectures",
    totalDuration: "1min",
    content: [],
  },
]);

const isAllExpanded = ref(false);

const toggleAllSections = () => {
  isAllExpanded.value = !isAllExpanded.value;
  sections.value.forEach((section) => {
    section.isOpen = isAllExpanded.value;
  });
};

const toggleSection = (sectionIndex) => {
  sections.value[sectionIndex].isOpen = !sections.value[sectionIndex].isOpen;
  isAllExpanded.value = sections.value.every((section) => section.isOpen);
};

const toggleDescription = (sectionIndex, lectureIndex) => {
  const lecture = sections.value[sectionIndex].content[lectureIndex];
  lecture.isDescriptionOpen = !lecture.isDescriptionOpen;
};
</script>
