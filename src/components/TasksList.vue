<template>
    <div id="tasks-list" class="tasks-list-container">
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
        <div class="tasks-list-container__add-task">
            <div v-if="addingNewTaskMode === false" class="tasks-list-container__add-task__icon" @click="setAddingNewTaskMode">
                <div class="fas fa-plus-circle"></div>
            </div>
            <form v-else>
                <input class="tasks-list-container__add-task__input" v-model="newTaskName" required type="text" placeholder="enter task name" maxlength="16">
            </form>
        </div>

    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    name: 'tasks-list',
    data() {
        return {
            newTaskName: "",
        }
    },    
    computed: {
        ...mapState({
            NUMBER_OF_BULLETS: state => state.NUMBER_OF_BULLETS,
            addingNewTaskMode: state => state.addingNewTaskMode,
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
            'setAddingNewTaskMode',
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
    @include flex-column;

    &__tasks {
        &__task {
            @include flex-row;
            margin-bottom: 10px;
            justify-content: center;
    
            &__name {
                font-size: 24px;
                margin-left: 10px;
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
                margin-right: 10px;
            }
        }
    }

    &__add-task {
        align-self: center;

        &__input {
            font-size: 24px;
            border: 2px solid;
        }
    }    
}

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

.fa-plus-circle {
    width: 36px;
    height: 36px;
    cursor: pointer;
    padding: 2px;
    background: $light-gray;
    border-radius: 50%;
    &:hover {
        box-shadow: 0 0 10px $basic-orange;
    }        
}
</style>