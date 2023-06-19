<template>
  <ul
    v-if="allTasks.length"
    class="mt-4 py-5 px-4 flex flex-col gap-2 bg-white rounded border border-gray-200"
  >
    <li v-for="(task, i) in allTasks" :key="task.id">
      <TaskItem :task="task" :index="i" />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskItem from './TaskItem.vue';
import { setLocalData } from '../utils/localData';

export default {
  name: 'TaskList',
  components: { TaskItem },
  computed: {
    ...mapGetters(['allTasks']),
  },
  watch: {
    allTasks() {
      setLocalData('Task-manager/list', this.allTasks);
    },
  },
};
</script>
