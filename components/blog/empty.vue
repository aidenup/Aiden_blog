<script setup>

</script>

<template>
  <div class="group border m-2 rounded-2xl overflow-hidden shadow-lg">
    <NuxtLink to="/">
      <div class="lg:h-48 md:h-36 w-full object-cover object-center group-hover:scale-[1.05] transition-all duration-500">
        <LogoConfused />
      </div>
      <div class="p-5">
        <h2 class="text-3xl font-semibold pb-1 group-hover:text-sky-700">
          No Post Available
        </h2>
        <div class="flex group-hover:underline text-sky-700 items-center pt-2">
          <p>Back To Home</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style>

</style>
