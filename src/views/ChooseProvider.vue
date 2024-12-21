<script setup>
import BluePrint from "@/components/BluePrint.vue";
import TypeItem from "@/components/TypeItem.vue";
import { ref } from "vue";

const dropdownOpen = ref(false);
const searchText = ref("");
const options = ref(["Option 1", "Option 2", "Option 3", "Option 4"]);
const filteredOptions = ref([...options.value]);

const filterOptions = () => {
  if (searchText.value === "") {
    filteredOptions.value = [...options.value];
  } else {
    filteredOptions.value = options.value.filter((option) =>
      option.toLowerCase().includes(searchText.value.toLowerCase())
    );
  }
};

const selectOption = (option) => {
  searchText.value = option;
  dropdownOpen.value = false;
};

const closeDropdown = () => {
  setTimeout(() => (dropdownOpen.value = false), 100);
};
</script>

<template>
  <div class="container flex items-center justify-center">
    <div
      class="setup-container bg-darkBackgroundSecondary p-14 rounded-lg max-w-[920px] w-full shadow-sm"
    >
      <div class="text-center">
        <h2
          class="dark:text-white font-light text-4xl flex items-center justify-center gap-5"
        >
          Set Up Your Server With
          <img src="../assets/images/logo/logo-light.png" alt="" class="w-32" />
        </h2>
        <p class="text-md text-[#919DB9] font-light py-2">
          Fill in the details below to get your server set up with xCloud
        </p>
      </div>
      <form>
        <div class="server-details mt-10">
          <h5 class="dark:text-white text-md font-light">Server Details</h5>
          <div class="grid grid-cols-2 gap-8 mt-2">
            <div>
              <label class="font-light text-sm text-darkText" for="title"
                >Server Name</label
              >
              <div class="relative group mt-2">
                <input
                  id="title"
                  placeholder="Example Site"
                  class="w-full h-[52px] bg-transparent border rounded-md px-4 text-sm text-white border-[#313A6C] outline-none placeholder-gray-400 placeholder:text-sm"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label class="font-light text-sm text-darkText" for="title"
                >Add Tag (Optional)</label
              >
              <div class="relative w-full max-w-md mx-auto mt-2">
                <input
                  type="text"
                  id="type-dropdown"
                  placeholder="Search or select..."
                  class="w-full h-[52px] bg-transparent border rounded-md px-4 text-sm text-white border-[#313A6C] outline-none placeholder-gray-400 placeholder:text-sm"
                  @input="filterOptions"
                  @focus="dropdownOpen = true"
                  @blur="closeDropdown"
                  v-model="searchText"
                />
                <svg
                  class="absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-400"
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

                <!-- Dropdown menu -->
                <ul
                  v-if="dropdownOpen"
                  class="absolute z-10 w-full bg-white rounded-md shadow-lg mt-1 max-h-40 overflow-auto text-sm"
                >
                  <li
                    v-for="(option, index) in filteredOptions"
                    :key="index"
                    class="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                    @mousedown="selectOption(option)"
                  >
                    {{ option }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <TypeItem/>
          <BluePrint/>
        </div>
      </form>
    </div>
  </div>
</template>
