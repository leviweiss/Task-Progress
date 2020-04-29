<template>
    <div id="groups-list" class="groups-list-container">
        <div class="groups-list-container__header">Sections</div>
        <div v-for="item in groupsInfo" :key="item.id">
            <div href="#" class="groups-list-container__item" :class="{'groups-list-container__item__active': item.id === chosenGroupId}">
                {{ item.name }}
            </div>            
        </div>       
        <div class="groups-list-container__add-group">+</div>
    </div>
</template>

<script>
export default {
    name: 'groups-list',
    props: {
        groupsInfo: Array,
        chosenGroupId: Number,
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
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        padding: 5px;
        margin: 1px;
        background: rgb(0, 0, 0);
        color: white;
    }

    &__item {
        font-size: 18px;
        margin: 1px;
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
        font-size: 18px;
        margin: 1px;
        text-align: center;
        padding: 5px;
        background: rgba(0, 0, 0, 0.781);
        color: white;
        &:hover {
            background-color: gray;
        }
    }
}

</style>