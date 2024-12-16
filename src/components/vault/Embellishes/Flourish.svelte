<script lang="ts">
  import Squiggle from './Squiggle.svelte'

  type Props = {
    variant?: 'square' | 'triangle' | 'star'
    color?: string
    strokeWidth?: number
    size?: number | string
    seed?: number
  }

  let { variant = 'square', size = '100%', seed, ...rest }: Props = $props()

  let width = $state(0)
  let height = $state(0)

  let baseSeed = seed ?? new Date().getTime()

  const [topSeed, bottomSeed, middleSeed] = [baseSeed, baseSeed + 1, baseSeed + 2] as const
</script>

<div
  class="flourish flex flex-col"
  style="width: {size}; height: {size};"
  bind:clientWidth={width}
  bind:clientHeight={height}
>
  {#if variant === 'square'}
    <div class="top-row flex w-full justify-center">
      <Squiggle w={width / 2} h={height / 2} seed={topSeed} start="bottom" end="top" intensity={1.5} {...rest} />
      <Squiggle w={width / 2} h={height / 2} seed={topSeed} start="bottom" end="top" intensity={1.5} flipX {...rest} />
    </div>
    <div class="bottom-row flex w-full justify-center">
      <Squiggle w={width / 2} h={height / 2} seed={bottomSeed} start="top" end="bottom" intensity={1.5} {...rest} />
      <Squiggle
        w={width / 2}
        h={height / 2}
        seed={bottomSeed}
        start="top"
        end="bottom"
        intensity={1.5}
        flipX
        {...rest}
      />
    </div>
  {/if}
</div>
