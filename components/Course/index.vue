/** author Abdulkarim Getachew abdulkarimgmohammed@gmai.com */

<template>
  <div>
    <CourseHeader />
    <div class="gap-8 max-w-6xl w-full mx-auto py-8 grid grid-cols-3">
      <div class="col-span-2 pr-6">
        <BaseObserver @intersect="openPlanPopup" />
        <CourseFeatures />
        <CourseInclude />
        <CourseCompanies />
        <CourseContent />
        <CourseRequirement />
        <CourseDescription />
        <CourseFeaturedReview />
        <CourseStudentsBought />
        <CourseFrequentlyBought />
        <CourseInstructor />
        <CourseReview />
        <CourseMoreCourses />
      </div>

      <div v-if="courseStore.isPlanPopupOpened" class="relative">
        <div class="fixed top-10 w-[22rem] z-50 bg-white shadow-xl">
          <CourseHeaderPricingTab />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCourseStore } from "~/stores/course";

const courseStore = useCourseStore();
function openPlanPopup({ direction }) {
  if (direction == "to top") {
    courseStore.handleOpenPlanPopup(true);
  } else {
    courseStore.handleOpenPlanPopup(false);
  }
}
</script>
