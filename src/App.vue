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
                    name: 'Frontend',
                    tasks: [
                        {
                            id: 1,
                            name: 'Vue',
                            value: 7
                        },
                        {
                            id: 2,
                            name: 'General',
                            value: 3
                        },                 
                    ],
                },
                {
                    id: 2,
                    name: 'Workout',
                    tasks: [
                        {
                            id: 1,
                            name: 'Abs',
                            value: 4
                        },
                        {
                            id: 2,
                            name: 'Running',
                            value: 5
                        },
                        {
                            id: 3,
                            name: 'Hands',
                            value: 7
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
