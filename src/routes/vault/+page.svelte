<script>
  import { dark } from '$lib/utils/colors'
  import Compass from '../../components/vault/Compass.svelte'
  import Runes from '../../components/vault/Runes.svelte'
  import SubCircles from '../../components/vault/SubCircles.svelte'
</script>

<main
  class="door relative flex h-svh w-svw items-center justify-center overflow-hidden bg-[#141418] p-5 md:p-10"
  style="--dark: {dark}"
>
  <div class="absolute h-full w-full">
    <Runes />
  </div>
  <div class="absolute h-[70vh] w-[70vw]">
    <Compass size="lg" dir="counterclockwise" speed={1.5} />
  </div>

  <div class="absolute h-[55vh] w-[55vw]">
    <SubCircles />
  </div>
  <div class="absolute h-[40vh] w-[40vw] rotate-45">
    <Compass dir="clockwise" speed={2} color="#c2ac9b" />
  </div>
</main>
