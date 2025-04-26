<script lang="ts">
  import { alchemical } from '$lib/utils/characterUtils'
  import { fade } from 'svelte/transition'
  import SubCircle from './SubCircle.svelte'

  let width = $state(500)
  let height = $state(500)
  let container = $derived(Math.min(width, height))
  let circumference = $derived(Math.PI * container)

  const diameter = 200

  let nOfSubCirlces = $derived(Math.max(3, Math.floor(circumference / diameter)))

  let centerSymbols = $derived(
    Array.from({ length: nOfSubCirlces }, () => alchemical[Math.floor(Math.random() * alchemical.length)]).join('')
  )

  let randomCircles = $state(
    Array.from({ length: Math.floor(Math.random() * 3) }, () => Math.floor(Math.random() * nOfSubCirlces))
  )

  $effect(() => {
    const interval = setInterval(() => {
      randomCircles = Array.from({ length: Math.floor(Math.random() * 3) }, () =>
        Math.floor(Math.random() * nOfSubCirlces)
      )
    }, 5000)

    return () => clearInterval(interval)
  })
</script>

<section
  class="subs flex h-full w-full flex-1 items-center justify-center"
  bind:clientWidth={width}
  bind:clientHeight={height}
>
  <div
    class="container absolute"
    style="width: {container}px; height: {container}px; --container: {container}px; --diameter: {diameter}px; --total: {nOfSubCirlces};"
  >
    {#each centerSymbols as char, i (`${char}-${i}`)}
      <div transition:fade={{ delay: 100, duration: 1000 }} class="sub" style="--index: {i}">
        <div class="circle relative">
          <SubCircle index={i} alt={randomCircles.includes(i)} {char} />
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .container {
    position: relative;
    /* border: 1px solid var(--dark); */
    border-radius: 50%;
    /* animation: rotate 120s linear infinite; */

    display: flex;
    align-items: center;
    justify-content: center;

    --unitCircleRadius: calc(var(--container) / 2);
    --base-angle: calc(360deg / var(--total));
  }

  .sub[style*='--index'] {
    width: var(--diameter);
    height: calc(var(--unitCircleRadius));
    position: absolute;
    display: flex;

    --inner-angle: calc(var(--base-angle) * var(--index));

    transform-origin: center bottom;
    transform: translateY(calc(var(--unitCircleRadius) / -2)) rotate(var(--inner-angle));

    will-change: transform;
  }

  .sub::after {
    content: '';
    position: absolute;
    height: 1px;
    border: 1px solid var(--dark);

    --nPolygonSide: calc(var(--container) * sin(pi / var(--total)));
    width: var(--nPolygonSide);

    transform-origin: center left;
    transform: translate(calc(var(--diameter) / 2)) rotate(calc(var(--base-angle) / 2));

    border-radius: 50%;
  }

  .circle {
    top: calc(var(--diameter) / -2);
    width: var(--diameter);
    height: var(--diameter);
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
