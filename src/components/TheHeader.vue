<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-between items-center py-5 px-4">
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        exact-active-class="no-active"
        :to="{ name: 'home' }"
        >Task manager</router-link
      >

      <div class="flex items-center">
        <ul class="flex flex-row mt-1">
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'tasks' }"> Tasks </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>
