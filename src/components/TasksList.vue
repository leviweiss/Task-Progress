<template>
    <div id="tasks-list" class="tasks-list-container">
        <!-- <div class="tasks-list-container__header">Tasks</div> -->
        <div class="tasks-list-container__tasks">
            <div class="tasks-list-container__tasks__task" v-for="task in tasks" :key="task.id">
                <div class="tasks-list-container__tasks__task__name">
                    {{ task.name }}
                </div>
                <div class="tasks-list-container__tasks__task__bullets">
                    <div v-for="index in NUMBER_OF_BULLETS" :key="index">
                        <div class="tasks-list-container__tasks__task__bullets__square"
                        :class="{'tasks-list-container__tasks__task__bullets__square__full': squareNeedToBeFull({ taskId: task.id, index, taskValue: task.value })}"
                        @mouseover="activateHovering({ taskId: task.id, index })"
                        @mouseleave="deactivateHovering(task.id)">
                        </div>
                    </div>
                </div>
                <label class="tasks-list-container__tasks__task__value">
                    {{ task.value }}
                </label>
            </div>
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
        squareNeedToBeFull({ taskId, index, taskValue }) {
            if (index <= taskValue) {
                return true
            }
            var task = this.tasks.find(t => t.id === taskId)
            if (task.hoveringStatus === true && index <= task.hoveringIndex) {
                return true
            }
            return false
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
    // @include flex-column;

    // &__header {
    //     font-size: 30px;
    //     font-weight: bold;
    //     text-align: center;
    //     padding: 5px;
    //     background: #f6f6f6;
    //     min-width: 100px;
    //     max-width: 160px;
    //     margin-bottom: 10px;
    //     align-self: center;
    // }
    &__tasks {

        &__task {
            @include flex-row;
            margin-bottom: 10px;
            justify-content: space-evenly;
    
            &__name {
                font-size: 24px;
                margin-left: 20px;
                text-align: center;
                padding: 5px;
                background: #f6f6f6;
                width: 150px;
            }
    
            &__bullets {
                @include flex-row;
                align-items: center;
    
                &__square {
                    height: 20px;
                    width: 33px;
                    margin-left: 10px;
                    border: 4px solid;
    
                    &__full {
                        background: linear-gradient(297.24deg,#fbab7e 0%,#f7ce68 100%);
                    }
                }
            }
    
            &__value {
                font-size: 24px;
                margin-left: 10px;
                text-align: center;
                padding: 5px;
                background: #f6f6f6;
                width: 50px;
            }
        }
    }

}

</style>