<template>
  <div id="app" class="app-container">
    <div class="app-container__elements">
      <main-header></main-header>
      <div class="app-container__elements__body">
        <groups-list class="app-container__elements__body__groups-list" @open-modal="openAddGroupModal = true"></groups-list>
        <tasks-list class="app-container__elements__body__tasks-list"></tasks-list>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import GroupsList from '@/components/GroupsList.vue'
import TasksList from '@/components/TasksList.vue'

export default {
  name: 'App',
  components: {
    MainHeader, TasksList, GroupsList
  }
}
</script>

<style lang="scss">
.app-container {
  &__elements {
    @include flex-column;

    &__body {
      @include flex-row;
      padding-top: 10px;

      &__groups-list {
        min-width: 100px;
        max-width: 200px;
        flex: 12%;
      }

      &__tasks-list {
        flex: 88%;
      }
    }
  }

  &__add-group-modal {
    position: absolute;
  }
}
</style>
