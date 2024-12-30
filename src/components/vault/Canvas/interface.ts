export type Frame = {
  time: number
  ctx: CanvasRenderingContext2D
  size: { width: number; height: number }
}

export type CanvasElement<T = never> = {
  draw: (f: Frame) => Promise<void> | void
  x: () => number
  y: () => number
}

export type CanvasComponent<
  T = {
    x: number
    y: number
    r: number
  },
> = (props: T) => CanvasElement<T>
