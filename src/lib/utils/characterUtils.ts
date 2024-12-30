function rangeToArray(start: number, end: number) {
  const chars = []
  for (let codePoint = start; codePoint <= end; codePoint++) {
    chars.push(String.fromCodePoint(codePoint))
  }
  return chars
}

// Define the Unicode ranges for each block
export const runic = rangeToArray(0x16a0, 0x16ea) // Runic
export const alchemical = rangeToArray(0x1f700, 0x1f773) // Alchemical Symbols

export const characterSets = {
  runic,
  alchemical
}
export type CharacterSet = keyof typeof characterSets

// Combine all arrays into one large array
export const magicCharacters = [...runic, ...alchemical]
