<template>
  <div id="app" class="app-container">
    <div class="app-container__elements">
      <app-header></app-header>
      <div class="app-container__elements__body">
        <app-groups-list class="app-container__elements__body__groups-list" @open-modal="openAddGroupModal = true"></app-groups-list>
        <app-tasks-list class="app-container__elements__body__tasks-list"></app-tasks-list>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppGroupsList from '@/components/AppGroupsList.vue'
import AppTasksList from '@/components/AppTasksList.vue'

export default {
  name: 'App',
  components: {
    AppHeader, AppTasksList, AppGroupsList
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
