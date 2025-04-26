<script lang="ts">
  import { accent, highlight, toRGB } from '$lib/utils/colors'
  import { onMount } from 'svelte'
  import { TurningStar } from './TurningStar'
  import { WanderingCircle } from './WanderingCircle'
  import { WanderingTriangle } from './WanderingTriangle'
  import type { CanvasComponent, CanvasElement } from './interface'

  let width = $state(500)
  let height = $state(500)
  let side = $derived(Math.min(width, height))

  let canvas = $state<HTMLCanvasElement | null>(null)
  let ctx = $derived(canvas?.getContext('2d'))

  let children = $state<CanvasElement[]>([])

  let time = 0

  const color = toRGB(accent)
  const animate = (ms: number) => {
    if (!ctx || !canvas) return

    ctx.clearRect(0, 0, side, side)

    for (let i = 0; i < children.length; i++) {
      const child = children[i]

      child.draw({
        ctx,
        delta: ms - time,
        size: {
          width: side,
          height: side
        }
      })

      time = ms

      // Draw a line to every other element
      //   for (let j = i + 1; j < children.length; j += 3) {
      //     const other = children[j]

      //     const dx = child.x() - other.x()
      //     const dy = child.y() - other.y()
      //     const distance = Math.sqrt(dx * dx + dy * dy)

      //     ctx.beginPath()
      //     ctx.moveTo(child.x(), child.y())
      //     ctx.lineTo(other.x(), other.y())
      //     ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${1 - distance / 1000})`
      //     ctx.stroke()
      //   }
    }

    requestAnimationFrame(animate)
  }

  $effect(() => {
    if (!canvas) return

    const r = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(r)
  })

  const randomPos = () => {
    return {
      x: Math.random() * width,
      y: Math.random() * height
    }
  }

  const randomBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const createELement = (C: CanvasComponent) => {
    let radius = randomBetween(side / 10, side / 8)

    if (Math.random() > 0.8) {
      radius = randomBetween(side / 5, side / 3)
    }

    let { x, y } = randomPos()

    // Make sure the circle is fully inside the canvas
    x = Math.max(radius, Math.min(side - radius, x))
    y = Math.max(radius, Math.min(side - radius, y))

    return C({ x, y, r: radius })
  }

  $effect(() => {
    children = [
      // ...Array.from({ length: 6 }, () => createELement(WanderingCircle)),
      // ...Array.from({ length: 6 }, () => createELement(WanderingTriangle)),
      TurningStar({ x: side / 2, y: side / 2, r: side / 2, points: 12 })
    ]
  })
</script>

<div
  class="canvas-container flex h-full w-full items-center justify-center"
  bind:clientWidth={width}
  bind:clientHeight={height}
>
  <canvas class="canvas" width={side} height={side} bind:this={canvas}></canvas>
</div>
