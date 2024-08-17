export const MAX_LENGTH_TEXT = 40

export const textShrink = (text: string, minTextLength?: number) => {
  const textLength = minTextLength ?? MAX_LENGTH_TEXT
  const addEllipsis = text.length >= textLength ? "..." : ''
  return `${text.slice(0, textLength)} ` + addEllipsis
}