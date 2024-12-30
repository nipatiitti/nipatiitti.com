<script lang="ts">
  import Runes from './Runes.svelte'

  type Props = {
    index?: number
    char?: string
  }

  let { index = 0, char = ' ' }: Props = $props()

  let color = $state('#c2ac9b')
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

    /* Reset rotation */
    --baseline_rotation: calc(-1 * var(--inner-angle) * var(--index));
    transform: rotate(var(--baseline_rotation));
    animation: sub-circle 120s linear infinite;
  }

  .sub-circle::after {
    content: '';
    position: absolute;
    width: 70%;
    height: 70%;
    border: 1px solid var(--color);
    border-radius: 50%;
  }

  @keyframes sub-circle {
    0% {
      transform: rotate(calc(var(--baseline_rotation) + 0deg));
    }
    100% {
      transform: rotate(calc(var(--baseline_rotation) + 360deg));
    }
  }
</style>
