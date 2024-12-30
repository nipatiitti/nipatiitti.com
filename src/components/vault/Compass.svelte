<script lang="ts">
  import { accent, dark } from '$lib/utils/colors'
  import { twMerge } from 'tailwind-merge'
  import Flourish from './Embellishes/Flourish.svelte'
  import Squiggle from './Embellishes/Squiggle.svelte'
  import RandomCharacter from './RandomCharacter.svelte'

  type Props = {
    relative?: number
    size?: 'sm' | 'lg'
    dir?: 'clockwise' | 'counterclockwise'
    speed?: number
    color?: string
  }

  let { relative = 0.2, size = 'sm', dir = 'clockwise', speed = 1, color = dark }: Props = $props()

  let width = $state(0)
  let height = $state(0)

  let side = $derived(Math.min(width, height))

  let centralSquareSize = $derived(side * (1 - relative))
  let cornerSquiggleSize = $derived((side * relative) / 2)

  let [cornerSeed, centralSeed] = [new Date().getTime(), new Date().getTime() + 1]
</script>

{#snippet centralSide(rotation: number)}
  <div class="central absolute" style="--rotation: {rotation}deg;">
    <Squiggle
      width={centralSquareSize}
      intensity={size === 'lg' ? 1.3 : 1}
      minIntensity={size === 'lg' ? 1 : 0.5}
      start="top"
      symmetry
      end="top"
      height={centralSquareSize}
      seed={centralSeed}
      stroke={color}
    />
  </div>
{/snippet}

{#snippet cornerSide(rotation: number)}
  <div class="corner flex items-center justify-center" style="--rotation: {rotation}deg;">
    <Flourish variant="square" size={`${cornerSquiggleSize}px`} seed={cornerSeed} />
    {@render glow(cornerSquiggleSize * 0.5)}
    <RandomCharacter
      set="alchemical"
      class={twMerge('text-1xl absolute', size === 'lg' && 'text-2xl')}
      style={`color: ${accent}`}
    />
  </div>
{/snippet}

{#snippet glow(size: number)}
  <div class="glow" style={`width: ${size}px; height: ${size}px; filter: blur(${size / 4}px)`}></div>
{/snippet}

<div
  class="flex h-full w-full items-center justify-center overflow-visible"
  bind:clientWidth={width}
  bind:clientHeight={height}
  style="position: relative;"
>
  <div
    class="compass flex aspect-square"
    style="width: {side}px; height: {side}px; --speed: {speed};"
    class:counterclockwise={dir === 'counterclockwise'}
  >
    <div class="corner flex flex-col items-center justify-between" style={`width: ${cornerSquiggleSize}px;`}>
      {@render cornerSide(-45)}
      {@render cornerSide(-135)}
    </div>
    <div class="flex flex-1 items-center justify-center">
      {@render centralSide(0)}
      {@render centralSide(90)}
      {@render centralSide(180)}
      {@render centralSide(270)}
      {@render glow(centralSquareSize * 0.2)}
    </div>
    <div class="corner flex flex-col items-center justify-between" style={`width: ${cornerSquiggleSize}px;`}>
      {@render cornerSide(45)}
      {@render cornerSide(135)}
    </div>
  </div>
</div>

<style>
  .central {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(var(--rotation));
  }

  .corner {
    transform: rotate(var(--rotation));
  }

  .glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #65bbf7;
    opacity: 0.5;
  }

  .compass {
    animation: rotate 60s linear infinite;
  }

  .compass.counterclockwise {
    animation: rotate-ccw 60s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(calc(360deg * var(--speed)));
    }
  }

  @keyframes rotate-ccw {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(calc(-360deg * var(--speed)));
    }
  }
</style>
