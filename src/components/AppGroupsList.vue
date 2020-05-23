<template>
  <div id="app-groups-list" class="groups-list-container">
    <div class="groups-list-container__header">Groups</div>
    <div v-for="group in groupsInfo" :key="group.id">
      <div class="groups-list-container__item"
      :class="{'groups-list-container__item--active': group.id === chosenGroupId}"
      @click.prevent="chooseGroup(group.id); emitGroupChange()">
        <div class="groups-list-container__item__name">
          {{ group.name }}
        </div>
        <div v-show="true" class="groups-list-container__item__remove-icon" @click.stop="removeGroup(group.id); emitGroupRemove()">
          <i class="fas fa-minus-circle"></i>
        </div>
      </div>
    </div>
    <div class="groups-list-container__add-group" @click="openAddGroupModal">
      <div class="fas fa-plus-circle"></div>
      <AddGroupModal v-show="openGroupModal" @close="closeAddGroupModal" @add="addGroup"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import AddGroupModal from '@/components/AddGroupModal'
import { bus } from '../main'

export default {
  name: 'app-groups-list',
  components: {
    AddGroupModal
  },
  computed: {
    ...mapState({
      groupsInfo: state => state.groupsInfo,
      chosenGroupId: state => state.chosenGroupId,
      openGroupModal: state => state.openGroupModal,
      toShowGroupsNavigation: state => state.toShowGroupsNavigation
    }),
    ...mapGetters([

    ])
  },
  methods: {
    ...mapActions([
      'chooseGroup',
      'addGroup',
      'openAddGroupModal',
      'closeAddGroupModal',
      'showGroupRemoveIcon',
      'removeGroup'
    ]),
    emitGroupChange () {
      bus.$emit('groupChange')
    },
    emitGroupRemove () {
      bus.$emit('groupRemove')
    }
  }
}
</script>

<style scoped lang="scss">

.groups-list-container {
  @include flex-column;

  &__header {
    font-size: $large-font;
    font-weight: bold;
    text-align: center;
    padding: 5px;
    background: black;
    color: $mild-orange;
    margin-bottom: 5px;
    overflow-wrap: break-word;
    border-radius: $small-border-radius;
  }

  &__item {
    position: relative;
    font-size: $medium-large-font;
    margin-bottom: 5px;
    text-align: center;
    padding: 5px;
    background: $light-grey;
    cursor: pointer;
    overflow-wrap: break-word;
    border-radius: $small-border-radius;

    &:hover {
      font-weight: bold;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    }

    &--active {
      background: $orange-linear-gradient;
    }

    &__remove-icon {
      position: absolute;
      top: -12px;
      right: -6px;
    }
  }

  &__add-group {
    align-self: center;
  }
}

.fa-plus-circle {
  width: 36px;
  height: 36px;
  cursor: pointer;
  padding: 2px;
  background: $light-grey;
  border-radius: 50%;
  &:hover {
    box-shadow: 0 0 10px $basic-orange;
  }
}

.fa-minus-circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: red;
  &:hover {
    box-shadow: 0 0 10px $basic-orange;
  }
}
</style>
