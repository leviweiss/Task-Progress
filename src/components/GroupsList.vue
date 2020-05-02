<template>
    <div id="groups-list" class="groups-list-container">
        <div class="groups-list-container__header">Sections</div>
        <div v-for="group in groupsInfo" :key="group.id">
            <div href="#" 
                class="groups-list-container__item" 
                :class="{'groups-list-container__item__active': group.id === chosenGroupId}" @click.prevent="chooseGroup(group.id)">
                {{ group.name }}
            </div>            
        </div>       
        <div class="groups-list-container__add-group">+</div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    name: 'groups-list',
    computed: {
        ...mapState({
            groupsInfo: state => state.groupsInfo,
            chosenGroupId: state => state.chosenGroupId,
        }),
        ...mapGetters([
            
        ]),
    },    
    methods: {
        ...mapActions([
            'chooseGroup'
        ]),
    },
}
</script>

<style scoped lang="scss">
@mixin flex-row {
    display: flex;
    flex-direction: row;
}

@mixin flex-column {
    display: flex;
    flex-direction: column;
}

.groups-list-container {
    @include flex-column;

    &__header {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        padding: 5px;
        background: rgb(0, 0, 0);
        color: white;
        margin-bottom: 1px;
    }

    &__item {
        font-size: 24px;
        margin-bottom: 1px;
        text-align: center;
        padding: 5px;
        background: rgba(0, 0, 0, 0.781);
        color: white;
        cursor: pointer;
        &:hover {
            background-color: gray;
        }

        &__active {
            background-color: gray;
        }
    }

    &__add-group {
        font-size: 24px;
        text-align: center;
        padding: 5px;
        background: rgba(0, 0, 0, 0.781);
        color: white;
        margin-bottom: 1px;
        &:hover {
            background-color: gray;
        }
    }
}

</style>