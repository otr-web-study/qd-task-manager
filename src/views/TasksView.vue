<template>
  <section class="container mx-auto mt-4 py-5 flex flex-col">
    <NewTask />
    <TaskList />
  </section>
</template>

<script>
import NewTask from '@/components/NewTask.vue';
import TaskList from '@/components/TaskList.vue';

export default {
  name: 'TaskView',
  components: { NewTask, TaskList },
};
</script>
