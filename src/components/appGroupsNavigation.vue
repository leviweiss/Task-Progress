<template>
  <div id="groups-navigation" class="groups-navigation-container">
    <div class="groups-navigation-container__close" @click="closeGroupsNavigation">
      <i class="fa fa-times"></i>
    </div>
    <div class="groups-navigation-container__groups-list">
      <div class="groups-navigation-container__groups-list__group" v-for="group in groupsInfo" :key="group.id">
        {{ group.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app-groups-navigation',
  computed: {
    ...mapState({
      groupsInfo: state => state.groupsInfo,
      chosenGroupId: state => state.chosenGroupId
    })
  },
  methods: {
    ...mapActions([
      'closeGroupsNavigation'
    ])
  }
}
</script>

<style scoped lang="scss">
.groups-navigation-container {
  @include flex-column;
  background: $orange-linear-gradient;
  border-radius: $small-border-radius;
  border: solid 3px;

  &__close {
    margin: 1%;
    width: 5%;
    text-align: center;

    .fa-times {
      width: 100%;
      height: 30px;
      cursor: pointer;
      transition: color 1s, transform 1s;
      &:hover {
        color: $medium-grey;
        transform: rotate(180deg);
      }
    }
  }

  &__groups-list {
    @include flex-row;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: $small-border-radius;
    border: solid 3px;

    &__group {
      border: solid 3px;
      flex-basis: 30%;
      text-align: center;
    }
  }
}
</style>
