<template>
    <div class="form-item-com-wrap">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">{{ props.label }}</label>
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
export interface ruleProps {
    type?: 'required' | 'number' | 'email' | 'reg'
    message: string
}

export interface FormItemProps {
    label: string;
    labelWidth?: string;
    rules?: ruleProps[]
}

const props = defineProps<FormItemProps>()

</script>
