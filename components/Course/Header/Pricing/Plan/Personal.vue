<template>
  <div class="text-black px-4 md:px-6 py-5">
    <!-- Adjusted text sizes and padding for mobile -->
    <p class="text-lg md:text-xl font-extrabold">
      Subscribe to Udemy's top courses
    </p>

    <p class="text-sm mb-4">
      Get this course, plus 12,000+ of our top-rated courses, with Personal
      Plan.
      <span class="text-[#3B198F] font-extrabold underline">Learn more</span>
    </p>

    <!-- Made buttons larger on mobile for better touch targets -->
    <button
      class="bg-[#A435F0] hover:bg-[#A435F0] text-white font-bold py-3 md:py-2 px-4 rounded w-full"
    >
      Try Personal for free
    </button>
    <div class="text-center text-xs py-2 text-gray-500">
      Starting at $10.00 per month after trial
    </div>

    <p class="py-1 text-xs text-center text-gray-500">cancel anytime</p>

    <div class="separator">
      <span>or</span>
    </div>

    <div class="">
      <div class="text-2xl font-semibold text-gray-900">
        <span class="mr-2">€19.9</span>
      </div>

      <button
        class="w-full mt-4 py-3 font-semibold border border-black hover:bg-gray-200"
      >
        Add to cart
      </button>

      <div class="text-center text-xs py-1 text-gray-500">
        30-Day Money-Back Guarantee
      </div>

      <p class="py-1 text-xs text-center text-gray-500">Full Lifetime Access</p>

      <div
        class="mt-4 flex justify-around text-sm font-extrabold text-[#292b2c]"
      >
        <button class="hover:underline">Share</button>
        <button class="hover:underline">Gift this course</button>
        <button class="hover:underline">Apply Coupon</button>
      </div>

      <div
        class="flex items-center justify-between border border-dashed border-gray-400 p-2 mt-4 mb-3 text-xs"
      >
        <div class="text-gray-500">
          <p>
            <span class="font-extrabold">LETSLEARNNOW </span>
            is applied
          </p>

          <span class="text-xs text-gray-500">Udemy open</span>
        </div>

        <div @click="$emit('close')" class="text-[#A435F0]">
          <Icon
            name="material-symbols:close"
            class="cursor-pointer text-xl text-"
          />
        </div>
      </div>

      <div class="flex items-stretch">
        <BaseInput
          placeholder="Enter Coupon"
          main-div=" !w-[70%] "
          class="!border-black !rounded-none h-full"
          placeholder-style="text-xs"
          name="order"
        />

        <BaseButton
          name="Apply"
          main-class="bg-gray-800 !text-white font-medium text-sm !py-0 !w-[30%] !border !border-black"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  color: #969191; /* Text color */
}

.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #dbd9d9; /* Solid line */
}

.separator::before {
  margin-right: 10px;
}

.separator::after {
  margin-left: 10px;
}
</style>
