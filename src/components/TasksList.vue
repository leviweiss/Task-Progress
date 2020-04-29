<template>
    <div id="tasks-list" class="tasks-list-container">
        <ul>
        <li class="tasks-list-container_item">abc</li>
        <li class="tasks-list-container_item">def</li>
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

<style scoped lang="scss">
@mixin flex-row {
    display: flex;
    flex-direction: row;
}

@mixin flex-column {
    display: flex;
    flex-direction: column;
}

.tasks-list-container {
    @include flex-column;
}

</style>