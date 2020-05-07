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
                        @mouseleave="deactivateHovering(task.id)"
                        @click="bulletClick({ taskId: task.id, index })">
                        </div>
                    </div>
                </div>
                <div class="tasks-list-container__tasks__task__arrows">
                    <div class="tasks-list-container__tasks__task__arrows__up" @click="increaseScore(task.id)">
                        <i class="fas fa-arrow-up"></i>
                    </div>
                    <div class="tasks-list-container__tasks__task__arrows__up" @click="decreaseScore(task.id)">
                        <i class="fas fa-arrow-down"></i>
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
            'bulletClick',
        ]),
        squareNeedToBeFull({ taskId, index, taskValue }) {
            var task = this.tasks.find(t => t.id === taskId)
            if (task.hoveringStatus === true) {
                if (index <= task.hoveringIndex) {
                    return true
                }
            }
            else {
                if (index <= taskValue) {
                    return true
                }
            }

            return false
        },
    }
}
</script>

<style scoped lang="scss">

.tasks-list-container {
    .fa-arrow-up {
        color: green;
        width: 40px;
        height: 30px;
        background: $light-gray;
        margin-right: 10px;
        cursor: pointer;
        &:hover {
            box-shadow: 0 0 8px green;
        }        
    }    

    .fa-arrow-down {
        color: red;
        width: 40px;
        height: 30px;
        background: $light-gray;
        cursor: pointer;
        &:hover {
            box-shadow: 0 0 8px red;
        }        
    }

    &__tasks {
        &__task {
            @include flex-row;
            margin-bottom: 10px;
            justify-content: center;
    
            &__name {
                font-size: 24px;
                margin-left: 30px;
                margin-right: 30px;
                text-align: center;
                padding: 5px;
                background: $light-gray;
                width: 150px;
            }
    
            &__bullets {
                @include flex-row;
                align-items: center;
                margin-right: 20px;
    
                &__square {
                    height: 20px;
                    width: 33px;
                    margin-right: 10px;
                    border: 4px solid;
    
                    &__full {
                        background: $orange-linear-gradient;
                    }
                }
            }

            &__arrows {
                @include flex-row;
                align-items: center;
                margin-right: 30px;
            }

            &__value {
                font-size: 24px;
                text-align: center;
                padding: 5px;
                background: $light-gray;
                width: 50px;
            }
        }
    }

}

</style>