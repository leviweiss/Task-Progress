<template>
  <div id="groups-navigation" class="groups-navigation-container">
    <div class="groups-navigation-container__close" @click="closeGroupsNavigation">
      <i class="fa fa-times"></i>
    </div>
    <div class="groups-navigation-container__groups-list">
      <div class="groups-navigation-container__groups-list__group" v-for="group in groupsInfo" :key="group.id"
      :class="{'groups-navigation-container__groups-list__group--active': group.id === chosenGroupId}"
      @click.prevent="chooseGroup(group.id); emitGroupChange()">
        {{ group.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { emitGroupChange, emitGroupRemove } from '../utils/bus'

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
      'closeGroupsNavigation',
      'chooseGroup'
    ]),
    emitGroupChange () {
      emitGroupChange()
    },
    emitGroupRemove () {
      emitGroupRemove()
    }
  }
}
</script>

<style scoped lang="scss">
.groups-navigation-container {
  @include flex-column;
  background: $light-medium-grey;
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
        color: $strong-orange;
        transform: rotate(180deg);
      }
    }
  }

  &__groups-list {
    @include flex-row;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: $small-border-radius;
    font-family: $comic-font-family;
    margin: 1%;

    &__group {
      flex-basis: 28%;
      font-size: $small-medium-font;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      transition: color 0.5s, border-color 0.5s;
      border-radius: 25px;
      border: 2.5px solid;
      padding: 0.5%;
      margin: 1%;
      &:hover {
        border-color: $strong-orange;;
        color: $strong-orange;
      }
      &--active {
        background: $orange-linear-gradient;
      }
    }
  }
}

@media only screen and (max-width: $mobile) {
  .groups-navigation-container {
    &__groups-list__group {
      font-size: $extra-small-font;
    }
  }
}
</style>
