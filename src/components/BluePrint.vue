<script setup>

</script>

<template>
  <div class="blueprint-container p-5 bg-darkBackground mt-8 rounded-md">
    <div class="flex justify-between">
      <h4 class="text-xl text-white font-light">Blueprints</h4>
      <!-- Toggle Switch -->
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <div
          class="relative w-11 h-6 peer-focus:outline-none  rounded-full peer dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:after:bg-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-400  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"
        ></div>
      </label>
    </div>
    <p class="text-sm dark:text-darkText mt-2">Add the following record to the DNS for your domain to get free</p>
  </div>
</template>

<style lang="scss" scoped></style>
