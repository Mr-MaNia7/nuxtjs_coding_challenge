/** author Abdulkarim Getachew abdulkarimgmohammed@gmai.com */

<template>
  <div class="flex">
    <div class="relative group" @mouseenter="handleMouseEnterCategories">
      <span class="text-gray-700 hover:text-purple-600 cursor-pointer">
        Categories
      </span>

      <div
        v-show="showCategories"
        class="absolute left-0 bg-white border shadow-lg rounded-md text-sm z-50 flex mt-[30px] min-h-[35rem]"
        :class="dropdownWidth"
        @mouseleave="handleMouseLeaveCategories"
      >
        <!-- Categories -->
        <div
          class="bg-white w-64 py-4"
          @mouseenter="handleMouseEnterCategories"
        >
          <ul class="space-y-2 px-4">
            <li
              v-for="category in categories"
              :key="category.id"
              @mouseenter="handleMouseEnterCategory(category)"
              class="hover:text-purple-600 cursor-pointer flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-gray-50"
            >
              {{ category.name }}
              <Icon name="heroicons-solid:chevron-right" class="h-4 w-4" />
            </li>
          </ul>
        </div>

        <!-- Sub Categories -->
        <div v-if="activeCategory" class="border-l w-64 py-4">
          <ul class="space-y-2 px-4">
            <li
              v-for="subCategory in activeCategory.subcategories"
              :key="subCategory.id"
              class="text-gray-700 hover:text-purple-600 cursor-pointer flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-gray-50"
              @mouseenter="handleMouseEnterSubCategory(subCategory)"
            >
              {{ subCategory.name }}
              <Icon name="heroicons-solid:chevron-right" class="h-4 w-4" />
            </li>
          </ul>
        </div>

        <!-- Topics Display -->
        <div v-if="activeSubCategory" class="w-64 border-l py-4">
          <div class="px-4">
            <h3 class="font-semibold text-gray-900 mb-3">Popular Topics</h3>
            <ul class="space-y-2">
              <li
                v-for="(topic, index) in activeSubCategory.topics"
                :key="index"
                class="text-gray-600 hover:text-purple-600 cursor-pointer px-2 py-1.5 rounded-md hover:bg-gray-50"
              >
                {{ topic }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { categories } from "../../data/categories";
import type { Category, SubCategory } from "../../data/categories";

export default defineComponent({
  name: "CategoriesDropdown",

  data() {
    return {
      categories,
      activeCategory: null as Category | null,
      activeSubCategory: null as SubCategory | null,
      showCategories: false,
    };
  },

  computed: {
    dropdownWidth(): string {
      if (this.activeCategory && this.activeSubCategory) {
        return "w-[48rem]";
      } else if (this.activeCategory) {
        return "w-[32rem]";
      }
      return "w-64";
    },
  },

  methods: {
    handleMouseEnterCategories(): void {
      this.showCategories = true;
    },

    handleMouseLeaveCategories(): void {
      this.showCategories = false;
      this.activeCategory = null;
      this.activeSubCategory = null;
    },

    handleMouseEnterCategory(category: Category): void {
      this.activeCategory = category;
      this.activeSubCategory = null;
    },

    handleMouseEnterSubCategory(subCategory: SubCategory): void {
      this.activeSubCategory = subCategory;
    },
  },
});
</script>
