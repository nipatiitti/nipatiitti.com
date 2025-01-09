export type Frame = {
  delta: number
  ctx: CanvasRenderingContext2D
  size: { width: number; height: number }
}

export type CanvasElement<T = never> = {
  draw: (f: Frame) => Promise<void> | void
  x: () => number
  y: () => number
}

export type CanvasComponent<T = Record<string, unknown>> = (
  props: T & {
    x: number
    y: number
    r: number
  },
) => CanvasElement<T>
