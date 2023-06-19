<template>
  <section class="container mx-auto px-4 py-5">
    <div class="py-5 flex flex-col items-center bg-white rounded border border-gray-200">
      <h1 class="font-bold text-4xl">A test task for replying to a vacancy</h1>
      <router-link
        class="mt-4 px-4 py-1 uppercase text-lime-600 text-xl border border-lime-600 rounded-xl hover:text-lime-800 hover:border-lime-800 hover:bg-lime-200 transition-all"
        :to="{ name: 'tasks' }"
      >
        go forward
      </router-link>
    </div>
  </section>
</template>
