<script lang="ts">
  import { fade } from 'svelte/transition'
  import { runic } from '../../lib/utils/characterUtils'
  import Glowing from './Glowing.svelte'

  // 1 ch in px when font-size is 1rem
  const chWidth = 2
  const ch = 11 * chWidth

  let runesAmount = $state(100)
  let chars = $state('')

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

    const delay = 2500 / runesAmount // 2.5s on avg for a rune to change
    const interval = setInterval(() => {
      randomlyChangeOne()
    }, delay)

    return () => clearInterval(interval)
  })
</script>

<section
  class="runes flex h-full w-full flex-1 items-center justify-center overflow-hidden"
  bind:clientWidth={width}
  bind:clientHeight={height}
>
  <span class="text-ring" style="--total: {runesAmount}; --characterWidth: {chWidth}">
    {#each chars as char, i (`${char}-${i}`)}
      <span transition:fade={{ delay: 100, duration: 1000 }} class="font-mono" style="--index: {i}">
        <Glowing chance={0.15}>
          {char}
        </Glowing>
      </span>
    {/each}
  </span>
</section>

<style>
  .text-ring {
    position: relative;
    color: #f858c5;

    animation: rotate 60s linear infinite;

    font-weight: 200;
  }

  .text-ring [style*='--index'] {
    /* In "ch" units */
    --inner-angle: calc((360 / var(--total)) * 1deg);
    --radius: calc((var(--characterWidth, 1) / sin(var(--inner-angle))) * -1ch);
    font-weight: bold;
    font-weight: lighter;
    text-transform: uppercase;
    font-size: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(calc(var(--inner-angle) * var(--index))) translateY(var(--radius, -5ch));
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
</style>
