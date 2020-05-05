<template>
    <transition id="modal">
        <div class="modal-mask">
            <div class="modal-wrapper" @click.stop="wrapperClick">
                <div class="modal-container" @click.stop>
                    <div @click.prevent="closeElementClick">
                        <i class="modal-container-close-icon fa fa-times"/>
                    </div>
                    <div class="modal-container-header">
                        <slot name="header">
                            default header
                        </slot>
                    </div>
                    <div class="modal-container-body">
                        <slot name="body">
                            default body
                        </slot>
                    </div>
                    <div class="modal-container-footer">
                        <slot name="footer">
                            default footer
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
    methods: {
        wrapperClick() {
            this.$emit('close');
        },
        closeElementClick() {
            this.$emit('close');
        }
    }    
}
</script>

<style lang="scss">
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.664);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;     
}

.modal-container-close-icon {
    cursor: pointer;
}

.modal-container-header h3{
    margin-top: 0;
    color: #42b983;
}

.modal-container-body {
    margin: 20px 0;    
}

.modal-container-footer {
    float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
