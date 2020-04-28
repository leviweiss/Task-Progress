<template>
    <div id="app" class="app-container">
        <header></header>
        <tasks-list :tasks="currentTasks"></tasks-list>
        <groups-list :groups="groups"></groups-list>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import GroupsList from '@/components/GroupsList.vue';
import TasksList from '@/components/TasksList.vue';

export default {
    name: 'App',
    components: {
        Header, TasksList, GroupsList
    },
    data() {
        return {
            groups: [],
            currentTask: []
        };
    },    
}
</script>

<style scoped>
    .app-container {

    }

</style>
