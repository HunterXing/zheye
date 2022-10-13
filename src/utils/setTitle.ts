export function setTitle (title: string, setBaseTitle = false): void {
  document.title = setBaseTitle ? `vue3-ts-vite-pinia-${title}` : title
}
