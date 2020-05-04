<template>
    <div id="groups-list" class="groups-list-container">
        <div class="groups-list-container__header">Groups</div>
        <div v-for="group in groupsInfo" :key="group.id">
            <div href="#" 
                class="groups-list-container__item" 
                :class="{'groups-list-container__item__active': group.id === chosenGroupId}"
                @click.prevent="chooseGroup(group.id)">
                {{ group.name }}
            </div>            
        </div>
        <div href="#" class="groups-list-container__add-group" @click.prevent="addGroup('newGroup')">
            <div class="fas fa-plus-circle"></div>
        </div>
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
            'chooseGroup',
            'addGroup',
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
    .fa-plus-circle {
        width: 40px;
        height: 40px;
        cursor: pointer;
        padding: 2px;
        background: #f6f6f6;
        border-radius: 50%;
        &:hover {
            box-shadow: 0 0 10px #ff782a;
        }        
    }

    @include flex-column;

    &__header {
        font-size: 34px;
        font-weight: bold;
        text-align: center;
        padding: 5px;
        background: black;
        color: #fbab7e;
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
        align-self: center;
    }
}

</style>