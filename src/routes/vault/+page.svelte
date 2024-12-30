<script>
  import { dark } from '$lib/utils/colors'
  import MagicCircle from './MagicCircle.svelte'
</script>

<main
  class="relative flex min-h-svh max-w-[100svw] flex-col items-center justify-center overflow-x-hidden bg-[#141418]"
  style="--dark: {dark}"
>
  <div class="section h-svh w-full">
    <MagicCircle />
  </div>
</main>
