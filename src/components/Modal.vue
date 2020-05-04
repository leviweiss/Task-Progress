<template>
    <div id="app" class="modal">
        <div class="modal__mask">
            <div class="modal__wrapper" @click="wrapperClick">
                <div class="modal__container">
                    <i class="modal__container__close-icon fa fa-times" @click.prevent="$emit('close')"/>
                    <div class="modal-header">
                        <slot name="header">
                            default header
                        </slot>
                    </div>
                    <div class="modal-body">
                        <slot name="body">
                            default body
                        </slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            default footer
                            <button class="modal-default-button" @click="$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    methods: {
        wrapperClick() {
            this.$emit('close');
        },
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

.modal {
    &__mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        display: table;
    }

    &__wrapper {

    }

    &__container {
        
    }

    &__close-icon {
        cursor: pointer;
    }

}

</style>
