<script lang="ts">
  import Flourish from './Embellishes/Flourish.svelte'
  import Squiggle from './Embellishes/Squiggle.svelte'

  type Props = {
    color?: string
    relative?: number
  }

  let { color = '#fdfae8', relative = 0.2 }: Props = $props()

  let width = $state(0)
  let height = $state(0)

  let size = $derived(Math.min(width, height))

  // The corner square will have a central square and squiggles on the corners
  let centralSquareSize = $derived(size * (1 - relative))
  let cornerSquiggleSize = $derived((size * relative) / 2)

  let [cornerSeed, centralSeed] = [new Date().getTime(), new Date().getTime() + 1]
</script>

{#snippet centralSide(rotation: number)}
  <div class="central absolute" style="--rotation: {rotation}deg;">
    <Squiggle
      width={centralSquareSize}
      intensity={2}
      minIntensity={0.6}
      start="top"
      symmetry
      end="top"
      height={centralSquareSize}
      seed={centralSeed}
    />
  </div>
{/snippet}

{#snippet cornerSide(rotation: number)}
  <div class="corner" style="--rotation: {rotation}deg;">
    <Flourish variant="square" size={`${cornerSquiggleSize}px`} seed={cornerSeed} />
    {@render glow(cornerSquiggleSize * 0.5)}
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
  <div class="compass flex aspect-square" style="width: {size}px; height: {size}px;">
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
  }

  .compass {
    animation: rotate 60s linear infinite;
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
