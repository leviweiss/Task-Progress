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
        <div v-show="true" class="groups-navigation-container__groups-list__group__remove-icon" @click.stop="removeGroup(group.id); emitGroupRemove()"
        @mouseover="mouseOverRemoveIcon($event, group.id)" @mouseleave="mouseLeaveRemoveIcon($event, group.id)">
          <i class="fas fa-minus-circle"></i>
        </div>
      </div>
    </div>
    <div class="groups-navigation-container__add-group" @click="openAddGroupModal">
      <div class="fas fa-plus-circle"></div>
      <AddGroupModal v-show="openGroupModal" @close="closeAddGroupModal" @add="addGroup"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { emitGroupChange, emitGroupRemove } from '@/utils/bus'
import AddGroupModal from '@/components/AddGroupModal'

export default {
  name: 'app-groups-navigation',
  components: {
    AddGroupModal
  },
  computed: {
    ...mapState({
      groupsInfo: state => state.groupsInfo,
      chosenGroupId: state => state.chosenGroupId,
      openGroupModal: state => state.openGroupModal
    })
  },
  methods: {
    ...mapActions([
      'closeGroupsNavigation',
      'chooseGroup',
      'removeGroup',
      'openAddGroupModal',
      'closeAddGroupModal',
      'addGroup'
    ]),
    emitGroupChange () {
      emitGroupChange()
    },
    emitGroupRemove () {
      emitGroupRemove()
    },
    mouseOverRemoveIcon (event, groupId) {
      var element = document.getElementsByClassName('groups-navigation-container__groups-list__group')[groupId - 1]
      element.style.color = 'black'
      element.style.borderColor = 'black'
    },
    mouseLeaveRemoveIcon (event, groupId) {
      var element = document.getElementsByClassName('groups-navigation-container__groups-list__group')[groupId - 1]
      element.style.color = ''
      element.style.borderColor = ''
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
    margin-left: 1%;
    margin-top: 1%;
    margin-bottom: 0.5%;
    width: 4%;
    text-align: center;

    .fa-times {
      width: 100%;
      height: auto;
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

    &__group {
      position: relative;
      flex-basis: 28%;
      font-size: $small-medium-font;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      transition: color 0.5s, border-color 0.5s;
      border-radius: $small-border-radius;
      border: 2.5px solid;
      padding: 0.5%;
      margin: 1%;
      &:hover {
        border-color: $strong-orange;
        color: $strong-orange;
      }
      &--active {
        background: $orange-linear-gradient;
      }

      &__remove-icon {
        width: 7%;
        position: absolute;
        top: -50%;
        right: -4%;

        .fa-minus-circle {
          background: $light-medium-grey;
          width: 100%;
          height: auto;
          border-radius: 50%;
          color: red;
          &:hover {
            box-shadow: 0 0 10px red;
          }
        }
      }
    }
  }

  &__add-group {
    width: 4.5%;
    align-self: center;
    margin: 0.3%;

    .fa-plus-circle {
      width: 100%;
      height: auto;
      cursor: pointer;
      border-radius: 50%;
      &:hover {
        box-shadow: 0 0 10px 3px $strong-orange;
        color: $strong-orange;
      }
    }
  }
}

@media only screen and (max-width: $mobile) {
  .groups-navigation-container {
    &__groups-list__group {
      font-size: $extra-small-font;

      &__remove-icon {
        width: 7.5%;
        top: -55%;
        right: -5%;
      }
    }

  }
}
</style>
