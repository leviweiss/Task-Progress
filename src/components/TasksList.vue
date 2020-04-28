<template>
    <div id="tasks-list">
        <ul>
        <li class="tasks-list-item">abc</li>
        <li class="tasks-list-item">def</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'tasks-list',
    props: {
        tasks: Array
    },
}
</script>
<style scoped>

</style>