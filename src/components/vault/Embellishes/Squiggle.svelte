<script lang="ts">
  import { seededRandom } from '$lib/utils/mersenneTwister'
  import type { SVGAttributes } from 'svelte/elements'
  import { twMerge } from 'tailwind-merge'

  type Position = 'top' | 'middle' | 'bottom'

  type Props = {
    seed?: number
    intensity?: number
    minIntensity?: number
    w?: number
    h?: number
    start?: Position
    end?: Position
    flipX?: boolean
    flipY?: boolean
    debug?: boolean
    symmetry?: boolean
  } & SVGAttributes<SVGElement>

  let {
    seed = new Date().getTime(),
    intensity = 0.5,
    class: className,
    w: svgWidth = 600,
    h: svgHeight = 600,
    start = 'top',
    end = 'bottom',
    flipX = false,
    flipY = false,
    debug = false,
    stroke = '#c2ac9b',
    symmetry = false,
    minIntensity = 0,
    'stroke-width': strokeWidth = 2,
    ...svgAttributes
  }: Props = $props()

  let generator = $derived(seededRandom(seed))

  function random(min: number, max: number) {
    return generator.random() * (max - min) + min
  }

  function mapHeight(start: Position) {
    switch (start) {
      case 'top':
        return 0
      case 'middle':
        return svgHeight / 2
      case 'bottom':
        return svgHeight
    }
  }

  let startX = 0
  let startY = $derived(mapHeight(start))
  let endX = $derived(svgWidth)
  let endY = $derived(mapHeight(end))

  let choosingBoxHeight = $derived(0.5 * svgHeight * intensity)
  let choosingBoxWidth = $derived(0.5 * svgWidth * intensity)

  let startBBOX = $derived.by(() => {
    switch (start) {
      case 'top':
        return { x: 0, y: 0 }
      case 'bottom':
        return { x: 0, y: svgHeight - choosingBoxHeight }
      case 'middle':
      default:
        return { x: 0, y: svgHeight / 2 - choosingBoxHeight / 2 }
    }
  })

  let endBBOX = $derived.by(() => {
    switch (end) {
      case 'top':
        return { x: svgWidth - choosingBoxWidth, y: 0 }
      case 'bottom':
        return { x: svgWidth - choosingBoxWidth, y: svgHeight - choosingBoxHeight }
      case 'middle':
      default:
        return { x: svgWidth - choosingBoxWidth, y: svgHeight / 2 - choosingBoxHeight / 2 }
    }
  })

  let cp1x = $derived.by(() => {
    let cp1x = random(startBBOX.x, startBBOX.x + choosingBoxWidth)
    if (cp1x < startBBOX.x + minIntensity * choosingBoxWidth) {
      cp1x = startBBOX.x + minIntensity * choosingBoxWidth
    }
    return cp1x
  })
  let cp1y = $derived.by(() => {
    let cp1y = random(startBBOX.y, startBBOX.y + choosingBoxHeight)
    if (cp1y < startBBOX.y + minIntensity * choosingBoxHeight) {
      cp1y = startBBOX.y + minIntensity * choosingBoxHeight
    }
    return cp1y
  })
  let cp2x = $derived.by(() => {
    if (symmetry) {
      return endBBOX.x + choosingBoxWidth - cp1x
    }

    let cp2x = random(endBBOX.x, endBBOX.x + choosingBoxWidth)
    if (cp2x > endBBOX.x + (1 - minIntensity) * choosingBoxWidth) {
      cp2x = endBBOX.x + (1 - minIntensity) * choosingBoxWidth
    }
    return cp2x
  })
  let cp2y = $derived.by(() => {
    if (symmetry) {
      return endBBOX.y + cp1y
    }

    let cp2y = random(endBBOX.y, endBBOX.y + choosingBoxHeight)
    if (cp2y > endBBOX.y + (1 - minIntensity) * choosingBoxHeight) {
      cp2y = endBBOX.y + (1 - minIntensity) * choosingBoxHeight
    }
    return cp2y
  })

  let path = $derived(`M ${startX},${startY} C ${cp1x},${cp1y},${cp2x},${cp2y},${endX},${endY}`)
</script>

<svg
  viewBox={`0 0 ${svgWidth} ${svgHeight}`}
  width={svgWidth}
  height={svgHeight}
  xmlns="http://www.w3.org/2000/svg"
  class:flipX
  class:flipY
  class={twMerge('squiggle', 'bg-transparent', className)}
  {stroke}
  {...svgAttributes}
>
  <path
    d={path}
    stroke-width={strokeWidth}
    fill="none"
    stroke="inherit"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  {#if debug}
    <rect
      x={startBBOX.x}
      y={startBBOX.y}
      width={choosingBoxWidth}
      height={choosingBoxHeight}
      fill="none"
      stroke="red"
    />
    <rect x={endBBOX.x} y={endBBOX.y} width={choosingBoxWidth} height={choosingBoxHeight} fill="none" stroke="blue" />
    <circle cx={cp1x} cy={cp1y} r="5" fill="red" />
    <circle cx={cp2x} cy={cp2y} r="5" fill="blue" />
  {/if}
</svg>

<style>
  .flipX {
    transform: scaleX(-1);
  }

  .flipY {
    transform: scaleY(-1);
  }
</style>
