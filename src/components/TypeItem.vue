<script setup>

const serverType = [
  {
    title: "Go Live",
    img: " src/assets/images/live.png",
    text: "Get your site up and running for the world to see by simply pointing your domain to the server.",
  },
  {
    title: "Staging Environment",
    img: "src/assets/images/staging.png",
    text: "Create your site in a staging environment and refine it until it’s ready for launch.",
  },
];
</script>

<template>
  <h5 class="dark:text-white text-md font-light mt-8">Server Type</h5>
  <div class="grid grid-cols-2 gap-8 mt-2">
    <div v-for="(item , index) in serverType" :key="index" class="flex items-center mt-1">
      <input
        type="radio"
        :id="index"
        name="options"
        value="option1"
        class="hidden peer"
        checked
      />
      <label
        :for="index"
        class="w-full flex items-center border border-[#313A6C] p-3 rounded-md peer-checked:border-darkPrimary"
      >
        <div class="icon shrink-0">
          <img :src="item.img" alt="" class="h-12" />
        </div>
        <div class="pl-5">
          <h4 class="text-white">{{ item.title }}</h4>
          <p class="text-sm leading-5 mt-1 line-clamp-2 text-darkText font-light ">{{ item.text }}</p>
        </div>
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
