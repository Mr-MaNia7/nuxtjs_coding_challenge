<template>
  <div class="flex flex-col gap-3 text-sm pb-3">
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-2">
        <Icon name="mdi:cog-outline" /> Last updated 11/2019
      </div>

      <div v-show="!showLanguages" class="flex items-center gap-2">
        <Icon name="fa-regular:list-alt" /> English [Auto], Arabic [Auto],
        <span
          @click="toggleLanguages"
          class="text-[#C0C4FC] underline hover:cursor-pointer"
          >9 more
        </span>
      </div>
    </div>

    <div v-if="showLanguages">
      <div class="flex items-center gap-2">
        <Icon name="fa-regular:list-alt" /> English [Auto], Arabic [Auto],
      </div>
      <p>
        French [Auto], Indonesian [Auto], Italian [Auto], Polish [Auto], Portuguese [Auto], Romanian [Auto], Spanish [Auto], Thai [Auto], Vietnamese [Auto]
      </p>
    </div>
  </div>
</template>

<script setup>
const showLanguages = ref(false);
function toggleLanguages() {
  showLanguages.value = !showLanguages.value;
}
</script>
