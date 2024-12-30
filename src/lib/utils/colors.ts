export const highlight = "#f858c5"
export const accent = "#b9e2ff"
export const dark = "#c4bbb5"

export const toRGB = (hex: string) => {
  const bigint = Number.parseInt(hex.slice(1), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return { r, g, b }
}
