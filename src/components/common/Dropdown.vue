<script setup>
import { ref } from "vue";

const isDropdownOpen = ref(false);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const props = defineProps({
  avatar: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  menuItems: {
    type: Array,
    required: true,
  },
});

</script>

<template>
  <div class="relative inline-block text-left ml-3">
    <button
        type="button"
        class="inline-flex gap-2 w-full justify-center rounded-md items-center border px-1.5 py-1.5 bg-darkBackground border-[#8e8d8d96]"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        @click="toggleDropdown"
      >
        <img :src="avatar" alt="" class="h-8" />
        <p class="text-white text-[14px]">{{ text }}</p>
        <svg
          class="-mr-1 size-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    <div
      class="absolute right-0 z-10 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
      v-if="isDropdownOpen"
    >
      <div class="py-1" role="none">
        <a
           v-for="(item , index) in menuItems" :key="index"
          :href="item.link"
          class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-200"
          role="menuitem"
          tabindex="-1"
          id="menu-item-0"
          @click="closeDropdown"
          >{{ item.label }}</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
