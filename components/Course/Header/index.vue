<template>
  <div class="bg-[#1C1D1F] w-full text-white">
    <CourseHeaderNav />
    <div class="gap-8 max-w-6xl w-full mx-auto py-8 px-4">
      <!-- Changed from grid-cols-3 to responsive grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Changed col-span-2 to be responsive -->
        <div class="flex flex-col gap-6 lg:col-span-2 lg:pr-5">
          <div class="text-[#C0C4FC] font-bold text-sm">
            Design <Icon name="mingcute:right-fill" class="text-xl" /> User
            Experience Design<Icon name="mingcute:right-fill" class="text-xl" />
            User Experience (UX) Design
          </div>
          <!-- Adjusted text sizes for mobile -->
          <div class="text-2xl lg:text-4xl font-extrabold text-white">
            The Complete App Design Course - UX, UI and Design Thinking
          </div>

          <div class="text-lg lg:text-xl font-bold text-white">
            Learn App Design to Make Beautiful, Lovable Apps
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <span class="text-[#C0C4FC] underline">
                <BaseRating :rating="4.4" :numberOfReviews="11636" />
              </span>
              <p class="">50,593 students</p>
            </div>

            <p class="">
              Created by
              <NuxtLink
                class="text-[#C0C4FC] underline"
                to="https://www.udemy.com/course/the-complete-app-design-course-ux-and-ui-design/#instructor-1"
                >App Brewery Co.</NuxtLink
              >
            </p>

            <CourseHeaderLanguage />
          </div>
        </div>

        <!-- Pricing section will automatically stack on mobile -->
        <div class="lg:col-span-1">
          <CourseHeaderPricing />
        </div>
      </div>
    </div>
  </div>
</template>
