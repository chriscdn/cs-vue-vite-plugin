<template>
    <button type="button" v-bind="$attrs" @click="$emit('click')">
        <slot></slot>
    </button>
</template>
<script>
export default {
    emits: ['click'],
}
</script>
<style lang="less" scoped>
@active-color: #232e72;
@disabled-color: #ddd;
input {
    color: @active-color;
    padding: 2px 15px;
    background: #ffffff;
    border: 1px solid @active-color;
    cursor: pointer;
    border-radius: 12px;
    margin: 2px 6px;

    &:hover {
        border: 1px solid black;
    }
    &[disabled],
    :disabled {
        border: 1px solid @disabled-color;
        color: @disabled-color;
    }
}
</style>
