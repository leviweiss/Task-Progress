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
            <div v-show="!addingNewTaskMode" class="tasks-list-container__add-task__icon" @click="setAddingNewTaskMode">
                <div class="fas fa-plus-circle"></div>
            </div>
            <div v-show="addingNewTaskMode" class="tasks-list-container__add-task__input">
                <input type="text" class="tasks-list-container__add-task__input__text" v-model="newTaskName" placeholder="enter task name" maxlength="15"
                @keyup.enter="addNewTask({ name: newTaskName, value: newTaskSelectedValue})">
                <select v-model="newTaskSelectedValue" class="tasks-list-container__add-task__input__select-value">
                    <option v-for="n in NUMBER_OF_BULLETS" :key="n">
                        {{ n }}
                    </option>
                </select>
                <div class="tasks-list-container__add-task__input__check" @click="addNewTask({ name: newTaskName, value: newTaskSelectedValue})">
                    <i class="fas fa-check"></i>
                </div>
            </div>
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
            newTaskSelectedValue: this.$store.state.DEFAULT_TASK_VALUE,
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
            'addNewTaskAndChangeModeBack',
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
        addNewTask({ name, value }) {
            if (name && value) {
                this.newTaskName = ""
                this.newTaskSelectedValue = this.$store.state.DEFAULT_TASK_VALUE
                this.addNewTaskAndChangeModeBack({ name, value })
            }
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
                width: 200px;
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
        margin-bottom: 20px;

        &__input {
            &__text {
                font-size: 24px;
                margin-right: 20px;
            }

            &__select-value {
                font-size: 24px;
                margin-right: 20px;
            }

            &__check {
                display: inline-block;
                vertical-align: bottom;
            }
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

.fa-check {
    color: $strong-orange;
    width: 40px;
    height: 30px;
    background: $light-gray;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 8px $strong-orange;
    }        
}

</style>