<template>
    <div class="groups-list">
        <ul v-for="item in groups" :key="item.id">
            <li class="groups-list__item">item.name</li>
        </ul>
        <div class="groups-list__add-group">+++++++++++</div>
    </div>
</template>

<script>
export default {
    name: 'groups-list',
    props: {
        groupsInput: Array
    },
    data() {
        return {
            groups: this.groupsInput
        };
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

.groups-list {
    @include flex-column;
    border: blue solid 2px;
    &__item {
        border: green solid 2px;
    }
    &__add-group {
        border: red solid 2px;
    }
}

</style>