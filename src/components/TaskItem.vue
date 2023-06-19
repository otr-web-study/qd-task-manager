<template>
  <div class="border border-gray-200 p-3 mb-2 rounded">
    <div v-if="showForm">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label class="inline-block mb-2">Task Title</label>
          <input
            v-model="taskText"
            type="text"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Enter Task Title"
            @input="errorMessage = ''"
          />
          <p class="text-red-600" name="modified_name">{{ errorMessage }}</p>
        </div>
        <button type="submit" class="py-1.5 px-3 rounded text-white bg-green-600 mr-2">
          Submit
        </button>
        <button
          type="button"
          class="py-1.5 px-3 rounded text-white bg-gray-600"
          @click="showForm = false"
        >
          Cancel
        </button>
      </form>
    </div>
    <div v-else class="flex items-center gap-2">
      <p class="text-xl text-bold">{{ this.index + 1 }}.</p>
      <h4 class="inline-block text-xl font-bold flex-grow">{{ this.task.title }}</h4>
      <button
        class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
        @click="deleteTask(task.id)"
      >
        <i class="fa fa-times"></i>
      </button>
      <button
        class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
        @click="showForm = true"
      >
        <i class="fa fa-pencil-alt"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskItem',
  props: ['task', 'index'],
  data() {
    return {
      taskText: this.task.title,
      showForm: false,
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions(['deleteTask', 'updateTask']),
    submitForm() {
      if (!this.taskText) {
        this.errorMessage = 'Please, fill in the field';
        return;
      }

      this.updateTask({
        ...this.task,
        title: this.taskText,
      });
      this.showForm = false;
    },
  },
};
</script>
