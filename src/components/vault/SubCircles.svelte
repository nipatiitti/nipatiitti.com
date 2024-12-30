<script lang="ts">
  import { fade } from 'svelte/transition'
  import { alchemical } from '../../lib/utils/characterUtils'
  import SubCircle from './SubCircle.svelte'

  const subCircleMaxDiameter = 100
  const minSubCircles = 6

  let alternative = $state(false)

  let diameter = $state<[number, number, number]>([0, 0, 0])
  let subCircleWidth = $state(100)
  let numberOfSubCircles = $state(minSubCircles)
  let centerSymbols = $derived(
    Array.from({ length: numberOfSubCircles }, () => alchemical[Math.floor(Math.random() * alchemical.length)]).join('')
  )

  let width = $state(0)
  let height = $state(0)

  const swapToAlternative = () => {
    // This function is called on every animation frame and it might swap to the alternative state

    // 1 in 100 chance to swap to alternative
    if (Math.random() < 0.01) {
      alternative = !alternative
    }
  }

  $effect(() => {
    const padding = 20
    const containerCircleDiameter = Math.min(width, height) - padding * 2
    const circumference = Math.PI * containerCircleDiameter

    let subCircles = Math.floor(circumference / subCircleMaxDiameter)
    numberOfSubCircles = Math.max(subCircles, minSubCircles)
    subCircleWidth = circumference / numberOfSubCircles
    diameter = [
      containerCircleDiameter + subCircleWidth,
      containerCircleDiameter,
      containerCircleDiameter - subCircleWidth
    ]
  })
</script>

<section
  class="sub-circles flex h-full w-full flex-1 items-center justify-center"
  bind:clientWidth={width}
  bind:clientHeight={height}
>
  <div class="circle absolute" style="width: {diameter[0]}px; height: {diameter[0]}px;"></div>
  <div class="circle absolute" style="width: {diameter[2]}px; height: {diameter[2]}px;"></div>
  <span
    class="text-ring absolute"
    style="--total: {numberOfSubCircles}; --subCircleWidth: {subCircleWidth}; --radius: {diameter[1]}; max-width: {subCircleMaxDiameter}px; max-height: {subCircleMaxDiameter}px;"
  >
    {#each centerSymbols as char, i (`${char}-${i}`)}
      <div transition:fade={{ delay: 100, duration: 1000 }} class="sub-circle font-mono" style="--index: {i}">
        <SubCircle index={i} {char} />
      </div>
    {/each}
  </span>
</section>

<style>
  .text-ring {
    position: relative;
    animation: rotate 120s linear infinite;
  }

  .sub-circle[style*='--index'] {
    --inner-angle: calc((360 / var(--total)) * 1deg);

    width: calc(var(--subCircleWidth) * 1px);
    height: calc(var(--subCircleWidth) * 1px);
    border-radius: 9999px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(calc(var(--inner-angle) * var(--index))) translateY(var(--radius, -100px));
    will-change: transform;
    z-index: 1;
  }

  .circle {
    border: 1px solid var(--dark);
    border-radius: 50%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
</style>
