import { accent } from "$lib/utils/colors"
import type { CanvasComponent } from "./interface"

export const TurningStar: CanvasComponent<{ points?: number }> = ({
  x: initialX,
  y: initialY,
  r,
  points: defaultPoints,
}) => {
  const x = initialX
  const y = initialY
  const speed = 0.0002

  const rotationDir = Math.random() > 0.5 ? 1 : -1
  let rotation = Math.random() * Math.PI * 2

  // We will draw the star with Equilateral triangles, so we need points divisible by 3
  const points = defaultPoints
    ? defaultPoints % 3 === 0
      ? defaultPoints
      : defaultPoints + (3 - (defaultPoints % 3))
    : 6
  const nOfTriangles = points / 3
  const angle = (Math.PI * 2) / nOfTriangles

  console.log({ points, nOfTriangles, angle })

  const drawStar = (ctx: CanvasRenderingContext2D, r: number, points: number) => {
    for (let i = 0; i < nOfTriangles; i++) {
      drawTriangle(ctx, i)
    }
  }

  const drawTriangle = (ctx: CanvasRenderingContext2D, index: number) => {
    const iRotation = rotation + angle * index

    const A = {
      x: x + r * Math.cos(iRotation),
      y: y + r * Math.sin(iRotation),
    }

    const B = {
      x: x + r * Math.cos(iRotation + (2 * Math.PI) / 3),
      y: y + r * Math.sin(iRotation + (2 * Math.PI) / 3),
    }

    const C = {
      x: x + r * Math.cos(iRotation + (4 * Math.PI) / 3),
      y: y + r * Math.sin(iRotation + (4 * Math.PI) / 3),
    }

    ctx.beginPath()

    ctx.moveTo(A.x, A.y)
    ctx.lineTo(B.x, B.y)
    ctx.lineTo(C.x, C.y)
    ctx.lineTo(A.x, A.y)
    // Stroke style
    ctx.strokeStyle = accent
    ctx.lineWidth = 2

    ctx.stroke()
  }

  return {
    draw: ({ delta: dt, ctx, size }) => {
      rotation += dt * speed * rotationDir

      drawStar(ctx, r, points ?? 5)
    },
    x: () => x,
    y: () => y,
  }
}
