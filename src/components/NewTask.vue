<template>
  <form
    class="py-5 px-4 flex gap-1 bg-white rounded border border-gray-200"
    @submit.prevent="submitForm"
  >
    <input
      v-model="taskText"
      type="text"
      class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      placeholder="Enter New Task"
    />
    <button
      type="submit"
      class="py-1.5 px-3 rounded text-white bg-green-600"
      :class="{
        '!bg-green-300': !this.formReady,
      }"
      :disabled="!formReady"
    >
      Add
    </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NewTask',
  data() {
    return {
      taskText: '',
    };
  },
  methods: {
    ...mapActions(['addTask']),
    submitForm() {
      this.addTask({
        title: this.taskText,
      });
      this.taskText = '';
    },
  },
  computed: {
    formReady() {
      return !!this.taskText.length;
    },
  },
};
</script>
