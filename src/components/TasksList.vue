<template>
    <div id="tasks-list" class="tasks-list-container">
        <div class="tasks-list-container__header">Tasks</div>
        <div class="tasks-list-container__tasks" v-for="task in tasks" :key="task.id">
            <div class="tasks-list-container__tasks__name">
                {{ task.name }}
            </div>
            <div class="tasks-list-container__tasks__bullets">
                <div v-for="index in NUMBER_OF_BULLETS" :key="index">
                    <div class="tasks-list-container__tasks__bullets__square"
                    :class="{'tasks-list-container__tasks__bullets__square__full': squareNeedToBeFull({ taskId: task.id, index, taskValue: task.value })}"
                    @mouseover="activateHovering({ taskId: task.id, index })"
                    @mouseleave="deactivateHovering(task.id)">
                    </div>
                </div>
            </div>
            <label class="tasks-list-container__tasks__value">
                {{ task.value }}
            </label>
        </div>          
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    name: 'tasks-list',
    computed: {
        ...mapState({
            NUMBER_OF_BULLETS: state => state.NUMBER_OF_BULLETS,
        }),
        ...mapGetters([
            'tasks',
        ]),
    },
    methods: {
        ...mapActions([
            'increaseScore',
            'decreaseScore',
            'activateHovering',
            'deactivateHovering',
        ]),
        squareNeedToBeFull(taskId, squareNumber, taskValue) {
            if (squareNumber <= taskValue) {
                return true
            }
            var task = this.tasks.find(t => t.id === taskId)
            if (task.hoveringStatus === true && squareNumber <= task.hoveringIndex) {
                return true
            }
            return false
        },
        deactivateHovering(task) {
            task.hoveringStatus = false
            task.hoveringIndex = undefined
        },
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
    margin-left: 5px;
    align-items: center;
    justify-content: center;    

    &__header {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        padding: 5px;
        background: rgb(0, 0, 0);
        color: white;
        min-width: 100px;
        max-width: 160px;
        margin-bottom: 10px;
        align-self: center;
    }

    &__tasks {
        @include flex-row;
        margin-bottom: 15px;
        align-self: flex-start;

        &__name {
            font-size: 24px;
            margin-left: 20px;
            text-align: center;
            padding: 5px;
            background: rgba(0, 0, 0, 0.781);
            color: white;
            width: 150px;
        }

        &__bullets {
            @include flex-row;
            align-items: center;
            margin-left: 20px;
            margin-right: 20px;

            &__square {
                height: 20px;
                width: 30px;
                margin-left: 10px;
                border: 4px solid;

                &__full {
                    background-color: gray;
                }
            }
        }

        &__value {
            font-size: 24px;
            margin-left: 10px;
            text-align: center;
            padding: 5px;
            background: rgba(0, 0, 0, 0.781);
            color: white;
            width: 50px;
        }
    }
}

</style>