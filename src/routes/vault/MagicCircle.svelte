<script>
  import { dark } from '$lib/utils/colors'
  import Canvas from '../../components/vault/Canvas/Canvas.svelte'
  import Compass from '../../components/vault/Compass.svelte'
  import Runes from '../../components/vault/Runes.svelte'
  import SubCircles from '../../components/vault/SubCircles.svelte'
</script>

<section
  class="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#141418] p-5 md:p-10"
  style="--dark: {dark}"
>
  <div class="absolute h-full w-full">
    <Runes />
  </div>

  <div class="absolute h-[70%] w-[70%]">
    <Compass size="lg" dir="counterclockwise" speed={1.5} />
  </div>

  <div class="absolute h-[55%] w-[55%]">
    <SubCircles />
  </div>

  <div class="absolute h-[40%] w-[40%] rotate-45">
    <Compass dir="clockwise" speed={2} color="#c2ac9b" />
  </div>

  <div class="absolute z-10 h-[40%] w-[40%] rotate-90">
    <Canvas />
  </div>
</section>
