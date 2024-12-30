<script lang="ts">
  import { accent, dark } from '$lib/utils/colors'
  import Runes from './Runes.svelte'

  type Props = {
    index?: number
    char?: string
    alt?: boolean
  }

  let { index = 0, char = ' ', alt = false }: Props = $props()

  let color = $derived(alt ? accent : dark)
</script>

<div class="sub-circle" style="--index: {index}; --color: {color};">
  <Runes glow={false} swapping={false} dir="counterclockwise" speed={3} {color} />
  <span class="absolute text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
    {char}
  </span>
</div>

<style>
  .sub-circle {
    color: var(--color);

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    border: 1px solid var(--color);
    border-radius: 50%;
  }

  .sub-circle::after {
    content: '';
    position: absolute;
    width: 70%;
    height: 70%;
    border: 1px solid var(--color);
    border-radius: 50%;
    transition: border-color 0.5s;
  }
</style>
