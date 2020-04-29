<template>
    <div id="groups-list" class="groups-list-container">
        <div v-for="item in groupsInfo" :key="item.id">
            <div class="groups-list-container__item">{{ item.name }}</div>
        </div>       
        <div class="groups-list-container__add-group">+</div>
    </div>
</template>

<script>
export default {
    name: 'groups-list',
    props: {
        groupsInfo: Array
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
    border: blue solid 2px;
    padding: 2px;

    &__item {
        border: green solid 4px;
        text-align: center;
        padding: 5px;
        color: white;
        background: black;
    }
    &__add-group {
        border: red solid 4px;
        text-align: center;
        padding: 5px;
        color: white;
        background: black;
    }
}

</style>