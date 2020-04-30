<template>
    <div id="app" class="app-container">
        <main-header></main-header>
        <div class="app-container__body">
            <groups-list class="app-container__body__groups-list" 
                :groupsInfo="groupsInfo" :chosenGroupId="chosenGroupId"
                @choose:group="chooseGroup">
            </groups-list>
            <tasks-list class="app-container__body__tasks-list" :tasks="tasks"></tasks-list>
        </div>
    </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import GroupsList from '@/components/GroupsList.vue';
import TasksList from '@/components/TasksList.vue';

export default {
    name: 'App',
    components: {
        MainHeader, TasksList, GroupsList
    }, 
    data() {
        return {
            groupsInfo: [
                {
                    id: 1,
                    name: 'First',
                    tasks: [
                        {
                            id: 1,
                            name: 'First1',
                            value: 2
                        },
                        {
                            id: 2,
                            name: 'Second1',
                            value: 3
                        },                 
                    ],
                },
                {
                    id: 2,
                    name: 'Second',
                    tasks: [
                        {
                            id: 1,
                            name: 'First2',
                            value: 4
                        },
                        {
                            id: 2,
                            name: 'Second2',
                            value: 5
                        },                 
                    ],                    
                },                
            ],
            chosenGroupId: 1,
        };
    },
    methods: {
        chooseGroup(groupId) {
            this.chosenGroupId = groupId;
        }
    },
    computed: {
        tasks() {
            return this.groupsInfo.find(g => g.id === this.chosenGroupId).tasks;
        }
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
