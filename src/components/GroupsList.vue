<template>
    <div id="groups-list" class="groups-list-container">
        <div class="groups-list-container__header">Groups</div>
        <div v-for="group in groupsInfo" :key="group.id">
            <div class="groups-list-container__item" 
                :class="{'groups-list-container__item__active': group.id === chosenGroupId}"
                @click.prevent="chooseGroup(group.id)">
                {{ group.name }}
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
        margin-bottom: 1px;
        overflow-wrap: break-word;
    }

    &__item {
        font-size: 24px;
        margin-bottom: 1px;
        text-align: center;
        padding: 5px;
        background: $light-gray;
        cursor: pointer;
        overflow-wrap: break-word;

        &:hover {
            font-weight: bold;
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
        }

        &__active {
            background: $orange-linear-gradient;
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
</style>