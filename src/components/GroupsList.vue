<template>
    <div id="groups-list" class="groups-list-container">
        <div class="groups-list-container__header">Groups</div>
        <div v-for="group in groupsInfo" :key="group.id">
            <div class="groups-list-container__item"
            :class="{'groups-list-container__item--active': group.id === chosenGroupId}"
            @click.prevent="chooseGroup(group.id)">
                <div class="groups-list-container__item__name">
                    {{ group.name }}
                </div>
                <div v-show="true" class="groups-list-container__item__remove-icon" @click.stop="removeGroup(group.id)">
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
import AddGroupModal from '@/components/AddGroupModal.vue'

export default {
    name: 'groups-list',
    components: {
        AddGroupModal
    },
    computed: {
        ...mapState({
            groupsInfo: state => state.groupsInfo,
            chosenGroupId: state => state.chosenGroupId,
            openGroupModal: state => state.openGroupModal,
        }),
        ...mapGetters([
            
        ]),
    },    
    methods: {
        ...mapActions([
            'chooseGroup',
            'addGroup',
            'openAddGroupModal',
            'closeAddGroupModal',
            'showGroupRemoveIcon',
            'removeGroup',
        ]),
    },
}
</script>

<style scoped lang="scss">


.groups-list-container {
    @include flex-column;

    &__header {
        font-size: 34px;
        font-weight: bold;
        text-align: center;
        padding: 5px;
        background: black;
        color: $mild-orange;
        margin-bottom: 5px;
        overflow-wrap: break-word;
    }

    &__item {
        position: relative;
        font-size: 24px;
        margin-bottom: 5px;
        text-align: center;
        padding: 5px;
        background: $light-gray;
        cursor: pointer;
        overflow-wrap: break-word;

        &:hover {
            font-weight: bold;
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
        }

        &--active {
            background: $orange-linear-gradient;
        }

        // &__name {

        // }

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
    background: $light-gray;
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