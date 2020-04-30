<template>
    <div id="tasks-list" class="tasks-list-container">
        <div class="tasks-list-container__header">Tasks</div>
        <div v-for="task in tasks" :key="task.id">
            <div href="#" 
                class="tasks-list-container__task" 
                :class="{'tasks-list-container__task__active': task.id === chosenTaskId}"
                @click.prevent="chooseTask(task.id)">
                {{ task.name }}
            </div>            
        </div>          
    </div>
</template>

<script>
export default {
    name: 'tasks-list',
    props: {
        tasks: Array
    },
    data() {
        return {
            chosenTaskId: 1,
        }
    },
    methods: {
        chooseTask(itemId) {
            this.chosenTaskId = itemId;
        }
    }
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
    align-items: center;

    &__header {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        padding: 5px;
        margin: 1px;
        background: rgb(0, 0, 0);
        color: white;
        min-width: 80px;
        max-width: 120px;
    }

    &__task {
        font-size: 18px;
        margin: 1px;
        text-align: center;
        padding: 5px;
        background: rgba(0, 0, 0, 0.781);
        color: white;
        cursor: pointer;
        &:hover {
            background-color: gray;
        }

        &__active {
            background-color: gray;
        }
    }
}

</style>