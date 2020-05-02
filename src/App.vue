<template>
    <div id="app" class="app-container">
        <main-header></main-header>
        <div class="app-container__body">
            <groups-list class="app-container__body__groups-list" 
                :groupsInfo="groupsInfo" :chosenGroupId="chosenGroupId"
                @choose:group="chooseGroup">
            </groups-list>
            <tasks-list class="app-container__body__tasks-list"></tasks-list>
        </div>
    </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import GroupsList from '@/components/GroupsList.vue';
import TasksList from '@/components/TasksList.vue';
import { mapState, mapActions } from 'vuex'

export default {
    name: 'App',
    components: {
        MainHeader, TasksList, GroupsList
    },
    methods: {
        ...mapActions([
            'chooseGroup',
        ]),
    },
    computed: {
        ...mapState({
            groupsInfo: state => state.groupsInfo,
            chosenGroupId: state => state.chosenGroupId,
        })
    }
}
</script>

<style lang="scss">
@mixin flex-row {
    display: flex;
    flex-direction: row;
}

@mixin flex-column {
    display: flex;
    flex-direction: column;
}

.app-container {
    @include flex-column;

    &__body {
        @include flex-row;
        padding-top: 10px;

        &__groups-list {
            min-width: 100px;
            max-width: 200px;
            flex: 12%;
            overflow-wrap: break-word;
        }

        &__tasks-list {
            flex: 88%;
        }
    }
}

</style>
