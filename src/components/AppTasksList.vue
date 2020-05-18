<template>
  <div id="tasks-list" class="tasks-list-container">
    <div class="tasks-list-container__tasks">
      <div class="tasks-list-container__tasks__task" v-for="task in tasks" :key="task.id">
        <div class="tasks-list-container__tasks__task__name">
          {{ task.name }}
        </div>
        <div class="tasks-list-container__tasks__task__bullets" @mouseleave="deactivateHovering(task.id)">
          <div v-for="index in NUMBER_OF_BULLETS" :key="index" class="tasks-list-container__tasks__task__bullets__square"
          @mouseover="activateHovering({ taskId: task.id, index })"
          @click="bulletClick({ taskId: task.id, index })">
            <div :class="{'tasks-list-container__tasks__task__bullets__square--full': squareNeedToBeFull({ taskId: task.id, index, taskValue: task.value })}"/>
          </div>
        </div>
        <div class="tasks-list-container__tasks__task__arrows">
          <div class="tasks-list-container__tasks__task__arrows__up" @click="increaseScore(task.id)">
            <i class="fas fa-arrow-up"></i>
          </div>
          <div class="tasks-list-container__tasks__task__arrows__down" @click="decreaseScore(task.id)">
            <i class="fas fa-arrow-down"></i>
          </div>
        </div>
        <label class="tasks-list-container__tasks__task__value">
          {{ task.value }}
        </label>
        <div class="tasks-list-container__tasks__task__trash" @click="removeTask(task.id)">
          <i class="fa fa-trash-alt"></i>
        </div>
      </div>
    </div>
    <div class="tasks-list-container__add-task" @keyup.esc="doneAddingNewTask">
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
import { bus } from '../main'

export default {
  name: 'app-tasks-list',
  mounted () {
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.changeNewTaskNameAndValueToDefault()
        this.doneAddingNewTask()
      }
    })
  },
  created () {
    bus.$on('groupChange', () => {
      this.changeNewTaskNameAndValueToDefault()
      this.doneAddingNewTask()
    })
    bus.$on('groupRemove', () => {
      this.changeNewTaskNameAndValueToDefault()
      this.doneAddingNewTask()
    })
  },
  data () {
    return {
      newTaskName: '',
      newTaskSelectedValue: this.$store.state.DEFAULT_TASK_VALUE
    }
  },
  computed: {
    ...mapState({
      NUMBER_OF_BULLETS: state => state.NUMBER_OF_BULLETS,
      addingNewTaskMode: state => state.addingNewTaskMode
    }),
    ...mapGetters([
      'tasks'
    ])
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
      'doneAddingNewTask',
      'removeTask'
    ]),
    squareNeedToBeFull ({ taskId, index, taskValue }) {
      var task = this.tasks.find(t => t.id === taskId)
      if (task.hoveringStatus === true) {
        if (index <= task.hoveringIndex) {
          return true
        }
      } else {
        if (index <= taskValue) {
          return true
        }
      }
      return false
    },
    addNewTask ({ name, value }) {
      if (name && value) {
        this.changeNewTaskNameAndValueToDefault()
        this.addNewTaskAndChangeModeBack({ name, value })
      }
    },
    changeNewTaskNameAndValueToDefault () {
      this.newTaskName = ''
      this.newTaskSelectedValue = this.$store.state.DEFAULT_TASK_VALUE
    }
  }
}
</script>

<style scoped lang="scss">
.tasks-list-container {
  @include flex-column;
  align-items: center;

  &__tasks {
    width: 100%;
    height: 100%;

    &__task {
      @include flex-row;
      margin-bottom: 1%;
      justify-content: center;

      &__name {
        font-size: $medium-font;
        margin-left: 1%;
        margin-right: 3%;
        text-align: center;
        padding: 0.5%;
        background: $light-gray;
        width: 15%;
        border-radius: $small-border-radius;
      }

      &__bullets {
        @include flex-row;
        align-items: center;
        margin-right: 3%;
        border: solid 3px;
        flex-basis: 30%;

        &__square {
          width: 10%;
          height: 50%;
          margin-right: 1%;
          border: 4px solid;
          border-radius: $small-border-radius;

          &--full {
            height: 100%;
            background: $orange-linear-gradient;
          }
        }
      }

      &__arrows {
        @include flex-row;
        align-items: center;
        margin-right: 1%;
        width: 10%;

        &__up {
            margin-right: 0.5%;
            width: 100%;
            height: 100%;

          .fa-arrow-up {
            width: 50%;
            height: 100%;
            color: green;
            background: $light-gray;
            cursor: pointer;
            border-radius: $small-border-radius;
            &:hover {
              box-shadow: 0 0 8px green;
            }
          }
        }

        &__down {
            margin-right: 0.5%;
            width: 100%;
            height: 100%;

          .fa-arrow-down {
            width: 50%;
            height: 100%;
            color: red;
            background: $light-gray;
            cursor: pointer;
            border-radius: $small-border-radius;
            &:hover {
              box-shadow: 0 0 8px red;
            }
          }
        }
      }

      &__value {
        font-size: $medium-font;
        text-align: center;
        padding: 0.3%;
        background: $light-gray;
        flex-basis: 5%;
        margin-right: 6%;
        border-radius: $small-border-radius;
      }

      &__trash {
        text-align: center;
        cursor: pointer;
        opacity: 0.3;
        &:hover {
          opacity: 1;
        }
      }
    }
  }

  &__add-task {
    margin-bottom: 1%;
    @include flex-row;

    &__input {
      border: solid 3px;

      &__text {
        flex: 1;
        font-size: $medium-font;
        margin-right: 2%;
        background-color: $light-gray;
        border-radius: $small-border-radius;
      }

      &__select-value {
        flex: 1;
        font-size: $medium-font;
        margin-right: 2%;
        border-radius: $small-border-radius;
        background-color: $light-gray;
      }

      &__check {
        flex: 10;
        display: inline-block;
        vertical-align: bottom;
      }
    }
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
  border-radius: $small-border-radius;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 8px $strong-orange;
  }
}

.fa-trash-alt {
  width: 36px;
  height: 30px;
  vertical-align: -18px;
  color: rgb(255, 0, 0);
}
</style>
