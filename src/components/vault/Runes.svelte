<script lang="ts">
  import { highlight } from '$lib/utils/colors'
  import { fade } from 'svelte/transition'
  import { runic } from '../../lib/utils/characterUtils'

  type Props = {
    dir?: 'clockwise' | 'counterclockwise'
    color?: string
    glow?: boolean
    swapping?: boolean
    speed?: number
  }

  let { dir = 'clockwise', color = highlight, glow = true, swapping = true, speed = 1 }: Props = $props()

  // 1 ch in px when font-size is 1rem
  const chWidth = 2
  const ch = 11 * chWidth

  let runesAmount = $state(100)
  let chars = $state(Array.from({ length: 100 }, () => runic[Math.floor(Math.random() * runic.length)]).join(''))

  let width = $state(0)
  let height = $state(0)

  function generateRunes() {
    if (chars.length < runesAmount) {
      // Add new runes if needed
      for (let i = chars.length; i < runesAmount; i++) {
        chars += runic[Math.floor(Math.random() * runic.length)]
      }
    } else if (chars.length > runesAmount) {
      // Remove excess runes if needed
      chars = chars.substring(0, runesAmount)
    }
  }

  function randomlyChangeOne() {
    const index = Math.floor(Math.random() * runesAmount)
    const newChar = runic[Math.floor(Math.random() * runic.length)]
    chars = chars.substring(0, index) + newChar + chars.substring(index + 1)
  }

  $effect(() => {
    const size = Math.min(width, height)
    const circumference = Math.PI * size
    const characters = Math.floor(circumference / ch)
    runesAmount = characters
    generateRunes()

    if (!swapping) return

    const delay = 2500 / runesAmount // 2.5s on avg for a rune to change
    const interval = setInterval(() => {
      randomlyChangeOne()
    }, delay)

    return () => clearInterval(interval)
  })
</script>

<section
  class="runes absolute flex h-full w-full flex-1 items-center justify-center overflow-hidden"
  bind:clientWidth={width}
  bind:clientHeight={height}
>
  <span
    class="text-ring"
    style="--total: {runesAmount}; --characterWidth: {chWidth}; --color: {color}; --speed: {speed};"
    class:clockwise={dir === 'clockwise'}
    class:counterclockwise={dir === 'counterclockwise'}
  >
    {#each chars as char, i (`${char}-${i}`)}
      <span
        transition:fade={{ delay: 100, duration: 1000 }}
        class:alternative={glow ? Math.random() < 0.2 : false}
        class="font-mono"
        style="--index: {i}"
      >
        {char}
      </span>
    {/each}
  </span>
</section>

<style>
  .text-ring {
    position: relative;
    color: var(--color);
    font-weight: 200;
  }

  .text-ring.clockwise {
    animation: rotate-cw 60s linear infinite;
  }

  .text-ring.counterclockwise {
    animation: rotate-ccw 60s linear infinite;
  }

  .text-ring [style*='--index'] {
    /* In "ch" units */
    --inner-angle: calc((360 / var(--total)) * 1deg);
    --radius: calc((var(--characterWidth, 1) / sin(var(--inner-angle))) * -1ch);
    font-weight: lighter;
    font-size: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(calc(var(--inner-angle) * var(--index))) translateY(var(--radius, -5ch));
    will-change: transform opacity;
    z-index: 1;
  }

  .text-ring .alternative::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(180deg);
    width: 1ch;
    height: 1ch;
    background: var(--color);
    border-radius: 50%;
    filter: blur(10px);
  }

  @keyframes rotate-cw {
    to {
      transform: rotate(calc(var(--speed) * 1turn));
    }
  }

  @keyframes rotate-ccw {
    to {
      transform: rotate(calc(var(--speed) * -1turn));
    }
  }
</style>
