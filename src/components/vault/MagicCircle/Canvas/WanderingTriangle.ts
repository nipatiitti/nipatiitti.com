import { accent } from "$lib/utils/colors"
import type { CanvasComponent } from "./interface"

export const WanderingTriangle: CanvasComponent = ({ x: initialX, y: initialY, r }) => {
  let x = initialX
  let y = initialY
  const speed = 10

  let direction = Math.random() * Math.PI * 2
  const rotationDir = Math.random() > 0.5 ? 1 : -1
  let rotation = Math.random() * Math.PI * 2

  const circle = Math.random() > 0.8

  const semiOppositeDirection = () => {
    direction += Math.PI + (Math.random() * Math.PI) / 2
  }

  return {
    draw: ({ delta: dt, ctx, size }) => {
      const dx = Math.cos(direction) * speed * (dt / 1000)
      const dy = Math.sin(direction) * speed * (dt / 1000)

      rotation += (dt / 10000) * rotationDir

      x += dx
      y += dy

      const A = {
        x: x + r * Math.cos(rotation),
        y: y + r * Math.sin(rotation),
      }

      const B = {
        x: x + r * Math.cos(rotation + (2 * Math.PI) / 3),
        y: y + r * Math.sin(rotation + (2 * Math.PI) / 3),
      }

      const C = {
        x: x + r * Math.cos(rotation + (4 * Math.PI) / 3),
        y: y + r * Math.sin(rotation + (4 * Math.PI) / 3),
      }

      // If any of the points are outside the canvas, change direction
      for (const point of [A, B, C]) {
        if (point.x > size.width || point.x < 0 || point.y > size.height || point.y < 0) {
          semiOppositeDirection()
          break
        }
      }

      ctx.beginPath()
      ctx.moveTo(A.x, A.y)
      ctx.lineTo(B.x, B.y)
      ctx.lineTo(C.x, C.y)
      ctx.lineTo(A.x, A.y)
      ctx.strokeStyle = accent
      ctx.stroke()
    },
    x: () => x,
    y: () => y,
  }
}
