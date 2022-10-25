import { h, render } from 'vue'
import Message from './Message.vue'
export interface MessageOptionProps {
  type: 'success' | 'warning' | 'error'
  message: string
  timeout?: number
  closeable?: boolean
}

export const createMessage = (options: MessageOptionProps): void => {
  const messageVnode = h(Message, {
    options,
    onClose (data: string) {
      debugger
      console.log(data)
      close()
    }
  })

  const mountNode = document.createElement('div')
  document.body.append(mountNode)
  render(messageVnode, mountNode)

  function close (): void {
    render(null, mountNode)
    document.body.removeChild(mountNode)
  }

  if (options.timeout) {
    setTimeout(() => {
      close()
    }, options.timeout ?? 2000)
  }
}
