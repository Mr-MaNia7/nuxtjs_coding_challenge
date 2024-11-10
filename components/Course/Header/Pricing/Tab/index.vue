<template>
  <div>
    <!-- Made tabs more touch-friendly on mobile -->
    <div class="grid grid-cols-2">
      <div
        class="py-4 md:py-6 text-gray-600 text-center font-bold cursor-pointer hover:text-black border-b border-gray-300"
        :class="{ 'active-plan': isPersonalPlanActive }"
        @click="handleTogglePersonalPlan(true)"
      >
        Personal
      </div>

      <div
        class="py-4 md:py-6 text-gray-600 text-center font-bold cursor-pointer hover:text-black border-b border-gray-300"
        :class="{ 'active-plan': !isPersonalPlanActive }"
        @click="handleTogglePersonalPlan(false)"
      >
        Teams
      </div>
    </div>

    <!-- Pricing plans will stack naturally -->
    <Transition name="fade" mode="out-in">
      <div v-if="isPersonalPlanActive">
        <CourseHeaderPricingPlanPersonal />
      </div>
      <div v-else>
        <CourseHeaderPricingPlanTeams />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCourseStore } from "~/stores/course";
const courseStore = useCourseStore();

// Create a reactive reference
const isPersonalPlanActive = ref(true);

// Function to handle tab toggle
function handleTogglePersonalPlan(value) {
  isPersonalPlanActive.value = value;
  courseStore.handleChangePlanTab(value);
}

// Initialize state on component mount
onMounted(() => {
  isPersonalPlanActive.value = courseStore.isPersonalPlanActive;
});
</script>

<style scoped>
.active-plan {
  border-bottom: 2px solid black;
  color: black;
}
</style>
