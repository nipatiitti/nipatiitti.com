import { accent, highlight } from "$lib/utils/colors"
import type { CanvasComponent } from "./interface"

export const WanderingCircle: CanvasComponent = ({ x: initialX, y: initialY, r }) => {
  let x = initialX
  let y = initialY
  const speed = 10

  let direction = Math.random() * Math.PI * 2

  const triangle = Math.random() > 0.8

  let triangleRotation = Math.random() * Math.PI * 2
  const rotationDir = Math.random() > 0.5 ? 1 : -1

  const semiOppositeDirection = () => {
    direction += Math.PI + (Math.random() * Math.PI) / 2
  }

  return {
    draw: ({ delta: dt, ctx, size }) => {
      // Move the circle
      let dx = Math.cos(direction) * speed * (dt / 1000)
      let dy = Math.sin(direction) * speed * (dt / 1000)

      if (triangle) {
        triangleRotation += (dt / 10000) * rotationDir
      }

      if (x + dx + r > size.width || x + dx - r < 0 || y + dy + r > size.height || y + dy - r < 0) {
        semiOppositeDirection()

        dx = Math.cos(direction) * speed * (dt / 1000)
        dy = Math.sin(direction) * speed * (dt / 1000)
      }

      x += dx
      y += dy

      // Draw a circle stroke with a dark color
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.strokeStyle = accent
      ctx.stroke()

      if (triangle) {
        const A = {
          x: x + r * Math.cos(triangleRotation),
          y: y + r * Math.sin(triangleRotation),
        }

        const B = {
          x: x + r * Math.cos(triangleRotation + (2 * Math.PI) / 3),
          y: y + r * Math.sin(triangleRotation + (2 * Math.PI) / 3),
        }

        const C = {
          x: x + r * Math.cos(triangleRotation + (4 * Math.PI) / 3),
          y: y + r * Math.sin(triangleRotation + (4 * Math.PI) / 3),
        }

        ctx.beginPath()
        ctx.moveTo(A.x, A.y)
        ctx.lineTo(B.x, B.y)
        ctx.lineTo(C.x, C.y)
        ctx.lineTo(A.x, A.y)
        ctx.strokeStyle = highlight
        ctx.stroke()
      }
    },
    x: () => x,
    y: () => y,
  }
}
