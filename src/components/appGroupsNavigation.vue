<template>
  <div id="groups-navigation" class="groups-navigation-container">
    <div class="groups-navigation-container__close">
      Levi Weiss
    </div>
    <div class="groups-navigation-container__groups-list">
      <div class="groups-navigation-container__groups-list__group" v-for="group in groupsInfo" :key="group.id">
        {{ group.id }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app-groups-navigation',
  computed: {
    ...mapState({
      groupsInfo: state => state.groupsInfo,
      chosenGroupId: state => state.chosenGroupId
    })
  }
}
</script>

<style scoped lang="scss">
.groups-navigation-container {
  @include flex-column;
  background: $orange-linear-gradient;
  border-radius: $small-border-radius;
  border: solid 3px;

  &__groups-list {
    @include flex-row;
    justify-content: space-around;
    border-radius: $small-border-radius;
    border: solid 3px;

    &__group {
      border: solid 3px;
    }
  }
}
</style>
