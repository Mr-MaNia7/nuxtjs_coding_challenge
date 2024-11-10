/** author Abdulkarim Getachew abdulkarimgmohammed@gmai.com */

<template>
  <nav
    class="flex items-center justify-between px-6 bg-white shadow-md z-40 relative"
  >
    <div class="flex items-center">
      <!-- Hamburger Menu Button (mobile only) -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="lg:hidden mr-4"
      >
        <Icon
          :name="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'"
          class="text-2xl"
        />
      </button>

      <img
        src="/images/logo-udemy.svg"
        alt="Udemy Logo"
        class="w-24 h-12 object-contain"
      />

      <!-- Desktop Category -->
      <div class="hidden lg:block">
        <Category />
      </div>
    </div>

    <!-- Search Bar (desktop) -->
    <div class="flex-grow w-fit mx-4 hidden lg:flex">
      <BaseInput
        v-model="search"
        placeholder="Search for anything"
        class="!w-full !rounded-full !py-3 focus:!outline-none focus:!ring-0"
        placeholder-style="text-sm"
        main-div="w-full"
        icon-leading-class="pl-12"
        name="search"
      >
        <template #leading>
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4"
          >
            <Icon
              name="material-symbols:search"
              class="text-gray-700 text-2xl"
            />
          </div>
        </template>
      </BaseInput>
    </div>

    <!-- Desktop Navigation -->
    <div class="hidden lg:flex items-center space-x-4">
      <HeaderPopupBusiness />
      <HeaderPopupTeach />
      <div class="relative">
        <Icon name="mdi:cart-outline" class="text-gray-700 text-2xl" />
      </div>
      <BaseButton
        @click="$router.push('/')"
        name="Log in"
        main-class="hover:bg-gray-300 !py-2"
      />
      <BaseButton
        @click="$router.push('/')"
        name="Sign up"
        main-class="bg-gray-800 !text-white font-bold !py-2"
      />
      <button
        class="text-gray-700 border border-black px-3 py-2 hover:bg-gray-300"
      >
        <Icon name="mage:globe" class="text-gray-700 text-2xl" />
      </button>
    </div>

    <!-- Mobile Search and Cart (always visible) -->
    <div class="flex lg:hidden items-center space-x-4">
      <Icon name="material-symbols:search" class="text-gray-700 text-2xl" />
      <Icon name="mdi:cart-outline" class="text-gray-700 text-2xl" />
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        @click="isMobileMenuOpen = false"
      ></div>
    </transition>

    <!-- Mobile Menu Panel -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 -translate-x-full"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 lg:hidden transform"
      >
        <div class="flex flex-col h-full">
          <!-- Mobile Menu Content -->
          <div class="p-4 border-b">
            <div class="flex flex-col space-y-4">
              <BaseButton
                @click="$router.push('/')"
                name="Log in"
                main-class="w-full hover:bg-gray-300 !py-2"
              />
              <BaseButton
                @click="$router.push('/')"
                name="Sign up"
                main-class="w-full bg-gray-800 !text-white font-bold !py-2"
              />
            </div>
          </div>

          <!-- Mobile Search -->
          <div class="p-4 border-b">
            <BaseInput
              v-model="search"
              placeholder="Search for anything"
              class="!w-full !rounded-full !py-2"
              main-div="w-full"
              name="search"
            />
          </div>

          <!-- Mobile Navigation Links -->
          <div class="flex-1 overflow-y-auto">
            <Category />
            <div class="p-4 space-y-4">
              <HeaderPopupBusiness />
              <HeaderPopupTeach />
              <button class="flex items-center space-x-2">
                <Icon name="mage:globe" class="text-gray-700 text-xl" />
                <span>English</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      search: "",
      isMobileMenuOpen: false,
    };
  },
  watch: {
    $route() {
      this.isMobileMenuOpen = false;
    },
  },
  mounted() {
    // Close mobile menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isMobileMenuOpen) {
        this.isMobileMenuOpen = false;
      }
    });
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleEscape);
  },
};
</script>
