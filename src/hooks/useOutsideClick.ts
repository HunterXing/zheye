/**
 * @description: 鼠标是否点击在某元素外面
 * @return {*}
 */

import { onMounted, onUnmounted, ref, Ref } from 'vue'

export const useOutsideClick = (elementRef: Ref<HTMLElement | null>): Ref<boolean> => {
  const isClickOutside = ref(false)
  const hander = (e: MouseEvent): void => {
    if (elementRef.value != null) {
      isClickOutside.value = !elementRef.value.contains(e.target as HTMLElement)
    } else {
      isClickOutside.value = false
    }
  }

  // lifecircle
  onMounted(() => {
    document.addEventListener('click', hander)
  })

  onUnmounted(() => {
    document.removeEventListener('click', hander)
  })

  return isClickOutside
}
