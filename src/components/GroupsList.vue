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
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        padding: 5px;
        background: #f6f6f6;
        margin-bottom: 1px;
    }

    &__item {
        font-size: 24px;
        margin-bottom: 1px;
        text-align: center;
        padding: 5px;
        background: #f6f6f6;
        cursor: pointer;
        &:hover {
            font-weight: bold;
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
        }

        &__active {
            background: linear-gradient(297.24deg,#fbab7e 0%,#f7ce68 100%);
        }
    }

    &__add-group {
        font-size: 24px;
        text-align: center;
        padding: 5px;
        background: #f6f6f6;
        margin-bottom: 1px;
        &:hover {
            font-weight: bold;
            border: blue 3px;
        }
    }
}

</style>