<script lang="ts">
  import { seededRandom } from '$lib/utils/mersenneTwister'
  import { onMount } from 'svelte'
  import type { SVGAttributes } from 'svelte/elements'
  import { twMerge } from 'tailwind-merge'

  type Props = {
    seed?: number
    intensity?: number
    width?: number
    height?: number
  } & SVGAttributes<SVGElement>

  let {
    seed = new Date().getTime(),
    intensity = 0.5,
    class: className,
    width: svgWidth = 600,
    height: svgHeight = 600,
    ...svgAttributes
  }: Props = $props()

  let generator = $derived(seededRandom(seed))

  function random(min: number, max: number) {
    return generator.random() * (max - min) + min
  }

  function generateSingleBezierPath() {
    const startX = '0'
    const startY = '0'
    const endX = svgWidth.toString()
    const endY = svgHeight.toString()

    // Control points are randomly chosen within the canvas.
    // Adjust ranges for different shapes.
    const cp1x = random(0, svgWidth / 2 + (svgWidth / 2) * intensity)
    const cp1y = random(0, svgHeight / 2 + (svgHeight / 2) * intensity)
    const cp2x = random(svgWidth / 2 - (svgWidth / 2) * intensity, svgWidth)
    const cp2y = random(svgHeight / 2 - (svgHeight / 2) * intensity, svgHeight)

    // A single cubic Bézier curve command:
    // M startX,startY C cp1x,cp1y cp2x,cp2y endX,endY
    return `M ${startX},${startY} C ${cp1x},${cp1y},${cp2x},${cp2y},${endX},${endY}`
  }

  let path = $derived(generateSingleBezierPath())
</script>

<svg
  id="canvas"
  viewBox={`0 0 ${svgWidth} ${svgHeight}`}
  width={svgWidth}
  height={svgHeight}
  xmlns="http://www.w3.org/2000/svg"
  class={twMerge('bg-transparent stroke-pink-500', className)}
  {...svgAttributes}
>
  <path d={path} fill="none" stroke="inherit" stroke-linecap="round" stroke-linejoin="round" />
</svg>
