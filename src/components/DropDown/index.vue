<template>
    <div class="dropdown-com-wrap" ref="dropdownRef">
        <div class="dropdown">
            <button
                class="btn btn-outline-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click.prevent="handleOpen"
            >
                {{ title }}
            </button>
            <ul
                class="dropdown-menu"
                v-if="isOpen && !isClickOutside"
            >
               <slot></slot>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true,
      default: '下拉菜单'
    }
  },
  setup (props, ctx) {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const isClickOutside = useOutsideClick(dropdownRef)

    // mehtods
    /**
     * @description: 切换dropdown打开关闭
     */

    const handleOpen = () => {
      isOpen.value = !isOpen.value
    }

    // const hander = (e: MouseEvent) => {
    //   if (dropdownRef.value) {
    //     if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
    //       isOpen.value = false
    //     }
    //   }
    // }

    // // lifecircle
    // onMounted(() => {
    //   document.addEventListener('click', hander)
    // })

    // onUnmounted(() => {
    //   document.removeEventListener('click', hander)
    // })

    return {
      handleOpen,
      isOpen,
      dropdownRef,
      isClickOutside
    }
  }
})
</script>
<style lang="scss" scoped>
.dropdown-com-wrap {
    display: inline;

    .dropdown-menu {
        display: block;
    }
}
</style>
